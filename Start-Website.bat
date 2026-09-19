@echo off
title MILANWORLD - Calzaturificio d'Arte (milanworld.online)
echo ===================================================
echo   MILANWORLD - CALZATURIFICIO D'ARTE (MILANO)
echo   Handcrafted Luxury Italian Footwear
echo   Domain: milanworld.online
echo   Contact: 7895499065 | milansharma2610@gmail.com
echo ===================================================
echo.

set "NODE_BIN=C:\Users\DELL\AppData\Local\OpenAI\Codex\runtimes\cua_node\6f12e0ef1c6e5061\bin\node.exe"

if exist "%NODE_BIN%" (
  echo [OK] Found Node.js runtime.
  echo Starting MILANWORLD server on http://localhost:3000 ...
  start "" "http://localhost:3000"
  "%NODE_BIN%" server.cjs
  goto end
)

where node >nul 2>nul
if %ERRORLEVEL% equ 0 (
  echo [OK] Using system Node.js.
  echo Starting MILANWORLD server on http://localhost:3000 ...
  start "" "http://localhost:3000"
  node server.cjs
  goto end
)

echo [INFO] Node.js not detected. Opening standalone storefront directly in browser...
start "" "%~dp0milan-website-standalone.html"

:end
pause
