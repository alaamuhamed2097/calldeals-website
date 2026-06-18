@echo off
setlocal

set APP_PATH=C:\0ALI\WebSites\Calldeals
set APP_NAME=Calldeals
set NEXT_TELEMETRY_DISABLED=1

echo [1/5] Installing dependencies...
call npm ci --include=dev
if errorlevel 1 (echo ERROR: npm ci failed & exit /b 1)

echo [2/5] Building...
call npm run build
if errorlevel 1 (echo ERROR: npm build failed & exit /b 1)

echo [3/5] Copying files to %APP_PATH%...
robocopy "%CD%" "%APP_PATH%" /E /XF server.js web.config /XD .git /NFL /NDL /NJH /NJS
echo robocopy exit code: %errorlevel%
if errorlevel 8 (echo ERROR: File copy failed & exit /b 1)

cd /d %APP_PATH%
echo [4/5] Working directory: %CD%

echo Getting npm global prefix...
for /f "tokens=*" %%i in ('npm config get prefix') do set NPM_PREFIX=%%i
echo npm prefix: %NPM_PREFIX%
set PATH=%NPM_PREFIX%;%PATH%

echo Checking pm2...
where pm2
if errorlevel 1 (echo ERROR: pm2 not found in PATH & exit /b 1)

set NODE_ENV=production

echo [5/5] Restarting app with pm2...
pm2 describe %APP_NAME%
if %errorlevel% == 0 (
  echo Restarting existing process...
  pm2 restart %APP_NAME% --update-env
) else (
  echo Starting new process...
  pm2 start server.js --name %APP_NAME%
)
if errorlevel 1 (echo ERROR: pm2 failed & exit /b 1)

pm2 save
echo Deployment completed for %APP_NAME%.
