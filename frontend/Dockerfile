# Этап сборки
FROM node:22.13.1-alpine AS build

WORKDIR /app

# Устанавливаем pnpm и зависимости
RUN npm install -g pnpm@latest-10
COPY pnpm*.yaml package*.json ./
COPY . .
RUN pnpm install

# Копируем исходный код и собираем проект
RUN pnpm run build

# Финальный образ с Nginx
FROM nginx:alpine

COPY --from=build /app/build /app/build
COPY --from=build /app/node_modules /app/node_modules

# Копируем Nginx конфиг
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80 

CMD ["nginx", "-g", "daemon off;"]
