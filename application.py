import os
import json

from flask import Flask, jsonify, render_template, url_for
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
socketio = SocketIO(app)


@app.route("/", methods = ["POST", "GET"])
def index():
    return render_template("index.html")

@app.route("/json", methods = ["POST"])
def json():
    return jsonify({
    "title" : "Harry Potter",
    "author" : "J.K.Rowling",
    "year" : 1999
    })
