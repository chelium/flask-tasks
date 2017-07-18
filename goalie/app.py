from flask import Flask

def create_app():
    app = Flask(__name__)
    register_blueprints(app)
    register_extensions()

def register_blueprints(app):
    pass

def register_extensions():
    pass
