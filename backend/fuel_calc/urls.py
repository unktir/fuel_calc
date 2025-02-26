# urls.py
from django.urls import path, include, re_path
from rest_framework import permissions
from . import views
from rest_framework.routers import DefaultRouter
from .views import CarViewSet
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from .views import fuel_calculation, trip_history

router = DefaultRouter()
router.register(r'cars', CarViewSet)

urlpatterns = [
    path('register/', views.register, name='register'),
    path('api/', include(router.urls)),
    path('calculate_fuel/', fuel_calculation, name='calculate_fuel'),
    path('trip_history/<int:car_id>/', trip_history, name='trip_history'),
]
