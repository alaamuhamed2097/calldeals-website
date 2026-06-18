@echo off
setlocal

set APP_PATH=C:\0ALI\WebSites\Calldeals
set REPO_URL=https://github.com/alaamuhamed2097/calldeals-website.git
set BRANCH=main
set APP_NAME=Calldeals
set NODE_ENV=production
set NEXT_TELEMETRY_DISABLED=1

cd /d %APP_PATH%
if errorlevel 1 (echo Failed to cd to %APP_PATH% & exit /b 1)

git config --global --add safe.directory %APP_PATH%

git fetch origin %BRANCH%
if errorlevel 1 (echo git fetch failed & exit /b 1)

git reset --hard origin/%BRANCH%
if errorlevel 1 (echo git reset failed & exit /b 1)

call npm ci --include=dev
if errorlevel 1 (echo npm ci failed & exit /b 1)

if exist ".next" rmdir /s /q ".next"

call npm run build
if errorlevel 1 (echo npm build failed & exit /b 1)

if not exist "%APP_PATH%\server.js" (
  echo ERROR: server.js not found at %APP_PATH%
  exit /b 1
)

pm2 describe %APP_NAME% >nul 2>&1
if %errorlevel% == 0 (
  pm2 restart %APP_NAME% --update-env
) else (
  pm2 start server.js --name %APP_NAME% --update-env
)
if errorlevel 1 (echo pm2 failed & exit /b 1)

pm2 save

echo Deployment completed for %APP_NAME%.
