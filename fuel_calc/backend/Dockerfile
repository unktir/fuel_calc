# Этап сборки
FROM python:3.10-alpine as builder

WORKDIR /app
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

COPY requirements.txt .
RUN pip install --user -r requirements.txt

# Финальный этап
FROM python:3.10-alpine

WORKDIR /app
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PATH="/root/.local/bin:${PATH}"

RUN apk add --no-cache bash

# Копируем зависимости из builder
COPY --from=builder /root/.local /root/.local
COPY . .

EXPOSE 8000
CMD ["/bin/bash", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
