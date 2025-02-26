from django.core.management.base import BaseCommand
import json
from fuel_calc.models import Car  # Заменить на правильную модель, если она отличается

class Command(BaseCommand):
    help = 'Import cars from JSON file'

    def handle(self, *args, **kwargs):
        with open('cars.json', 'r', encoding='utf-8') as file:
            cars_data = json.load(file)
            for car in cars_data:
                # Извлекаем необходимые данные из каждого объекта
                name = car.get('name')
                fuel_consumption = car.get('fuel_consumption')
                engine_type = car.get('engine_type')
                tank_capacity = car.get('tank_capacity')
                manufacturer = car.get('manufacturer')
                year = car.get('year')

                # Проверяем, что все необходимые данные присутствуют
                if not name or not fuel_consumption or not engine_type or not tank_capacity or not manufacturer or not year:
                    self.stdout.write(self.style.ERROR(f'Missing required fields for car: {car}'))
                    continue  # Пропускаем этот автомобиль, если данные неполные

                # Создаем объект Car в базе данных
                Car.objects.create(
                    name=name,
                    fuel_consumption=fuel_consumption,
                    engine_type=engine_type,
                    tank_capacity=tank_capacity,
                    manufacturer=manufacturer,
                    year=year
                )

        self.stdout.write(self.style.SUCCESS('Successfully imported cars'))
