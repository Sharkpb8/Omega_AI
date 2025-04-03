import pickle
import json
import pandas as pd
from Errors import *

def Predict(house):
    with open("./backend/training/SavedModels/GradientBoostingRegressor.dat","rb") as f:
        model = pickle.load(f)
    with open("./backend/training/SavedModels/GradientBoostingRegressor.json","r") as f:
        modelAttr = json.load(f)

    data = []
    for key,val in house.items():
        if key in modelAttr:
            data.append(val)
    if(len(data) != len(modelAttr)):
        raise KeyError
    pd_data = pd.DataFrame([data],columns=modelAttr)
    result = model.predict(pd_data)
    result = int(result)
    formatedResult = "{:,}".format(result).replace(",", " ")
    
    return f"{formatedResult} KČ"