@echo off
title Push Milan Footwear to GitHub
echo ===================================================
echo   PUSHING ALL UPDATES TO GITHUB
echo   Repo: https://github.com/milansharma2610-ctrl/milan-mens-fashion
echo ===================================================
echo.
echo Connecting to GitHub...
"C:\Program Files\Git\cmd\git.exe" push origin main
echo.
if %ERRORLEVEL% equ 0 (
  echo ===================================================
  echo   [SUCCESS] Pushed all changes successfully to GitHub!
  echo ===================================================
) else (
  echo ===================================================
  echo   [NOTICE] If GitHub opened a browser window, please
  echo   click "Sign in with your browser" to authorize.
  echo ===================================================
)
echo.
pause
