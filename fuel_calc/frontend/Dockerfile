# Этап установки зависимостей
FROM node:22.13.1-alpine as deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm@latest && \
    pnpm install --frozen-lockfile

# Этап сборки (для production)
FROM deps as builder
COPY . .
RUN pnpm run build

# Финальный этап для разработки
FROM node:22.13.1-alpine as dev
WORKDIR /app
RUN npm install -g pnpm@latest
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json /app/pnpm-lock.yaml ./
COPY . .
EXPOSE 3001
CMD ["/usr/local/bin/pnpm", "dev", "--port", "3001"]

# Финальный этап для production
FROM nginx:alpine as prod
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
