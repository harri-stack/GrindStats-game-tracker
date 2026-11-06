from flask import Flask, jsonify, request
from flask_cors import CORS
from database import insert_user_data
from database import user_exists_check
app = Flask(__name__)
CORS(app)
@app.route('/')
def home():
    return "Python backend is running"

@app.route("/api/data", methods=["POST"])
def signup():
    data = request.get_json()
    username = data.get("username")
    user_exists = user_exists_check(username)
    if user_exists:
        print("User already exists")
        return jsonify({"message": "User already exists"}), 400
    else:
        insert_user_data(username)
        print("User created successfully")
        return jsonify({"message": " "}), 200

@app.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    user_exists = user_exists_check(username)
    if user_exists:
        print("User exists, login successful")
        return jsonify({"message": " "}), 200
    else:
        print("User does not exist, login failed")
        return jsonify({"message": "Please enter an existing username"}), 400

if __name__ == "__main__":
    app.run(debug=True)