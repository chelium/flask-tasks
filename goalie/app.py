from flask import Flask

from goalie.main import main_pages

def create_app():
    app = Flask(__name__)
    register_blueprints(app)
    register_extensions()
    return app

def register_blueprints(app):
    app.register_blueprint(main_pages)

def register_extensions():
    pass
