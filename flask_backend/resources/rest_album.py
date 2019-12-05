from datetime import datetime

from flask_restful import Resource
from flask_backend.models.db_album import DBAlbum
from flask_backend.models.db_image import DBImage
from flask_backend.routes import get_params_dict
from flask import request

from flask_backend.resources import api_authentication
from flask_backend import db

import time


class RESTAlbum(Resource):
    def get(self):
        # Get a list of all contacts
        params_dict = get_params_dict(request)

        album_list = []
        album_id_to_index_dict = {}

        raw_album_list = DBAlbum.query.all()
        index = 0

        for album in raw_album_list:

            # ---------------------------------------------------------------------------------------------------------
            # Determining the images in each album
            if api_authentication.is_authenticated(params_dict["email"], params_dict["api_key"], new_api_key=False)["Status"] == "Ok":
                image_list = DBImage.query.filter(DBImage.album_id == album.id).all()
                image_count = len(image_list)
                visible_image_count = len(DBImage.query.filter(DBImage.album_id == album.id).filter(DBImage.visible == 1).all())
            else:
                image_list = DBImage.query.filter(DBImage.album_id == album.id).filter(DBImage.visible == 1).all()
                image_count = len(image_list)
                visible_image_count = len(image_list)

                if visible_image_count == 0:
                    continue

            # ---------------------------------------------------------------------------------------------------------
            # Determining the albums title image

            title_image = DBImage.query.filter(DBImage.id == album.title_image_id).first()

            if title_image is None:
                title_image_paths = {
                    "filepath_small": "https://storage.googleapis.com/i14-worlds-2021-gallery/default-images/default-image-1-small.jpg",
                    "filepath_medium": "https://storage.googleapis.com/i14-worlds-2021-gallery/default-images/default-image-1-medium.jpg",
                    "filepath_large": "https://storage.googleapis.com/i14-worlds-2021-gallery/default-images/default-image-1-large.jpg",
                    "filepath_full": "https://storage.googleapis.com/i14-worlds-2021-gallery/default-images/default-image-1.jpg",
                }
            else:
                title_image_paths = {
                    "filepath_small": title_image.filepath_small,
                    "filepath_medium": title_image.filepath_medium,
                    "filepath_large": title_image.filepath_large,
                    "filepath_full": title_image.filepath_full
                }

            # ---------------------------------------------------------------------------------------------------------
            # Getting the json representation of the albums images

            image_list = [{"description": image.description,
                           "timestamp": datetime.timestamp(image.datetime),
                           "visible": image.visible,
                           "filepath_small": image.filepath_small,
                           "filepath_medium": image.filepath_medium,
                           "filepath_large": image.filepath_large,
                           "filepath_full": image.filepath_full,
                           "id": image.id} for image in image_list]

            image_id_to_index_dict = {}
            for i in range(len(image_list)):
                image_id_to_index_dict[image_list[i]["id"]] = i

            # ---------------------------------------------------------------------------------------------------------
            # Getting the json representation of each album

            album_representation = {
                "id": album.id,
                "name": album.name,
                "image_count": image_count,
                "visible_image_count": visible_image_count,
                "title_image_paths": title_image_paths,
                "image_id_to_index_dict": image_id_to_index_dict,
                "images": image_list
            }

            # ---------------------------------------------------------------------------------------------------------
            # Adding representations to result list/dict

            album_list.append(album_representation)

            album_id_to_index_dict[str(album.id)] = index
            index += 1

            # The purpose of "album_id_to_index_dict" is to provide a fast way to look
            # up the list_index of a given album_id. I am sure there is a better way but
            # I haven't done anything with NoSql Databases and don't really know how to
            # efficiently query a JSON

        return {"albums": album_list,
                "album_id_to_index": album_id_to_index_dict}, 200


    def post(self):
        # Create a new contact
        time.sleep(1)
        params_dict = get_params_dict(request)

        if api_authentication.is_authenticated(params_dict["email"], params_dict["api_key"], new_api_key=False)["Status"] == "Ok":

            new_album = DBAlbum()

            if "album_name" in params_dict:
                new_album.name = params_dict["album_name"]
            else:
                new_album.name = ""

            if "album_title_image_id" in params_dict:
                new_album.title_image_id = (params_dict["album_title_image_id"])
            else:
                new_album.title_image_id = 0

            # Flushing the element so that I can read its id
            db.session.add(new_album)
            db.session.commit()

            return {"Status": "Ok",
                    "new_album_id": new_album.id}, 200
        else:
            return {"Status": "Api key invalid"}, 200

    def put(self):
        # Modify an existing contact
        params_dict = get_params_dict(request)

        if api_authentication.is_authenticated(params_dict["email"], params_dict["api_key"], new_api_key=False)["Status"] == "Ok":
            if "album_id" not in params_dict:
                return {"Status": "Album id missing"}, 200

            album_to_modify = DBAlbum.query.filter(DBAlbum.id == params_dict["album_id"]).first()

            if "album_name" in params_dict:
                album_to_modify.name = params_dict["album_name"]

            if "album_title_image_id" in params_dict:
                album_to_modify.title_image_id = (params_dict["album_title_image_id"])

            db.session.commit()

            return {"Status": "Ok"}, 200
        else:
            return {"Status": "Api key invalid"}, 200

    def delete(self):
        # Delete an existing contact
        params_dict = get_params_dict(request)

        if api_authentication.is_authenticated(params_dict["email"], params_dict["api_key"], new_api_key=False)["Status"] == "Ok":
            if "album_id" not in params_dict:
                return {"Status": "Album id missing"}, 200

            DBAlbum.query.filter(DBAlbum.id == params_dict["album_id"]).delete()
            db.session.commit()

            return {"Status": "Ok"}, 200
        else:
            return {"Status": "Api key invalid"}, 200
