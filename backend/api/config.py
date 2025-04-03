import json

class Config():
    def __init__(self,path):
        self.path = path

    def read(self,key = None,datatype = None):
        try:
            with open(self.path,"r") as f:
                config = json.load(f)
            value = config
            if(key):
                split_key = key.split("/")
                for key_value in split_key:
                    value = value.get(key_value)
            if(datatype):
                if isinstance(datatype, type):
                    if not isinstance(value, datatype):
                        raise ValueError
                else:
                    raise ValueError
            return value
        except FileNotFoundError:
            print("Error: Config nebyl nalezen.")
            return None
        except KeyError:
            print(f"Error: Klíč: {key} nebyl v configu nalezen.")
            return None
        except ValueError:
            print("Špatná datový typ")
            return None
        except Exception as e:
            print(e)
            return None