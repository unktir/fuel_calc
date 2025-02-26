from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.EmailField(unique=True)

    # Указываем уникальные related_name
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='fuel_calc_user_set',  # уникальное имя для этой связи
        blank=True
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='fuel_calc_user_permissions_set',  # уникальное имя для этой связи
        blank=True
    )


class Car(models.Model):
    name = models.CharField(max_length=200, default='Неизвестно')
    fuel_consumption = models.FloatField()
    engine_type = models.CharField(max_length=100, default='Неизвестно')
    tank_capacity = models.FloatField(default=0.0)
    manufacturer = models.CharField(max_length=100, default='Неизвестно')
    year = models.IntegerField()

    def __str__(self):
        return self.name

class Trip(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    distance = models.FloatField()  # расстояние в км
    fuel_price = models.FloatField()  # цена за литр
    date = models.DateTimeField(auto_now_add=True)

class FuelType(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name