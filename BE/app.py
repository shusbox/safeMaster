from flask import Flask, request, jsonify, redirect, render_template
from db import get_db
app = Flask(__name__)

@app.route("/")
def home():
    return redirect("http://127.0.0.1:5173")

if __name__ == "__main__":
    app.run(port=5000, debug=True)

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
        return redirect("/main")
    else:
        return "로그인 실패: 아이디 또는 비밀번호 틀림", 401
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
