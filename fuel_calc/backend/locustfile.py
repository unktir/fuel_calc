from locust import HttpUser, task, between

class ApiTestUser(HttpUser):
    wait_time = between(1, 5)

    @task
    def get_hello(self):
        self.client.get("/api/cars/")  # тестируем маршрут /api/cars

    @task
    def calculate_fuel(self):
        self.client.get(
            "/api/calculate_fuel/?car_id=4&distance_km=100&fuel_price=50"
        )
