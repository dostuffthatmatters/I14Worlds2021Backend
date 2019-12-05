from flask_restful import Resource
from flask_backend.models.db_contact import DBContact
from flask_backend.routes import get_params_dict
from flask import request

from flask_backend.resources import api_authentication
from flask_backend import db

import time


class RESTContact(Resource):
    def get(self):
        # Get a list of all contacts
        params_dict = get_params_dict(request)

        if api_authentication.is_authenticated(params_dict["email"], params_dict["api_key"], new_api_key=False)["Status"] == "Ok":
            contact_list = DBContact.query.all()
        else:
            contact_list = DBContact.query.filter(DBContact.visible == 1).all()

        contact_list = [{"role": contact.role,
                         "name": contact.name,
                         "email": contact.email,
                         "visible": contact.visible,
                         "id": contact.id} for contact in contact_list]
        return {"contacts": contact_list}, 200

    def post(self):
        # Create a new contact
        time.sleep(1)
        params_dict = get_params_dict(request)

        if api_authentication.is_authenticated(params_dict["email"], params_dict["api_key"], new_api_key=False)["Status"] == "Ok":
            new_contact = DBContact()

            if "contact_role" in params_dict:
                new_contact.role = params_dict["contact_role"]
            else:
                new_contact.role = ""

            if "contact_name" in params_dict:
                new_contact.name = params_dict["contact_name"]
            else:
                new_contact.name = ""

            if "contact_email" in params_dict:
                new_contact.email = params_dict["contact_email"]
            else:
                new_contact.email = ""

            if "contact_visible" in params_dict:
                new_contact.visible = int(params_dict["contact_visible"])
            else:
                new_contact.visible = 0

            db.session.add(new_contact)
            db.session.commit()

            return {"Status": "Ok",
                    "new_contact_id": new_contact.id}, 200
        else:
            return {"Status": "Api key invalid"}, 200

    def put(self):
        # Modify an existing contact
        params_dict = get_params_dict(request)

        if api_authentication.is_authenticated(params_dict["email"], params_dict["api_key"], new_api_key=False)["Status"] == "Ok":
            if "contact_id" not in params_dict:
                return {"Status": "Contact id missing"}, 200

            contact_to_modify = DBContact.query.filter(DBContact.id == params_dict["contact_id"]).first()

            if "contact_role" in params_dict:
                contact_to_modify.role = params_dict["contact_role"]

            if "contact_name" in params_dict:
                contact_to_modify.name = params_dict["contact_name"]

            if "contact_email" in params_dict:
                contact_to_modify.email = params_dict["contact_email"]

            if "contact_visible" in params_dict:
                contact_to_modify.visible = int(params_dict["contact_visible"])

            db.session.commit()

            return {"Status": "Ok"}, 200
        else:
            return {"Status": "Api key invalid"}, 200

    def delete(self):
        # Delete an existing contact
        params_dict = get_params_dict(request)

        if api_authentication.is_authenticated(params_dict["email"], params_dict["api_key"], new_api_key=False)["Status"] == "Ok":
            if "contact_id" not in params_dict:
                return {"Status": "Contact id missing"}, 200

            DBContact.query.filter(DBContact.id == params_dict["contact_id"]).delete()
            db.session.commit()

            return {"Status": "Ok"}, 200
        else:
            return {"Status": "Api key invalid"}, 200

