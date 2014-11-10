call npm install
if errorlevel 1 (
	pause
	exit
)
call bower install
if errorlevel 1 (
	pause
	exit
)
