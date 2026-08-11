@echo off
echo ==========================================
echo Starting Build and Deploy to cPanel...
echo ==========================================

:: 1. Build the project locally
echo Step 1: Running npm run build...
call npm run build
if %errorlevel% neq 0 (
    echo [ERROR] Build failed! Exiting.
    pause
    exit /b %errorlevel%
)

:: 2. Upload to server
echo.
echo Step 2: Uploading dist files to server via SFTP...
echo.

node deploy_sftp.js

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] SFTP Upload failed! Please check the logs.
    pause
    exit /b %errorlevel%
)

echo.
echo ==========================================
echo Deployment Successful!
echo ==========================================
pause
