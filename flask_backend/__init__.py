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

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

CORS(app)
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
api = Api(app)

from flask_backend.resources.contact import Contact
from flask_backend.resources.article import Article

api.add_resource(Contact, "/backend/database/contact")
api.add_resource(Article, "/backend/database/article")

from flask_backend import routes
