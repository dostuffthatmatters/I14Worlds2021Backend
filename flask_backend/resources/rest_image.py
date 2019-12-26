from datetime import datetime

from flask_restful import Resource
from flask_backend.models.db_image import DBImage
from flask_backend.models.db_album import DBAlbum
from flask_backend.models.db_article import DBArticleImageLink

from flask_backend.routes import get_params_dict
from flask import request

from flask_backend.resources import api_authentication
from flask_backend import db

from flask_backend.file_storage import file_storage_methods

import os

from werkzeug.utils import secure_filename

ALLOWED_EXTENSIONS = ['png', 'jpg', 'jpeg']


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS




class RESTImage(Resource):
    def get(self):
        # Get a list of all contacts
        params_dict = get_params_dict(request)

        if api_authentication.is_authenticated(params_dict["email"], params_dict["api_key"], new_api_key=False)["Status"] == "Ok":
            image_list = DBImage.query.all()
        else:
            image_list = DBImage.query.filter(DBImage.visible == 1).all()

        image_list = [{"description": image.description,
                       "timestamp": datetime.timestamp(image.datetime),
                       "visible": image.visible,
                       "filepath_small": image.filepath_small,
                       "filepath_medium": image.filepath_medium,
                       "filepath_large": image.filepath_large,
                       "filepath_full": image.filepath_full,
                       "id": image.id} for image in image_list]
        return {"images": image_list}, 200

    def post(self):
        # Create a new contact
        params_dict = get_params_dict(request)

        if api_authentication.is_authenticated(params_dict["email"], params_dict["api_key"], new_api_key=False)["Status"] == "Ok":

            # ---------------------------------------------------------------------------------------------------------

            new_image = DBImage()

            if "image_description" in params_dict:
                new_image.description = params_dict["image_description"]
            else:
                new_image.description = ""
            
            if "image_timestamp" in params_dict:
                new_image.datetime = datetime.fromtimestamp(int(params_dict["image_timestamp"]))
            else:
                new_image.datetime = datetime.now()

            if "image_visible" in params_dict:
                new_image.visible = int(params_dict["image_visible"])
            else:
                new_image.visible = 0

            if "image_album_id" in params_dict:
                new_image.album_id = int(params_dict["image_album_id"])
                album = DBAlbum.query.filter(DBAlbum.id == new_image.album_id).first()
                if album is None:
                    return {"Status": "Invalid album id"}, 200
            else:
                return {"Status": "Invalid album id is missing"}, 200

            # Flushing the element so that I can read its id
            db.session.add(new_image)
            db.session.flush()

            # ---------------------------------------------------------------------------------------------------------

            # Getting the image file from the request
            if "image_file" not in request.files:
                return {"Status": "Image file is missing"}, 200

            file = request.files['image_file']

            if not file:
                return {"Status": "Image file is missing"}, 200

            if not allowed_file(file.filename):
                return {"Status": "File name is not allowed missing"}, 200

            filename = secure_filename(file.filename)
            extension = filename.split(".")[-1].lower()
            filename = f"image-{new_image.id}.{extension}"

            # ---------------------------------------------------------------------------------------------------------

            # Saving the original file
            intermediate_upload_folder = "flask_backend/file_storage/intermediate_storage/"
            absolute_root_folder = os.getcwd()
            absolute_upload_folder = absolute_root_folder + "/" + intermediate_upload_folder
            filepath = intermediate_upload_folder + filename
            file.save(filepath)

            # ---------------------------------------------------------------------------------------------------------

            # Creating multiple differently sized copies
            crop_result = file_storage_methods.create_cropped_versions(intermediate_upload_folder, filename)

            if crop_result["Status"] != "Ok":
                return {"Status": crop_result["Status"]}, 200

            # ---------------------------------------------------------------------------------------------------------

            # Uploading these files
            storage_result = file_storage_methods.upload_files(intermediate_upload_folder, crop_result["files"])

            if storage_result["Status"] != "Ok":
                return {"Status": storage_result["Status"]}, 200

            # ---------------------------------------------------------------------------------------------------------

            # Saving absolute filepaths to database record
            absolute_gcloud_paths = storage_result["absolute_gcloud_paths"]

            new_image.filepath_small = absolute_gcloud_paths["small"]
            new_image.filepath_medium = absolute_gcloud_paths["medium"]
            new_image.filepath_large = absolute_gcloud_paths["large"]
            new_image.filepath_full = absolute_gcloud_paths["full"]

            # ---------------------------------------------------------------------------------------------------------

            # Removing files from intermediate storage
            for file in os.listdir(absolute_root_folder + "/" + intermediate_upload_folder):
                if file[0:6] == "image-":
                    os.remove(absolute_root_folder + "/" + intermediate_upload_folder + file)

            # ---------------------------------------------------------------------------------------------------------

            db.session.commit()

            return {"Status": "Ok",
                    "new_image_id": new_image.id}, 200
        else:
            return {"Status": "Api key invalid"}, 200

    def put(self):
        # Modify an existing contact
        params_dict = get_params_dict(request)

        if api_authentication.is_authenticated(params_dict["email"], params_dict["api_key"], new_api_key=False)["Status"] == "Ok":
            if "image_id" not in params_dict:
                return {"Status": "Image id missing"}, 200

            image_to_modify = DBImage.query.filter(DBImage.id == params_dict["image_id"]).first()

            if "image_description" in params_dict:
                image_to_modify.description = params_dict["image_description"]

            if "image_timestamp" in params_dict:
                image_to_modify.datetime = datetime.fromtimestamp(int(params_dict["image_timestamp"]))

            if "image_visible" in params_dict:
                image_to_modify.visible = int(params_dict["image_visible"])

            if "image_album_id" in params_dict:
                image_to_modify.album_id = int(params_dict["image_album_id"])
                album = DBAlbum.query.filter(DBAlbum.id == image_to_modify.album_id).first()
                if album is None:
                    return {"Status": "Invalid album id"}, 200

            db.session.commit()

            return {"Status": "Ok"}, 200
        else:
            return {"Status": "Api key invalid"}, 200

    def delete(self):
        # Delete an existing contact
        params_dict = get_params_dict(request)

        if api_authentication.is_authenticated(params_dict["email"], params_dict["api_key"], new_api_key=False)["Status"] == "Ok":
            if "image_id" not in params_dict:
                return {"Status": "Image id missing"}, 200

            image_to_remove = DBImage.query.filter(DBImage.id == params_dict["image_id"]).first()

            absolute_gcloud_paths_to_remove = [
                image_to_remove.filepath_small,
                image_to_remove.filepath_medium,
                image_to_remove.filepath_large,
                image_to_remove.filepath_full,
            ]

            file_storage_methods.remove_files(absolute_gcloud_paths_to_remove)

            DBImage.query.filter(DBImage.id == params_dict["image_id"]).delete()

            album_to_modify = DBAlbum.query.filter(DBAlbum.title_image_id == params_dict["image_id"]).first()
            if album_to_modify is not None:
                album_to_modify.title_image_id = 0

            DBArticleImageLink.query.filter(DBArticleImageLink.image_id == params_dict["image_id"]).delete()

            db.session.commit()

            return {"Status": "Ok"}, 200
        else:
            return {"Status": "Api key invalid"}, 200
