param(
  [string]$AppPath = "C:\sites\calldeals-website",
  [string]$RepoUrl = "https://github.com/alaamuhamed2097/calldeals-website.git",
  [string]$Branch = "main",
  [string]$AppName = "calldeals"
)

$ErrorActionPreference = "Stop"

if (!(Get-Command git -ErrorAction SilentlyContinue)) {
  throw "Git is not installed or is not available in PATH."
}

if (!(Get-Command npm -ErrorAction SilentlyContinue)) {
  throw "Node.js/npm is not installed or is not available in PATH."
}

if (!(Test-Path $AppPath)) {
  New-Item -ItemType Directory -Force $AppPath | Out-Null
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

pm2 startOrRestart ecosystem.config.cjs --only $AppName --update-env
pm2 save

Write-Host "Deployment completed for $AppName."
