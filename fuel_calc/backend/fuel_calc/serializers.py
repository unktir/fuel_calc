from rest_framework import serializers
from .models import Car, Trip, Developer

class CarSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Car
        fields = '__all__'
    
    def get_image_url(self, obj):
        if obj.image:
            return obj.image.url  # Вернет путь к файлу изображения
        return None

class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = '__all__'

class DeveloperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Developer
        fields = '__all__'