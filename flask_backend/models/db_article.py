from flask_backend import db


class DBArticle(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    headline = db.Column(db.String)

    content_markdown = db.Column(db.String)  # What an admin is able to edit
    content_plain = db.Column(db.String)  # What is visible on article-preview
    content_html = db.Column(db.String)  # What is visible when reading an article

    author = db.Column(db.String)
    datetime = db.Column(db.DateTime)

    visible = db.Column(db.Integer)

    def __repr__(self):
        return f"Article(author: {self.author}, timestamp: {self.timestamp}, visible: {self.visible})"





