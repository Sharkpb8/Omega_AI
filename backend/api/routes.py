from flask import Flask, request, make_response
from flask_cors import CORS
from predict import Predict
from config import Config

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])


@app.route('/api/predict', methods=['POST'])
def predictPrice():
    house = request.get_json()
    result = Predict(house)
    response = {"value":result}
    return make_response(response,200)

if __name__ == "__main__":
    conf = Config("./backend/api/config.json")
    ip = conf.read("api/ip",str)
    port = conf.read("api/port",int)
    debug = conf.read("api/debug",bool)
    if(not None in [ip,port,debug]):
        app.run(ip,port,debug)
    else:
        print("Selhalo nastartování api")