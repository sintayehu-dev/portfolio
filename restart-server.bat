@echo off
echo Stopping all Node processes...
taskkill /F /IM node.exe /T 2>nul
timeout /t 2 /nobreak >nul
echo.
echo Starting development server...
npm start
