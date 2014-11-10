@echo off
set NODE_PATH=%~dp0../../:%NODE_PATH%
call node "%~dp0buildCpuCore.js" %*
if errorlevel 1 (
	pause
)


