from flask import Flask, jsonify, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
@app.route('/')
def home():
    return "Python backend is running"

@app.route("/api/data", methods=["POST"])
def signup():
    data = request.get_json()
    username = data.get("username")
    print(username)
    return jsonify({ "message": "Signup successful" })

if __name__ == "__main__":
    app.run(debug=True)