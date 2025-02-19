from . import app, db
from flask import jsonify, request
from .services import load_cars, calculate_fuel_consumption

@app.route('/api/cars', methods=['GET'])
def get_cars():
    cars = load_cars()
    return jsonify(cars)

@app.route('/api/trips', methods=['POST'])
def create_trip():
    data = request.json
    cars = load_cars()
    selected_car = next((car for car in cars if car['id'] == data['car_id']), None)
    
    if not selected_car:
        return jsonify({"error": "Машина не найдена"}), 404
    
    result = calculate_fuel_consumption(selected_car, data)
    return jsonify(result)