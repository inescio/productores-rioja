@echo off
title Productores La Rioja - Servidor de Desarrollo
echo.
echo 🚀 Iniciando servidor de desarrollo...
echo =============================================
echo.
echo 🌐 La aplicacion se abrira en: http://localhost:3000
echo.
echo ⏹️  Para detener el servidor presiona Ctrl+C
echo.
timeout /t 3 >nul
start http://localhost:3000
npm run dev
pause
