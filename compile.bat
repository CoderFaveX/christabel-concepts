@echo off
echo Building started.....
:: Run the build commands one after the other, ensuring each completes before moving on
call npm run build
call npm run build:dev

echo Building finished.....Commiting
:: Prompt the user for a commit message
echo Please enter commit message:
set /p msg=Enter commit message: 

:: Add all changes and commit with the provided message
git add .
git commit -m "%msg%"
git push -u origin main

echo Commiting finished
pause
