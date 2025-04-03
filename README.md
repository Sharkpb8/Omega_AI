# House price prediction

## Author
**Name:** Adam Hlaváčik  
**Contact:** hlavacik@spsejecna.cz

**Date of Completion:** 3.4.2025  
**Institution:** Střední průmyslová škola elektrotechnická, Praha 2, Ječná 30  
**Type of project:** School project



## Project Overview
This project is a application writen in Python and is used to predict a price of house based on given attributes.


## Application Architecture
The application uses a modular structure:
- **Main Program (`main.py`)**: Manages user interactions and calls simulation functions.
- **Simulation Module (`simulation.py`)**: Handles train simulations, including delays, passenger management, and fuel refills.
- **Doubly Linked List (`DoublyLinkedList.py`)**: Implements linked list functionality for station management.


## Configuration Options
Configurations are set in `config.json`:
- `allowedtypes`: List of allowed types of trains.
- simulation
  - `mimimum-delay` and `maximum-delay`: Minimum and maximum delay of train. (Cant use decimal numbers)
  - `delay-chance`: Probability of a delay of train. (Cant use decimal numbers)
  - `min-fill` and `max-fill`: Minimum and maximum passangers that can be loaded. (Cant use decimal numbers)
  - `geton-time`: Time in S to load on passangers.
  - `getoff-time`: Time in S to load off passangers.
  - `fuel-time`: Time taken for refueling. (Cant use decimal numbers)
  - `max-refuel`: Maximum addicional ammount of fuel in % to be added to train when refueling (Cant use decimal numbers)

Refer to `config.json` for valid configurations.

---
## Documentation and Reporting
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
1. Clone the project from `https://github.com/Sharkpb8/Alfa_1_Parallel_programming`.
2. Execute these comands:
   - python3 -m venv venv
   - cd ./venv/Scripts
   - ./pip.exe install asyncio
3. Start `Main.py`


### Execution
1. Download the project release from `https://github.com/Sharkpb8/Alfa_1_Parallel_programming`.
2. Start `Main.exe`.
3. Add trains manualy or from file
4. start simulation
5. in logs there will be log for each train about its informations