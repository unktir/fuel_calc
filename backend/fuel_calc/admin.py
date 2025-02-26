from django.contrib import admin
from .models import User, Car

admin.site.register(User)
admin.site.register(Car)

@admin.register(Car)
class CarAdmin(admin.ModelAdmin):
    list_display = ('name', 'fuel_efficiency', 'fuel_tank_capacity', 'image')
    search_fields = ('name',)