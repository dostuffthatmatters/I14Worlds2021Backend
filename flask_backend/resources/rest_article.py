from datetime import datetime
import markdown
import re

from flask_restful import Resource
from flask_backend.models.db_article import DBArticle, DBArticleImageLink
from flask_backend.models.db_image import DBImage
from flask_backend.routes import get_params_dict
from flask import request

from flask_backend.resources import api_authentication
from flask_backend import db


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

            image_list = []
            favorite_image_id = 0
            selected_image_ids = []

            print("Favorite Links in total:")
            print(DBArticleImageLink.query.filter(DBArticleImageLink.favorite_image == 1).all())

            print("Selected Links in total:")
            print(DBArticleImageLink.query.filter(DBArticleImageLink.favorite_image == 0).all())

            favorite_image_link = DBArticleImageLink.query.filter(DBArticleImageLink.article_id == article.id) \
                .filter(DBArticleImageLink.favorite_image == 1).first()

            if favorite_image_link is not None:
                favorite_image = DBImage.query.filter(DBImage.id == favorite_image_link.image_id).first()
                if favorite_image is not None:
                    favorite_image_id = favorite_image_link.image_id
                    image_list.append(favorite_image)

            selected_images = DBArticleImageLink.query.filter(DBArticleImageLink.article_id == article.id) \
                .filter(DBArticleImageLink.favorite_image == 0).all()

            print("selected_images")
            print(selected_images)

            for selected_image in selected_images:
                image = DBImage.query.filter(DBImage.id == selected_image.image_id).first()
                if image is not None:
                    selected_image_ids.append(selected_image.image_id)
                    image_list.append(image)

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
                                      "selected_image_ids": selected_image_ids,
                                      "favorite_image_id": favorite_image_id,
                                      "id": article.id}

            article_list.append(article_representation)

        article_id_to_index = {}

        for article_index in range(len(article_list)):
            article_id_to_index[article_list[article_index]["id"]] = article_index

        return {"articles": article_list,
                "article_id_to_index": article_id_to_index}, 200

    def post(self):
        # Create a new article
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

            db.session.add(new_article)
            db.session.flush()

            if "article_selected_image_ids" in params_dict:
                for image_id in params_dict["article_selected_image_ids"]:
                    image_id = int(image_id)
                    new_link = DBArticleImageLink()
                    new_link.image_id = image_id
                    new_link.article_id = new_article.id
                    new_link.favorite_image = 0
                    db.session.add(new_link)

            if "article_favorite_image_id" in params_dict:
                favorite_image_id = int(params_dict["article_favorite_image_id"])
                new_link = DBArticleImageLink()
                new_link.image_id = favorite_image_id
                new_link.article_id = new_article.id
                new_link.favorite_image = 1
                db.session.add(new_link)

            db.session.commit()

            return {"Status": "Ok",
                    "new_article_id": new_article.id}, 200

        else:
            return {"Status": "Api key invalid"}, 200


    def put(self):
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

            if "article_selected_image_ids" in params_dict:
                # Less performant but way more bug free to just
                # reinitialize all article-image-links in case
                # they have changed
                print({
                    "article_to_modify.id": article_to_modify.id,
                })
                DBArticleImageLink.query.filter(DBArticleImageLink.article_id == article_to_modify.id)\
                    .filter(DBArticleImageLink.favorite_image == 0).delete()

                for image_id in params_dict["article_selected_image_ids"]:
                    image_id = int(image_id)
                    new_link = DBArticleImageLink()
                    new_link.image_id = image_id
                    new_link.article_id = article_to_modify.id
                    new_link.favorite_image = 0
                    print(new_link)
                    db.session.add(new_link)

                print("Links in total:")
                print(DBArticleImageLink.query.all())

            if "article_favorite_image_id" in params_dict:
                DBArticleImageLink.query.filter(DBArticleImageLink.article_id == article_to_modify.id) \
                    .filter(DBArticleImageLink.favorite_image == 1).delete()

                favorite_image_id = int(params_dict["article_favorite_image_id"])
                new_link = DBArticleImageLink()
                new_link.image_id = favorite_image_id
                new_link.article_id = article_to_modify.id
                new_link.favorite_image = 1
                db.session.add(new_link)

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

            DBArticleImageLink.query.filter(DBArticleImageLink.article_id == params_dict["article_id"]).delete()
            DBArticle.query.filter(DBArticle.id == params_dict["article_id"]).delete()

            db.session.commit()

            return {"Status": "Ok"}, 200
        else:
            return {"Status": "Api key invalid"}, 200
