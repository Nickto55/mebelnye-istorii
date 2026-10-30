@echo off
chcp 65001 >nul
setlocal

REM ============================================================
REM  restart.bat — быстрая пересборка и перезапуск сайта KORPUS MEBEL
REM
REM  Использование:
REM    restart.bat          пересобрать и запустить production-preview на :7100
REM    restart.bat dev      просто перезапустить dev-сервер (без сборки)
REM    restart.bat stop     остановить сервер на :7100
REM ============================================================

cd /d "%~dp0"
set PORT=7100

echo [1/3] Останавливаю сервер на порту %PORT%...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":%PORT%" ^| findstr LISTENING') do (
    taskkill /F /PID %%a >nul 2>&1
)

if /i "%~1"=="stop" (
    echo Готово: сервер остановлен.
    exit /b 0
)

if /i "%~1"=="dev" (
    echo [2/3] Сборка пропущена ^(режим dev^).
    echo [3/3] Запускаю dev-сервер на http://localhost:%PORT%/ ...
    start "mebel-dev" cmd /c "npm run dev -- --port %PORT% --host 127.0.0.1"
) else (
    echo [2/3] Собираю проект ^(tsc + vite build^)...
    call npm run build
    if errorlevel 1 (
        echo.
        echo ОШИБКА: сборка не удалась. Сервер не запущен.
        exit /b 1
    )
    echo [3/3] Запускаю preview на http://localhost:%PORT%/ ...
    start "mebel-preview" cmd /c "npm run preview -- --port %PORT% --host 127.0.0.1"
)

REM ждём, пока сервер поднимется, и открываем браузер
set /a TRIES=0
:wait_loop
set /a TRIES+=1
timeout /t 1 /nobreak >nul
netstat -ano | findstr ":%PORT%" | findstr LISTENING >nul
if errorlevel 1 (
    if %TRIES% lss 20 goto wait_loop
    echo Сервер не отвечает — смотрите лог в окне mebel-dev / mebel-preview.
    exit /b 1
)

start "" "http://localhost:%PORT%/"
echo Готово: http://localhost:%PORT%/
endlocal
