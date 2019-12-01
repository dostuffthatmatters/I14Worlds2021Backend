from flask_backend import db


class DBAlbum(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True)

    title_image_id = db.Column(db.Integer)

