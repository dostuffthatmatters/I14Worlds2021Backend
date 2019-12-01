from flask_backend import db


class DBImage(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    album_id = db.Column(db.Integer)
    description = db.Column(db.String)

    filepath_small = db.Column(db.String)   #  450 x  300
    filepath_medium = db.Column(db.String)  #  900 x  600
    filepath_large = db.Column(db.String)   # 1500 x 1000
    filepath_full = db.Column(db.String)    # original size

    datetime = db.Column(db.DateTime)

    visible = db.Column(db.Integer)

    def __repr__(self):
        return f"Image(filepath_full: {self.filepath_full}, datetime: {self.datetime}, id: {self.id})"
