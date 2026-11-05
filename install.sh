#!/usr/bin/env bash
# =============================================================================
# install.sh — установка сайта «Мебельные истории» на Ubuntu VPS
#
# Что делает:
#   1. Ставит Docker и Docker Compose plugin (если их нет)
#   2. Спрашивает домен и записывает его в .env
#   3. Поднимает контейнер сайта и отдельный контейнер nginx (реверс-прокси)
#   4. Выпускает бесплатный SSL-сертификат Let's Encrypt (certbot)
#   5. Включает HTTPS и настраивает автопродление сертификата через cron
#
# Использование:
#   chmod +x install.sh
#   ./install.sh                          # спросит домен и email
#   ./install.sh example.ru               # домен аргументом
#   ./install.sh example.ru me@mail.ru    # домен и email аргументами
#
# Требование: A-запись домена (и www) уже указывает на IP этого сервера.
# =============================================================================
set -euo pipefail

cd "$(dirname "$0")"

DOMAIN="${1:-}"
if [ -z "$DOMAIN" ]; then
  read -rp "Введите домен (например, mebelnye-istorii.ru): " DOMAIN
fi
if [ -z "$DOMAIN" ]; then
  echo "Ошибка: домен не указан." >&2
  exit 1
fi

EMAIL="${2:-}"
if [ -z "$EMAIL" ]; then
  read -rp "Email для Let's Encrypt (уведомления о продлении, можно оставить пустым): " EMAIL || true
fi

echo "==> Домен: $DOMAIN"

# --- 1. Docker ---------------------------------------------------------------
if ! command -v docker >/dev/null 2>&1; then
  echo "==> Устанавливаю Docker..."
  apt-get update
  apt-get install -y ca-certificates curl
  curl -fsSL https://get.docker.com | sh
  systemctl enable --now docker
else
  echo "==> Docker уже установлен, пропускаю."
fi

# --- 2. Docker Compose plugin -------------------------------------------------
if ! docker compose version >/dev/null 2>&1; then
  echo "==> Устанавливаю Docker Compose plugin..."
  apt-get update
  apt-get install -y docker-compose-plugin
else
  echo "==> Docker Compose уже установлен, пропускаю."
fi

# --- 3. Firewall (если используется ufw) --------------------------------------
if command -v ufw >/dev/null 2>&1 && ufw status | grep -q "Status: active"; then
  echo "==> Открываю порты 80 и 443 в ufw..."
  ufw allow 80/tcp
  ufw allow 443/tcp
fi

# --- 4. Домен в .env -----------------------------------------------------------
echo "DOMAIN=$DOMAIN" > .env
echo "==> Записал DOMAIN=$DOMAIN в .env"

# --- 5. Запуск по HTTP (нужен для проверки домена Let's Encrypt) ---------------
CERT_DIR="$PWD/deploy/certbot"
mkdir -p "$CERT_DIR/www" "$CERT_DIR/conf"

cp deploy/nginx/proxy-http.conf.template deploy/nginx/proxy.conf.template

echo "==> Собираю и запускаю контейнеры (HTTP)..."
docker compose up -d --build

# --- 6. Выпуск SSL-сертификата --------------------------------------------------
if [ -f "$CERT_DIR/conf/live/$DOMAIN/fullchain.pem" ]; then
  echo "==> Сертификат для $DOMAIN уже выпущен, пропускаю выпуск."
  HAVE_CERT=1
else
  echo "==> Выпускаю сертификат Let's Encrypt..."
  EMAIL_ARGS=(--register-unsafely-without-email)
  if [ -n "$EMAIL" ]; then
    EMAIL_ARGS=(--email "$EMAIL")
  fi
  if docker run --rm \
      -v "$CERT_DIR/conf:/etc/letsencrypt" \
      -v "$CERT_DIR/www:/var/www/certbot" \
      certbot/certbot certonly --webroot \
      -w /var/www/certbot \
      -d "$DOMAIN" -d "www.$DOMAIN" \
      "${EMAIL_ARGS[@]}" --agree-tos --no-eff-email; then
    HAVE_CERT=1
  else
    HAVE_CERT=0
    echo ""
    echo "!! Не удалось выпустить сертификат."
    echo "!! Проверьте, что A-записи $DOMAIN и www.$DOMAIN указывают на этот сервер,"
    echo "!! и повторите: ./install.sh $DOMAIN"
    echo "!! Сайт пока работает по HTTP."
  fi
fi

# --- 7. Включение HTTPS и автопродление -----------------------------------------
if [ "$HAVE_CERT" = "1" ]; then
  echo "==> Включаю HTTPS..."
  cp deploy/nginx/proxy-ssl.conf.template deploy/nginx/proxy.conf.template
  docker compose up -d --force-recreate proxy

  # Ежедневная проверка продления через cron (Let's Encrypt: 90 дней,
  # certbot renew продлевает за 30 дней до истечения)
  CRON_FILE=/etc/cron.d/mebelnye-istorii-ssl
  cat > "$CRON_FILE" <<EOF
# Автопродление SSL для $DOMAIN (создано install.sh)
17 4 * * * root cd $PWD && docker run --rm -v $CERT_DIR/conf:/etc/letsencrypt -v $CERT_DIR/www:/var/www/certbot certbot/certbot renew --quiet && docker exec mebelnye-istorii-proxy nginx -s reload
EOF
  chmod 644 "$CRON_FILE"
  echo "==> Автопродление настроено: $CRON_FILE (ежедневно в 04:17)"
  SCHEME="https"
else
  SCHEME="http"
fi

echo ""
echo "==============================================================="
echo " Готово! Сайт доступен:  $SCHEME://$DOMAIN"
echo ""
echo " Проверка:    docker compose ps"
echo " Логи:        docker compose logs -f"
echo " Обновление:  git pull && docker compose up -d --build"
echo "==============================================================="
