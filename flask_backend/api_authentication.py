from flask_backend import db, bcrypt
from flask_backend.models import Admin, AdminAPIKey

from flask_backend import BCRYPT_SALT

import random


# ---------------------------------------------------------------------------------------------------------------------
# Helper Functions

def validate_email_format(email):
    l1 = email.split("@")
    if len(l1) == 2:
        l2 = l1[1].split(".")
        if len(l2) == 2:
            return True
    return False


def generate_random_key(length=32):
    possible_characters = []

    # Characters '0' through '9'
    possible_characters += [chr(x) for x in range(48, 58)]

    # Characters 'A' through 'Z'
    possible_characters += [chr(x) for x in range(65, 91)]

    # Characters 'a' through 'z'
    possible_characters += [chr(x) for x in range(97, 123)]

    random_key = ""

    for i in range(length):
        random_key += random.choice(possible_characters)

    return random_key



# ---------------------------------------------------------------------------------------------------------------------
# Functions to be accessed from 'routes' directly

def login_user(email, password):
    if validate_email_format(email) and len(password) >= 8:
        user = Admin.query.filter(Admin.email == email).first()
        if user is not None:
            if bcrypt.check_password_hash(user.password, password + BCRYPT_SALT):
                api_key = register_client(user)
                return api_key, True
    return "Invalid Email/Password", False


# When a client that has not force-reloads the page
# the frontend will automatically try to validate that
# the user is logged in therefore the email and api_key
# will be stored in a cookie
def is_authenticated(email, api_key):
    admin = Admin.query.filter(Admin.email == email).first()

    if admin is None:
        return "Invalid", False

    api_key_object = AdminAPIKey.query\
        .filter(AdminAPIKey.admin_id == admin.id)\
        .filter(AdminAPIKey.key == api_key).first()

    if api_key_object is None:
        return "Invalid", False

    # A new api_key is generated every time the user does this
    unregister_client(admin)
    new_api_key = register_client(admin)

    return new_api_key, True


def logout_user(email, api_key):
    # Why do you need both email and api_key?
    # So that someone cannot just logout random
    # emails/api_keys to randomly hit something
    # You only know both if you hav regularly
    # logged in
    admin = Admin.query.filter(Admin.email == email).first()

    if admin is None:
        return False

    unregister_client(admin)

    return True



# ---------------------------------------------------------------------------------------------------------------------
# Direct database manipulation

def register_client(user):
    # Kick out all old key where the user did not log himself out
    AdminAPIKey.query.filter(AdminAPIKey.admin_id == user.id).delete()

    api_key = AdminAPIKey()
    api_key.admin_id = user.id

    # Generating a new random API key
    api_key.key = generate_random_key()

    db.session.add(api_key)
    db.session.commit()
    return api_key.key


def unregister_client(user):
    # Kick out all old key where the user did not log himself out
    AdminAPIKey.query.filter(AdminAPIKey.admin_id == user.id).delete()
    db.session.commit()
    return True


# ---------------------------------------------------------------------------------------------------------------------
# Just small tests

if __name__ == "__main__":
    print(generate_random_key(length=16))
    print(generate_random_key())
    print(generate_random_key(length=48))
    print(generate_random_key(length=64))
