@echo off
setlocal

set APP_PATH=C:\0ALI\WebSites\Calldeals
set APP_NAME=Calldeals
set NEXT_TELEMETRY_DISABLED=1

call npm ci --include=dev
if errorlevel 1 (echo npm ci failed & exit /b 1)

call npm run build
if errorlevel 1 (echo npm build failed & exit /b 1)

robocopy "%CD%" "%APP_PATH%" /E /XF server.js web.config /XD .git /NFL /NDL /NJH /NJS
if errorlevel 8 (echo File copy failed & exit /b 1)

cd /d %APP_PATH%

for /f "tokens=*" %%i in ('npm config get prefix') do set NPM_PREFIX=%%i
set PATH=%NPM_PREFIX%;%PATH%

set NODE_ENV=production

pm2 describe %APP_NAME% >nul 2>&1
if %errorlevel% == 0 (
  pm2 restart %APP_NAME% --update-env
) else (
  pm2 start server.js --name %APP_NAME%
)
if errorlevel 1 (echo pm2 failed & exit /b 1)

pm2 save
echo Deployment completed for %APP_NAME%.
