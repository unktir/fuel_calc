import math
from django.shortcuts import get_object_or_404
from fuel_calc.models import Car

def calculate_fuel(car_id: int, distance_km: float, fuel_price: float) -> dict:
    """
    :param car_id: ID машины из БД
    :param distance_km: Длина маршрута в километрах
    :param fuel_price: Цена топлива за литр
    :return: Словарь с расчетами
    """
    car = get_object_or_404(Car, id=car_id)
    
    # Расчет общего расхода топлива
    fuel_needed = (distance_km / 100) * car.fuel_consumption
    
    # Расчет стоимости поездки
    total_cost = fuel_needed * fuel_price
    
    # Расчет количества заправок
    refuels = math.ceil(fuel_needed / car.tank_capacity)

    return {
        "car": car.name,
        "fuel_needed": round(fuel_needed, 2),  # литры
        "total_cost": round(total_cost, 2),  # рубли
        "refuels": refuels  # раз
    }
