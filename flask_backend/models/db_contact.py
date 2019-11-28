from flask_backend import db


class DBContact(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    role = db.Column(db.String)
    name = db.Column(db.String)
    email = db.Column(db.String)

    visible = db.Column(db.Integer)

    def __repr__(self):
        return f"Contact(role: {self.role}, name: {self.name}, email: {self.email}, visible: {self.visible})"





