# PowerShell script to run Shyara Digital locally (monorepo root)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Shyara Digital - Local Development  " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$repoRoot = $PSScriptRoot
Set-Location $repoRoot

Write-Host "Checking for Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "Node.js is not installed. Install from https://nodejs.org/" -ForegroundColor Red
    exit 1
}

Write-Host "Checking for npm..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version
    Write-Host "npm found: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "npm is not installed." -ForegroundColor Red
    exit 1
}

Write-Host ""

if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies (workspaces)..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Failed to install dependencies." -ForegroundColor Red
        exit 1
    }
    Write-Host "Dependencies installed." -ForegroundColor Green
    Write-Host ""
}

Write-Host "Starting frontend dev server..." -ForegroundColor Yellow
Write-Host "Open http://localhost:8080" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop" -ForegroundColor Yellow
Write-Host ""

npm run dev
