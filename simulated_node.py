# Description: Simulated node for testing purposes
import time 
import random
import requests

UBIDOTS_HOST = "https://industrial.api.ubidots.com"
UBIDOTS_PATH = "/api/v1.6/devices/"
LAT = 20.6
LNG = -103.41
STEP = 0.0001

def main():
    lat = LAT
    lng = LNG

    while True:        
        response = requests.post(
            url=f"{UBIDOTS_HOST}{UBIDOTS_PATH}simulated_node",
            json={
                "position": {
                    "value": 1234567890,
                    "context": {
                        "lat": lat,
                        "lng": lng,
                    },
                },
            },
            headers={
                "X-Auth-Token": "BBFF-zwHvvVlFld8k9Sd9eBGyM5LdpU6eyX",
                "Content-Type": "application/json",
            }
        )

        print(response.status_code)
        print(response.text)

        if lat > 20.61:
            lat -= STEP
        
        if lng < -103.42:
            lng += STEP

        if lat < 20.6:
            lat += STEP

        if lng > -103.41:
            lng -= STEP

        # generate random movement
        
        lat += STEP * (-1 if bool(random.getrandbits(1)) else 1)
        lng += STEP * (-1 if bool(random.getrandbits(1)) else 1)      
        
        print(lat, lng)
        time.sleep(15)

main()