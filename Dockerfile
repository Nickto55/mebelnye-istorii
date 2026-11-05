# ---------- Стадия сборки ----------
FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---------- Стадия запуска ----------
# Лёгкий nginx раздаёт собранную статику внутри docker-сети.
# Внешний nginx (контейнер proxy) проксирует на него домен.
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY deploy/nginx/site.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
