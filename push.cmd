@echo off
REM Commit everything that belongs in the repo and push to GitHub as shyarapvtltd.
REM You will be asked for a commit message. That is the only question.
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\push-github.ps1"
exit /b %ERRORLEVEL%
