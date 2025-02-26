# fuel_calc/views.py
from django.shortcuts import render, redirect
from django.contrib.auth import login
from django.contrib.auth.forms import UserCreationForm
from .forms import CustomUserCreationForm
from rest_framework import viewsets
from .models import Car
from .serializers import CarSerializer
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from rest_framework.response import Response
from rest_framework.decorators import api_view
from fuel_calc.services import calculate_fuel

def register(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)  # Автоматически логиним пользователя после регистрации
            return redirect('home')  # Можно заменить на нужную страницу
    else:
        form = CustomUserCreationForm()
    return render(request, 'registration/register.html', {'form': form})

class CarViewSet(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

@swagger_auto_schema(
    method='get',
    manual_parameters=[
        openapi.Parameter('car_id', openapi.IN_QUERY, description="ID машины", type=openapi.TYPE_INTEGER),
        openapi.Parameter('distance_km', openapi.IN_QUERY, description="Дальность поездки", type=openapi.TYPE_NUMBER),
        openapi.Parameter('fuel_price', openapi.IN_QUERY, description="Цена топлива за литр", type=openapi.TYPE_NUMBER),
    ],
    responses={200: openapi.Response("Расчет топлива")}
)
@api_view(['GET'])
def fuel_calculation(request):
    try:
        car_id = int(request.GET.get('car_id'))
        distance_km = float(request.GET.get('distance_km'))
        fuel_price = float(request.GET.get('fuel_price'))
    except (TypeError, ValueError):
        return Response({"error": "Некорректные входные данные"}, status=400)

    result = calculate_fuel(car_id, distance_km, fuel_price)
    return Response(result)