from flask import Flask, request
from flask_cors import CORS
from predict import Predict

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])


@app.route('/api/predict', methods=['POST'])
def predictPrice():
    house = request.get_json()
    result = Predict(house)
    return {"value":result}

if __name__ == "__main__":
    app.run("127.0.0.1",8080,True)