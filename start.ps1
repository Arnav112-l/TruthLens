# TruthLens Dashboard - Windows Quick Start Script
# Run this in PowerShell to set up and start the application

Write-Host "🔍 TruthLens Dashboard Setup" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
$nodeVersion = node --version 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Node.js is not installed!" -ForegroundColor Red
    Write-Host "Please download and install Node.js from https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}
Write-Host "✅ Node.js $nodeVersion found" -ForegroundColor Green
Write-Host ""

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Yellow
Write-Host "This may take a few minutes..." -ForegroundColor Gray
npm run install-all
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Installation failed!" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Dependencies installed" -ForegroundColor Green
Write-Host ""

# Setup environment file
Write-Host "Setting up environment..." -ForegroundColor Yellow
if (-not (Test-Path "server\.env")) {
    Copy-Item "server\.env.example" "server\.env"
    Write-Host "✅ Created server/.env file" -ForegroundColor Green
    Write-Host "⚠️  Please edit server/.env and add your MongoDB URI" -ForegroundColor Yellow
} else {
    Write-Host "✅ Environment file already exists" -ForegroundColor Green
}
Write-Host ""

# Check MongoDB
Write-Host "Checking MongoDB..." -ForegroundColor Yellow
Write-Host "Make sure MongoDB is running or use MongoDB Atlas" -ForegroundColor Gray
Write-Host ""

# Ask user if ready to start
Write-Host "Ready to start the application?" -ForegroundColor Cyan
Write-Host "This will open:" -ForegroundColor Gray
Write-Host "  - Frontend: http://localhost:3000" -ForegroundColor Gray
Write-Host "  - Backend:  http://localhost:5000" -ForegroundColor Gray
Write-Host ""
$response = Read-Host "Start now? (Y/N)"

if ($response -eq "Y" -or $response -eq "y") {
    Write-Host ""
    Write-Host "🚀 Starting TruthLens Dashboard..." -ForegroundColor Green
    Write-Host "Press Ctrl+C to stop" -ForegroundColor Yellow
    Write-Host ""
    npm run dev
} else {
    Write-Host ""
    Write-Host "To start later, run:" -ForegroundColor Cyan
    Write-Host "  npm run dev" -ForegroundColor White
    Write-Host ""
    Write-Host "For help, see:" -ForegroundColor Cyan
    Write-Host "  README.md" -ForegroundColor White
    Write-Host "  QUICKSTART.md" -ForegroundColor White
    Write-Host ""
}
