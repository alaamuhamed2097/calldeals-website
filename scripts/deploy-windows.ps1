param(
  [string]$AppPath = "C:\0ALI\WebSites\Calldeals",
  [string]$RepoUrl = "https://github.com/alaamuhamed2097/calldeals-website.git",
  [string]$Branch = "main",
  [string]$AppName = "Calldeals"
)

$ErrorActionPreference = "Stop"

if (!(Test-Path $AppPath)) {
  New-Item -ItemType Directory -Force $AppPath | Out-Null
}

$DeployTemp = Join-Path $AppPath ".deploy-temp"
$NpmCache = Join-Path $DeployTemp "npm-cache"
New-Item -ItemType Directory -Force $DeployTemp, $NpmCache | Out-Null

$env:TEMP = $DeployTemp
$env:TMP = $DeployTemp
$env:npm_config_cache = $NpmCache
$env:NEXT_TELEMETRY_DISABLED = "1"

if (!(Get-Command git -ErrorAction SilentlyContinue)) {
  throw "Git is not installed or is not available in PATH."
}

if (!(Get-Command npm -ErrorAction SilentlyContinue)) {
  throw "Node.js/npm is not installed or is not available in PATH."
}

Set-Location $AppPath

git config --global --add safe.directory $AppPath

if (!(Test-Path (Join-Path $AppPath ".git"))) {
  git init
}

$remotes = git remote
if ($remotes -contains "origin") {
  git remote set-url origin $RepoUrl
} else {
  git remote add origin $RepoUrl
}

git fetch origin $Branch
if ($LASTEXITCODE -ne 0) {
  throw "git fetch failed."
}

git reset --hard "origin/$Branch"
if ($LASTEXITCODE -ne 0) {
  throw "git reset failed."
}

npm ci --include=dev
if ($LASTEXITCODE -ne 0) {
  throw "npm ci failed."
}

npm run build
if ($LASTEXITCODE -ne 0) {
  throw "npm run build failed."
}

if (!(Test-Path (Join-Path $AppPath "server.js"))) {
  throw "server.js was not found in $AppPath. This file is intentionally excluded from Git and must exist on the server."
}

if (!(Get-Command pm2 -ErrorAction SilentlyContinue)) {
  Write-Host "PM2 not found. Installing globally..."
  npm install -g pm2
  if ($LASTEXITCODE -ne 0) {
    throw "Failed to install PM2 globally."
  }
}

$env:NODE_ENV = "production"

$pm2Description = pm2 describe $AppName 2>$null
if ($LASTEXITCODE -eq 0) {
  pm2 restart $AppName --update-env
} else {
  pm2 start server.js --name $AppName --update-env
}

pm2 save

Write-Host "Deployment completed for $AppName."
