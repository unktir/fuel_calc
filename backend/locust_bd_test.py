from locust import HttpUser, task, between
import random

class FuelForecastUser(HttpUser):
    wait_time = between(1, 3)

    @task
    def create_car(self):
        payload = {
            "name": f"TestCar-{random.randint(1, 10000)}",
            "fuel_consumption": random.uniform(5, 20),
            "engine_type": "diesel",
            "tank_capacity": random.randint(40, 100),
            "manufacturer": "Test Manufacturer",
            "year": random.randint(1990, 2025)
        }
        headers = {"Content-Type": "application/json"}
        self.client.post("/api/cars/", json=payload, headers=headers)