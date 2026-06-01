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
echo Step 2: Uploading dist files to server...
echo (It might prompt you for your SSH password)
echo.

scp -r "C:\SandeepYadav\CMT PROJECT\3rd feb\cell24x7-launchpad-main\dist\*" adm.Cell24X7@154.210.160.223:/home/adm.Cell24X7/cmt-react/cmtmedia/dist/

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Upload failed! Please check if your SSH connection details are correct.
    pause
    exit /b %errorlevel%
)

echo.
echo ==========================================
echo Deployment Successful!
echo ==========================================
pause
