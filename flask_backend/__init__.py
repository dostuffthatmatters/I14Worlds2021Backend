from flask import Flask

from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_cors import CORS

import os

app = Flask(__name__)

# Cookies (e.g. admin login) are stored for 28 days
app.config['REMEMBER_COOKIE_DURATION'] = 86400 * 28

if os.getenv("SECRET_KEY") is not None:
    app.config['SECRET_KEY'] = os.getenv("SECRET_KEY")
else:
    app.config['SECRET_KEY'] = "ThisSecretKeyIsTheOneUsedWhenRunningTheServerLocally"

if os.getenv("DATABASE_URL") is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("DATABASE_URL")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db.sqlite3"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

CORS(app)

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)

from flask_backend import routes
