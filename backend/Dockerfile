FROM python:3.10-slim as compiler

ENV PYTHONUNBUFFERED 1

WORKDIR /app/

RUN python -m venv /opt/venv

# Enable venv
ENV PATH="/opt/venv/bin:$PATH"

COPY ./requirements.txt /app/requirements.txt

RUN python -m pip install --upgrade pip &&\
    python -m pip install --upgrade setuptools &&\
    pip install -r requirements.txt

FROM python:3.10-slim as runner

WORKDIR /app/

COPY --from=compiler /opt/venv /opt/venv

# Enable venv

ENV PATH="/opt/venv/bin:$PATH"

COPY . /app/

# Экспонируем порт
EXPOSE 5000

# Запускаем сервер Django
CMD ["python3", "manage.py", "runserver", "0.0.0.0:5000"]
