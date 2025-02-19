# Этап сборки
FROM node:22.13.1-alpine AS build

# Установка pnpm
RUN npm install -g pnpm@latest-10

# Устанавливаем рабочую директорию 
WORKDIR /app

# Копируем package.json и package-lock.json
COPY pnpm*.yaml /app
COPY package*.json /app

# Устанавливаем зависимости
RUN pnpm install

# Копируем исходный код
COPY . .

# Собираем приложение
RUN pnpm run build

# Этап финального образа
FROM nginx:alpine

# Копируем собранные файлы из этапа сборки
COPY --from=build /app/build /usr/share/nginx/html

# Копируем конфигурацию Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]