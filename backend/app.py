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
        return jsonify({"message": "User data inserted successfully"}), 200

if __name__ == "__main__":
    app.run(debug=True)