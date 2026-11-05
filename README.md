# Мебельные истории

Сайт мастерской корпусной мебели из Санкт-Петербурга: каталог, портфолио,
калькулятор стоимости, отзывы и контакты.

**Стек:** React 19 · TypeScript · Vite 7 · Tailwind CSS 3 · lucide-react

## Локальная разработка

```bash
npm install
npm run dev        # dev-сервер
npm run build      # production-сборка в dist/
npm run preview    # локальный предпросмотр сборки
```

## Деплой на Ubuntu VPS (Docker)

Всё настраивается одним скриптом — он ставит Docker, поднимает контейнер
сайта и отдельный контейнер nginx как реверс-прокси для домена:

```bash
git clone <repo> && cd mebelnye-istorii
chmod +x install.sh
./install.sh mebelnye-istorii.ru   # или без аргумента — спросит домен
```

Требование: A-запись домена (и `www`) указывает на IP сервера.

Структура деплоя:

| Файл | Назначение |
|---|---|
| `Dockerfile` | Многостадийная сборка: Vite build → nginx со статикой |
| `docker-compose.yml` | Два сервиса: `site` (статика) и `proxy` (реверс-прокси) |
| `deploy/nginx/site.conf` | Nginx внутри контейнера сайта (SPA, кэширование) |
| `deploy/nginx/proxy-http.conf.template` | Реверс-прокси, вариант HTTP (с точкой для ACME-проверки) |
| `deploy/nginx/proxy-ssl.conf.template` | Реверс-прокси, вариант HTTPS |
| `deploy/certbot/` | Сертификаты Let's Encrypt (создаётся при установке) |
| `install.sh` | Установка Docker, запуск, выпуск SSL и автопродление |

### HTTPS (Let's Encrypt, бесплатно)

`install.sh` сам выпускает сертификат через certbot (webroot), переключает
прокси на HTTPS (редирект 80 → 443) и добавляет задание в cron
(`/etc/cron.d/mebelnye-istorii-ssl`) — продление проверяется ежедневно,
сертификат обновляется автоматически за 30 дней до истечения.

### Обновление сайта на сервере

```bash
git pull && docker compose up -d --build
```
