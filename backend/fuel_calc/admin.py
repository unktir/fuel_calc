from django.contrib import admin
from .models import User, Car

admin.site.register(User)

@admin.register(Car)
class CarAdmin(admin.ModelAdmin):
    list_display = ('name', 'fuel_efficiency', 'tank_capacity', 'image')
    search_fields = ('name',)