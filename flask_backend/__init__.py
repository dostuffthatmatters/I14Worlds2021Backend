from flask import Flask

from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_restful import Api

import os

app = Flask(__name__)

# Cookies (e.g. admin login) are stored for 28 days
app.config['REMEMBER_COOKIE_DURATION'] = 86400 * 28

if os.getenv("SECRET_KEY") is not None:
    app.config['SECRET_KEY'] = os.getenv("SECRET_KEY")
else:
    app.config['SECRET_KEY'] = "ThisSecretKeyIsTheOneUsedWhenRunningTheServerLocally"

if os.getenv("BCRYPT_SALT") is not None:
    BCRYPT_SALT = os.getenv("BCRYPT_SALT")
else:
    BCRYPT_SALT = "!327sb??=sb271"

if os.getenv("DATABASE_URL") is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("DATABASE_URL")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db.sqlite3"

# ---------------------------------------------------------------------------------------------------------------------

print("GET THE CONTENT OF THE SERVICE ACCOUNT JSON STRING")
# Get the content of the service account JSON
if os.getenv("SERVICE_ACCOUNT_JSON_STRING") is not None:
    SERVICE_ACCOUNT_JSON_STRING = os.getenv("SERVICE_ACCOUNT_JSON_STRING")
else:
    from flask_backend.secrets import GOOGLE_APPLICATION_CREDENTIALS
    SERVICE_ACCOUNT_JSON_STRING = GOOGLE_APPLICATION_CREDENTIALS

print("SERVICE_ACCOUNT_JSON_STRING")
print(repr(SERVICE_ACCOUNT_JSON_STRING))

# Create the actual service account json
try:
    os.remove("service_account_keys.json")
    print("REMOVED OLD \"service_account_keys.json\"")
except:
    pass
with open("service_account_keys.json", "a") as file:
    file.write(SERVICE_ACCOUNT_JSON_STRING)
    print("CREATING NEW \"service_account_keys.json\"")
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = "service_account_keys.json"

print(f"DIRECTORY CONTENT: {os.listdir()}")

# I just wanted to pass this authentication json as a string to the google
# library but the documentation about this is so frkn bloated that I just
# created the json manually after passing an environment variable
# SERVICE_ACCOUNT_JSON that does contain the json as a string
# ---------------------------------------------------------------------------------------------------------------------

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

CORS(app)
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
api = Api(app)

from flask_backend.resources.rest_contact import RESTContact
from flask_backend.resources.rest_article import RESTArticle
from flask_backend.resources.rest_image import RESTImage
from flask_backend.resources.rest_album import RESTAlbum

api.add_resource(RESTContact, "/backend/database/contact")
api.add_resource(RESTArticle, "/backend/database/article")
api.add_resource(RESTImage, "/backend/database/image")
api.add_resource(RESTAlbum, "/backend/database/album")

from flask_backend import routes
