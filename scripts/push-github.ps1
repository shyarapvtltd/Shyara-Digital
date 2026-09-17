#Requires -Version 5.1
<#
.SYNOPSIS
  Commit every real change in this repo and push to GitHub as shyarapvtltd.

.DESCRIPTION
  Your only input is the commit message. The script:
    - switches gh to shyarapvtltd if another account is active
    - stages tracked and untracked files, skipping local junk and secrets
    - commits on main
    - pushes to origin/main using the active gh account (no .git/config rewrite)

  Nothing to commit, already pushed: it says so and exits.
  Nothing to commit, commits waiting on origin: it pushes those and does not ask for a message.
#>
[CmdletBinding()]
param(
  [string]$Message
)

$ErrorActionPreference = "Stop"

$ExpectedUser = "shyarapvtltd"
$ExpectedRemote1 = "https://github.com/shyarapvtltd/Shyara-Digital"
$ExpectedRemote2 = "https://github.com/shyarapvtltd/Shyara-Digital.git"

$RepoRoot = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $RepoRoot

function Write-Step([string]$Text) {
  Write-Host $Text -ForegroundColor Cyan
}

function Write-Ok([string]$Text) {
  Write-Host $Text -ForegroundColor Green
}

function Fail([string]$Text) {
  Write-Host $Text -ForegroundColor Red
  exit 1
}

function Invoke-Git {
  param(
    [Parameter(ValueFromRemainingArguments = $true)]
    [string[]]$GitArgs
  )
  & git -C $RepoRoot @GitArgs
  if ($LASTEXITCODE -ne 0) {
    Fail ("git " + ($GitArgs -join " ") + " failed (exit $LASTEXITCODE).")
  }
}

function Invoke-GitQuiet {
  param(
    [Parameter(ValueFromRemainingArguments = $true)]
    [string[]]$GitArgs
  )
  & git -C $RepoRoot @GitArgs 2>$null | Out-Null
  return $LASTEXITCODE
}

function ShouldSkip([string]$Path) {
  $norm = $Path -replace "\\", "/"
  if ($norm -match '(^|/)\.env($|\.|/)') { return $true }
  if ($norm -match 'DEPLOYMENT_SECRETS') { return $true }
  if ($norm -match '\.local\.md$') { return $true }
  if ($norm -match '(^|/)\.git/COMMIT_MSG') { return $true }
  if ($norm -match '\.(pem|key|p12|pfx)$') { return $true }
  return $false
}

if (-not (Test-Path -LiteralPath (Join-Path $RepoRoot ".git"))) {
  Fail "Not a git repo: $RepoRoot"
}

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
  Fail "GitHub CLI (gh) is not on PATH. Install it, then run gh auth login as $ExpectedUser."
}
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  Fail "git is not on PATH."
}

# --- GitHub account -----------------------------------------------------------

Write-Step "Checking GitHub account..."
$active = (& gh api user --jq ".login" 2>$null)
if ($LASTEXITCODE -ne 0 -or [string]::IsNullOrWhiteSpace($active)) {
  Fail "gh is not logged in. Run: gh auth login   (account $ExpectedUser)"
}

if ($active -ne $ExpectedUser) {
  Write-Step "Active account is $active. Switching to $ExpectedUser..."
  & gh auth switch --hostname github.com --user $ExpectedUser
  if ($LASTEXITCODE -ne 0) {
    Fail "Could not switch to $ExpectedUser. Is that account logged in? Run: gh auth login"
  }
  $active = (& gh api user --jq ".login")
  if ($active -ne $ExpectedUser) {
    Fail "Still $active after switch. Expected $ExpectedUser."
  }
  Write-Ok "Now authenticated as $ExpectedUser."
} else {
  Write-Ok "Already $ExpectedUser."
}

Write-Step "Checking repo identity..."
$remote = (& git -C $RepoRoot remote get-url origin)
if ($remote -ne $ExpectedRemote1 -and $remote -ne $ExpectedRemote2) {
  Fail "origin is $remote, not $ExpectedRemote1. Refusing to push."
}

$branch = (& git -C $RepoRoot rev-parse --abbrev-ref HEAD).Trim()
if ($branch -ne "main") {
  Write-Step "On $branch. Checking out main..."
  Invoke-Git checkout main
}

# --- Stage -------------------------------------------------------------------

Write-Step "Staging changes..."
Invoke-Git add -A

$staged = @(& git -C $RepoRoot diff --cached --name-only)
foreach ($file in $staged) {
  if (ShouldSkip $file) {
    [void](Invoke-GitQuiet restore --staged -- $file)
    Write-Host "  skipped $file"
  }
}

$staged = @(& git -C $RepoRoot diff --cached --name-only)
$aheadRaw = & git -C $RepoRoot rev-list --count "origin/main..HEAD" 2>$null
$ahead = 0
if ($LASTEXITCODE -eq 0 -and $aheadRaw -match '^\d+$') {
  $ahead = [int]$aheadRaw
}

if ($staged.Count -eq 0 -and $ahead -eq 0) {
  Write-Ok "Nothing to commit or push."
  exit 0
}

if ($staged.Count -gt 0) {
  Write-Host ""
  Write-Host "Will commit $($staged.Count) file(s):" -ForegroundColor Yellow
  $staged | ForEach-Object { Write-Host "  $_" }
  Write-Host ""

  if ([string]::IsNullOrWhiteSpace($Message)) {
    Write-Host "Commit message (one line, then Enter):" -ForegroundColor Yellow
    $Message = Read-Host "Message"
  }
  $Message = if ($null -eq $Message) { "" } else { $Message.Trim() }
  if ([string]::IsNullOrWhiteSpace($Message)) {
    Invoke-Git restore --staged .
    Fail "Empty message. Nothing was committed."
  }

  $msgFile = Join-Path $RepoRoot ".git\COMMIT_MSG.tmp"
  [System.IO.File]::WriteAllText($msgFile, $Message + "`n")
  try {
    Invoke-Git commit -F $msgFile
  } finally {
    Remove-Item -LiteralPath $msgFile -ErrorAction SilentlyContinue
  }
  Write-Ok "Committed."
} else {
  Write-Host "No new files to commit. Pushing $ahead existing commit(s)..." -ForegroundColor Yellow
}

# --- Push --------------------------------------------------------------------

Write-Step "Pushing main as $ExpectedUser..."
$env:GIT_TERMINAL_PROMPT = "0"
& git -C $RepoRoot `
  -c "credential.helper=" `
  -c "credential.helper=!gh auth git-credential" `
  push origin main
if ($LASTEXITCODE -ne 0) {
  Fail "git push failed (exit $LASTEXITCODE)."
}
Write-Ok "Pushed to $ExpectedRemote1"
