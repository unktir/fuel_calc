from . import db

class Trip(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    car_name = db.Column(db.String(100), nullable=False)
    distance = db.Column(db.Float, nullable=False)
    fuel_consumption = db.Column(db.Float, nullable=False)
    fuel_price = db.Column(db.Float, nullable=False)
    total_fuel = db.Column(db.Float, nullable=False)
    total_cost = db.Column(db.Float, nullable=False)