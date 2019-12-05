from datetime import datetime
import markdown
import re

from flask_restful import Resource
from flask_backend.models.db_article import DBArticle
from flask_backend.routes import get_params_dict
from flask import request

from flask_backend.resources import api_authentication
from flask_backend import db

import time


def markdown_to_html_content(markdown_snippet):
    md = markdown.Markdown(extensions=['nl2br'])

    if markdown_snippet != "":
        html = md.convert(markdown_snippet)
        html = html.replace("<br />", "<br>")
        # html = html.replace("<p></p>", "")
        if "href" not in markdown_snippet:
            html = html.replace("href", "target='_blank' href")
        return html
    else:
        return ""


def html_to_plain_content(html_snippet):
    if html_snippet != "":
        preview_html = re.sub("<.*?>", "", html_snippet)
        return preview_html
    else:
        return ""


class RESTArticle(Resource):
    def get(self):
        # Get a list of all articles
        params_dict = get_params_dict(request)

        if api_authentication.is_authenticated(params_dict["email"], params_dict["api_key"], new_api_key=False)["Status"] == "Ok":
            article_query = DBArticle.query.all()
        else:
            article_query = DBArticle.query.filter(DBArticle.visible == 1).all()

        article_list = []

        for article in article_query:
            article_representation = {}

            image_list = []  # DBImage.query.filter(DBImage.album_id == album.id).all()

            image_list = [{"description": image.description,
                           "timestamp": datetime.timestamp(image.datetime),
                           "visible": image.visible,
                           "filepath_small": image.filepath_small,
                           "filepath_medium": image.filepath_medium,
                           "filepath_large": image.filepath_large,
                           "filepath_full": image.filepath_full,
                           "id": image.id} for image in image_list]

            if len(image_list) == 0:
                image_list.append({
                    "description": "",
                    "timestamp": 0,
                    "visible": 1,
                    "filepath_small": "https://storage.googleapis.com/i14-worlds-2021-gallery/default-images/default-image-1-small.jpg",
                    "filepath_medium": "https://storage.googleapis.com/i14-worlds-2021-gallery/default-images/default-image-1-medium.jpg",
                    "filepath_large": "https://storage.googleapis.com/i14-worlds-2021-gallery/default-images/default-image-1-large.jpg",
                    "filepath_full": "https://storage.googleapis.com/i14-worlds-2021-gallery/default-images/default-image-1.jpg",
                    "id": 0
                })

            article_representation = {"headline": article.headline,
                                      "content_markdown": article.content_markdown,
                                      "content_html": article.content_html,
                                      "content_plain": article.content_plain,
                                      "author": article.author,
                                      "timestamp": datetime.timestamp(article.datetime),
                                      "visible": article.visible,
                                      "images": image_list,
                                      "id": article.id}

            article_list.append(article_representation)

        article_id_to_index = {}

        for article_index in range(len(article_list)):
            article_id_to_index[article_list[article_index]["id"]] = article_index

        return {"articles": article_list,
                "article_id_to_index": article_id_to_index}, 200

    def post(self):
        # Create a new article
        time.sleep(1.5)
        params_dict = get_params_dict(request)

        if api_authentication.is_authenticated(params_dict["email"], params_dict["api_key"], new_api_key=False)["Status"] == "Ok":

            new_article = DBArticle()

            if "article_headline" in params_dict:
                new_article.headline = params_dict["article_headline"]
            else:
                new_article.headline = ""

            if "article_content" in params_dict:
                new_article.content_markdown = params_dict["article_content"]
                new_article.content_html = markdown_to_html_content(params_dict["article_content"])
                new_article.content_plain = html_to_plain_content(new_article.content_html)
            else:
                new_article.content_markdown = ""
                new_article.content_html = ""
                new_article.content_plain = ""

            if "article_author" in params_dict:
                new_article.author = params_dict["article_author"]
            else:
                new_article.author = ""

            if "article_timestamp" in params_dict:
                new_article.datetime = datetime.fromtimestamp(int(params_dict["article_timestamp"]))
            else:
                new_article.datetime = datetime.now()

            if "article_visible" in params_dict:
                new_article.visible = int(params_dict["article_visible"])
            else:
                new_article.visible = 0

            # Linking of images in the end

            db.session.add(new_article)
            db.session.commit()

            return {"Status": "Ok",
                    "new_article_id": new_article.id}, 200
        else:
            return {"Status": "Api key invalid"}, 200

    def put(self):
        time.sleep(1.5)
        # Modify an existing article
        params_dict = get_params_dict(request)

        if api_authentication.is_authenticated(params_dict["email"], params_dict["api_key"], new_api_key=False)["Status"] == "Ok":

            if "article_id" not in params_dict:
                return {"Status": "Article id missing"}, 200

            article_to_modify = DBArticle.query.filter(DBArticle.id == params_dict["article_id"]).first()

            if "article_headline" in params_dict:
                article_to_modify.headline = params_dict["article_headline"]

            if "article_content" in params_dict:
                article_to_modify.content_markdown = params_dict["article_content"]
                article_to_modify.content_html = markdown_to_html_content(params_dict["article_content"])
                article_to_modify.content_plain = html_to_plain_content(article_to_modify.content_html)

            if "article_author" in params_dict:
                article_to_modify.author = params_dict["article_author"]

            if "article_timestamp" in params_dict:
                article_to_modify.datetime = datetime.fromtimestamp(int(params_dict["article_timestamp"]))

            if "article_visible" in params_dict:
                article_to_modify.visible = int(params_dict["article_visible"])

            # Linking of images in the end

            db.session.commit()

            return {"Status": "Ok"}, 200
        else:
            return {"Status": "Api key invalid"}, 200

    def delete(self):
        # Delete an existing article
        params_dict = get_params_dict(request)

        if api_authentication.is_authenticated(params_dict["email"], params_dict["api_key"], new_api_key=False)["Status"] == "Ok":

            if "article_id" not in params_dict:
                return {"Status": "Article id missing"}, 200

            DBArticle.query.filter(DBArticle.id == params_dict["article_id"]).delete()

            # Unlinking of images in the end

            db.session.commit()

            return {"Status": "Ok"}, 200
        else:
            return {"Status": "Api key invalid"}, 200
