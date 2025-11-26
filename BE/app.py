from flask import Flask, redirect

app = Flask(__name__)
@app.route("/")
def home():
    return redirect("http://localhost:5174/")


if __name__ == "__main__":
    app.run(port=5000, debug=True)