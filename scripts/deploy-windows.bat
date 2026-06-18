@echo off
setlocal

set APP_PATH=C:\0ALI\WebSites\Calldeals
set APP_NAME=Calldeals
set NEXT_TELEMETRY_DISABLED=1

echo [1/4] Installing dependencies...
call npm ci --include=dev
if errorlevel 1 (echo ERROR: npm ci failed & exit /b 1)

echo [2/4] Building...
call npm run build
if errorlevel 1 (echo ERROR: npm build failed & exit /b 1)

echo [3/4] Copying files to %APP_PATH%...
robocopy "%CD%" "%APP_PATH%" /E /XF server.js web.config pm2-restart.bat /XD .git /NFL /NDL /NJH /NJS
if errorlevel 8 (echo ERROR: File copy failed & exit /b 1)

echo [4/4] Restarting app via scheduled task...
schtasks /run /tn "PM2-Restart-Calldeals"
if errorlevel 1 (echo ERROR: Failed to trigger PM2-Restart-Calldeals task & exit /b 1)

echo Deployment completed for %APP_NAME%.
