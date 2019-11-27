from flask_backend import app
from flask import render_template


@app.route("/backend", methods=["GET"])
def index():
    return "<h1>Welcome to Flask!</h1>"


@app.errorhandler(404)
def page_not_found(e):
    # your processing here
    return render_template("index.html")
