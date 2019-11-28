from flask_backend import db


class Admin(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    first_name = db.Column(db.String)
    last_name = db.Column(db.String)

    password = db.Column(db.String)

    email = db.Column(db.String, unique=True)

    def __repr__(self):
        return f"Admin(id: {self.id}, Email: {self.email})"


class AdminAPIKey(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    key = db.Column(db.String)

    # Foreign Key to admin table
    admin_id = db.Column(db.Integer)

    def __repr__(self):
        return f"APIKey(admin_id: {self.admin_id}, key: {self.key})"


class DBContact(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    role = db.Column(db.String)
    name = db.Column(db.String)
    email = db.Column(db.String)

    visible = db.Column(db.Integer)

    def __repr__(self):
        return f"Contact(role: {self.role}, name: {self.name}, email: {self.email}, visible: {self.visible})"





