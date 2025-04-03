# House price prediction

## Author
**Name:** Adam Hlaváčik  
**Contact:** hlavacik@spsejecna.cz

**Date of Completion:** 3.4.2025  
**Institution:** Střední průmyslová škola elektrotechnická, Praha 2, Ječná 30  
**Type of project:** School project



## Project Overview
This project is a application writen in Python and is used to predict a price of house based on given attributes in a web UI.


## Application Architecture
<!-- TODO  -->


## Configuration Options
Configurations are set in `/backend/api/config.json`:
- `api`: Dictionary containing api configuration.
- simulation
  - `ip`: Ip to use for the api
  - `port`: Port used in api
  - `debug` : Wheater to use debug or not

Refer to `/backend/api/config.json` for valid configuration.

---
# Documentation and Reporting
## Description
### Overview
The Train Simulation Program allows users to:
- Add and remove trains.
- Add and remove stations for each train.
- Simulate train journeys with logs, delays, and fuel management.

### How It Works
1. **Menu**:
   - The user selects actions like adding trains, managing stations, or starting a simulation.
2. **Train Management**:
   - Add trains with attributes like speed, capacity, and fuel.
   - Delete trains when they’re no longer needed.
3. **Station Management**:
   - Add stations to a train’s route with distances.
   - Remove stations if needed.
4. **Simulation**:
   - Runs a journey for the trains, logging actions like movement, delays, and refueling.

Logs are saved in the `/logs/` folder, and train configurations can be loaded from `trains.json`.

## Testing
Unit testing results shows 97% coverage

## Sources and consulted
- ChatGPT
- Wikipedia
- W3Schools
- GeeksforGeeks
- Python Docs
- Martin Hornych
- Tomáš Križko
- Ondra Kábrt
---
## Installation and Execution
### Requirements
- Python 3.x installed.

### Code Build
1. Clone the project from `https://github.com/Sharkpb8/Omega_AI`.
2. Execute these comands:
   - python3 -m venv venv
   - cd ./venv/Scripts
   - ./pip.exe install asyncio
3. Start `Main.py`


### Execution
1. Download the project release from `https://github.com/Sharkpb8/Omega_AI`.
2. Start `Main.exe`.
3. Add trains manualy or from file
4. start simulation
5. in logs there will be log for each train about its informations