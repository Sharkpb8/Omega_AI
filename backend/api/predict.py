import pickle
import json
import pandas as pd
from Errors import *
from config import Config

def Predict(house):
    conf = Config("./backend/api/config.json")
    modelType = ip = conf.read("model/type",str)
    try:
        with open(f"./backend/training/SavedModels/{modelType}.dat","rb") as f:
            model = pickle.load(f)
        with open(f"./backend/training/SavedModels/{modelType}.json","r") as f:
            modelAttr = json.load(f)
    except Exception:
        raise ModelNotFoundError

    data = []
    for key,val in house.items():
        if key in modelAttr:
            data.append(val)
    if(len(data) != len(modelAttr)):
        raise AttrAmmountError
    pd_data = pd.DataFrame([data],columns=modelAttr)
    result = model.predict(pd_data)
    result = int(result)
    formatedResult = "{:,}".format(result).replace(",", " ")
    
    return f"{formatedResult} KČ"