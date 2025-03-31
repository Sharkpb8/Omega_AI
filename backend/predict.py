import pickle
import json
import pandas as pd
from sklearn.preprocessing import StandardScaler

def Predict(house):
    with open("./SavedModels/LinearRegression.dat","rb") as f:
        model = pickle.load(f)
    with open("./SavedModels/LinearRegression.json","r") as f:
        modelAttr = json.load(f)

    data = []
    for key,val in house.items():
        if key in modelAttr:
            data.append(val)
    pd_data = pd.DataFrame([data],columns=modelAttr)
    scaler = StandardScaler()
    # pd_data = scaler.fit_transform(pd_data)
    result = model.predict(pd_data)
    result = int(result)
    formatedResult = "{:,}".format(result).replace(",", " ")
    
    return formatedResult