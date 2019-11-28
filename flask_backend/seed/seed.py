from flask_backend import db, bcrypt
from flask_backend.models.db_authentication import Admin

from flask_backend import BCRYPT_SALT


# noinspection PyArgumentList
def db_reset():
    db.drop_all()
    db.create_all()
    db.session.commit()


def create_admin(first_name=None,
                 last_name=None,
                 email=None,
                 password=None):
    if first_name is not None and \
            last_name is not None and \
            email is not None and \
            password is not None:
        admin = Admin()

        admin.first_name = first_name
        admin.last_name = last_name
        admin.email = email
        admin.password = bcrypt.generate_password_hash(password + BCRYPT_SALT).decode('UTF-8')

        db.session.add(admin)
        db.session.commit()
