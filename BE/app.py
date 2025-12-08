from flask import Flask, request, jsonify, redirect, render_template
from db import get_db
from flask_cors import CORS

app = Flask(__name__)


CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

@app.route("/")
def home():
    return redirect("http://127.0.0.1:5173")


@app.route("/signin", methods=["POST"])
def signin():
    username = request.form.get("username")
    password = request.form.get("password")

    db = get_db()
    with db.cursor() as c:
        c.execute(
            "SELECT * FROM users WHERE username=%s AND password=%s",
            (username, password)
        )
        user = c.fetchone()

    if user:
        return jsonify({"success": True, "route": "/signin"})
    else:
        return jsonify({"success": False}), 401

@app.route("/signup", methods=["POST"])
def signup():
    username = request.form.get("username")
    password = request.form.get("password")

    db = get_db()
    with db.cursor() as c:
        c.execute(
            "INSERT INTO users (username, password) VALUES (%s, %s)",
            (username, password)
        )
        db.commit()

    return redirect("/")

@app.route("/result", methods=["POST"])
def result():

    username = request.form.get("usernamestore")
    allresult = request.form.get("finalscore")

    db = get_db()
    with db.cursor() as c:
        c.execute(
            "UPDATE users SET correct_count=%s WHERE username=%s",
            (allresult, username)
        )
        db.commit()

    return jsonify({"success": True})

   
@app.route("/main")
def main():
    return jsonify({"route": "/quiz"})


if __name__ == "__main__":
    app.run(port=5000, debug=True)