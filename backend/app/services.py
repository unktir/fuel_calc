import json

def load_cars():
    with open('cars.json', 'r', encoding='utf-8') as file:
        cars = json.load(file)
    return cars

def calculate_fuel_consumption(car, trip_data):
    distance = float(trip_data['distance'])
    fuel_price = float(trip_data['fuel_cost'])
    fuel_consumption = car['fuel_consumption']
    
    total_fuel = (fuel_consumption * distance) / 100
    total_cost = total_fuel * fuel_price

    # Рекомендации
    recommendations = []
    if fuel_consumption > 10:
        recommendations.append("Снизьте скорость для экономии топлива.")
    if distance > 100:
        recommendations.append("Проверьте давление в шинах перед длительной поездкой.")

    return {
        'car': car['name'],
        'distance': distance,
        'total_fuel': total_fuel,
        'total_cost': total_cost,
        'recommendations': recommendations,
    }