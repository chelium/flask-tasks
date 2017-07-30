from flask import Flask

from goalie.extensions import db

from goalie.main import main_pages
from goalie.task import task_pages

def create_app():
    app = Flask(__name__)
    app.config.from_object('goalie.settings')
    register_blueprints(app)
    register_extensions(app)
    return app

def register_blueprints(app):
    app.register_blueprint(main_pages)
    app.register_blueprint(task_pages)

def register_extensions(app):
    db.init_app(app)
