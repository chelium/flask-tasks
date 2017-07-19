from flask import Blueprint, render_template

task_pages = Blueprint('task', __name__, url_prefix='/tasks',
                       template_folder='templates')

@task_pages.route('/')
def tasks():
    return render_template('task/index.html')
