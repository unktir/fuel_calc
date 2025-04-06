cd fuel_calc

docker-compose up -d --build

docker-compose exec backend python manage.py import_cars

docker-compose exec backend python manage.py migrate

docker-compose exec backend python manage.py makemigrations

docker-compose exec backend python manage.py createsuperuser


backend admin:

http://localhost:8000/admin

swagger:

http://localhost:8000/swagger

frontend:

http://localhost:3001/