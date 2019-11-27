from flask_backend import app

@app.route("/", methods=["GET"])
def index():
    return "<h1>Hello World!</h1>"
