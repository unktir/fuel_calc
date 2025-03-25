Запуск frontend-а:
```
cd ./frontend/
pnpm install
pnpm dev
```

Запуск backend-а:
```
cd ./backend/
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python manage.py runserver "0.0.0.0:5000"
```
