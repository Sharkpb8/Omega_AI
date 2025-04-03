from flask import Flask, request, make_response
from flask_cors import CORS
from predict import Predict
from config import Config
from Errors import *
import logging

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])

logging.basicConfig(
    level=logging.DEBUG,
    format="%(asctime)s - %(levelname)s - %(message)s",
    filename="./backend/application.log",
    filemode="a",
    encoding="utf-8"
)


@app.route('/api/predict', methods=['POST'])
def predictPrice():
    house = request.get_json()
    logging.info(f"API call received with parameters: {house}")
    try:
        result = Predict(house)
    except AttrAmmountError:
        logging.error(f"[400] Incorrect amount of correct attributes in the request ")
        return make_response("Incorect ammount of correct attributes",400)
    except ModelNotFoundError:
        logging.error(f"[500] Configured model wasn't found")
        return make_response("Configured model wasnt found",500)
    except ValueError:
        logging.error(f"[400] All values have to be whole positive numbers")
        return make_response("All values have to be whole positive numbers",400)
    else:
        response = {"value":result}
        logging.info(f"[200] Response: {response}")
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