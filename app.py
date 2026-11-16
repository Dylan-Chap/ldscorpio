from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/tuto-ck3")
def tuto_ck3():
    return render_template("tuto_ck3.html")


@app.route("/mentions-legales")
def mentions_legales():
    return render_template("mentions_legales.html")


@app.route("/confidentialite")
def confidentialite():
    return render_template("confidentialite.html")


if __name__ == "__main__":
    app.run(debug=True)
