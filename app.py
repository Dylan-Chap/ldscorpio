from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/ck3_tutorial")
def ck3_tutorial():
    return render_template("ck3_tutorial.html")


@app.route("/legal_notice")
def legal_notice():
    return render_template("legal_notice.html")


@app.route("/privacy")
def privacy():
    return render_template("privacy.html")


if __name__ == "__main__":
    app.run(debug=True)
