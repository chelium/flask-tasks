from flask import Blueprint, render_template

main_pages = Blueprint('main', __name__,
                       template_folder='templates')

@main_pages.route('/')
def index():
    return render_template('index.html')

