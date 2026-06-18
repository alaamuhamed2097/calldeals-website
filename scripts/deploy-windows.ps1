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
$env:NODE_ENV = "production"
$env:NEXT_TELEMETRY_DISABLED = "1"

if (!(Get-Command git -ErrorAction SilentlyContinue)) {
  throw "Git is not installed or is not available in PATH."
}

if (!(Get-Command npm -ErrorAction SilentlyContinue)) {
  throw "Node.js/npm is not installed or is not available in PATH."
}

if (!(Test-Path (Join-Path $AppPath ".git"))) {
  git clone $RepoUrl $AppPath
}

Set-Location $AppPath

git fetch origin $Branch
git reset --hard "origin/$Branch"

npm ci
npm run build

if (!(Get-Command pm2 -ErrorAction SilentlyContinue)) {
  throw "PM2 is not installed. Install it on the server with: npm install -g pm2"
}

$pm2Description = pm2 describe $AppName 2>$null
if ($LASTEXITCODE -eq 0) {
  pm2 restart $AppName --update-env
} else {
  pm2 start server.js --name $AppName --update-env
}

pm2 save

Write-Host "Deployment completed for $AppName."
