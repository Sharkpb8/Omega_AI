import requests
import csv
import json
import re

houses = []
total_pages = 454

for page in range(1, total_pages + 1):
    url = f"https://www.sreality.cz/api/cs/v2/estates?category_main_cb=2&category_type_cb=1&per_page=40&page={page}"
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        houses_page = data.get('_embedded', {}).get('estates', [])
        houses.append(houses_page)
        print(f"Načtena stránka {page}")
    else:
        print(f"Chyba při načítání stránky {page} (status code: {response.status_code})")

print(f"Celkem načteno {len(houses)} domů.")

with open('houses.json', 'w') as f:
    json.dump(houses, f, indent=4)

cleaned_houses = []

for i in houses:
    for house in i:
        price = house["price"]
        lat = house["gps"]["lat"]
        lon = house["gps"]["lon"]
        name = house["name"].replace("\u00a0", " ")
        numbers = re.findall(r'\d+(?:\s\d+)*', name)
        garage = 1 if "garage" in house["labelsAll"][0] else 0
        new = 1 if "new_building" in house["labelsAll"][0] else 0
        furnished = 1 if "furnished" in house["labelsAll"][0] else 0
        cellar = 1 if "cellar" in house["labelsAll"][0] else 0
        parkingLots = 1 if "parking_lots" in house["labelsAll"][0] else 0
        reconstructed = 1 if "after_reconstruction" in house["labelsAll"][0] else 0
        balcon = 1 if "balcony" in house["labelsAll"][0] else 0
        terrace = 1 if "terrace" in house["labelsAll"][0] else 0


        cleaned_houses.append([price,lat,lon,numbers[0],numbers[1],garage, new, furnished, cellar, parkingLots, reconstructed, balcon, terrace])
        print(len(cleaned_houses))

print("Domy jsou vyčištěny")

with open("houses.csv","w",newline='') as f:
        csvwriter = csv.writer(f)
        rows = ["price", "lat", "lon", "land_area","usable_area", "garage", "new", "furnished", "cellar", "parkingLots", "reconstructed", "balcon", "terrace"]
        csvwriter.writerow(rows)

for i in cleaned_houses:
     with open("houses.csv","a",newline='') as f:
        csvwriter = csv.writer(f)
        csvwriter.writerow(i)