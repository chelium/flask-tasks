from flask import Flask, render_template

def create_app():
    app = Flask(__name__)

    return app


@app.route("/")
def index():
    return render_template("index.html")

app = create_app()

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000, debug=True)
