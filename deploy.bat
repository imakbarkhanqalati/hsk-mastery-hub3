@echo off
echo Building HSK Mastery Hub for deployment...

:: Install dependencies
echo Installing dependencies...
call npm install
if %ERRORLEVEL% neq 0 (
    echo Error installing dependencies
    exit /b %ERRORLEVEL%
)

:: Build the application
echo Building application...
call npm run build
if %ERRORLEVEL% neq 0 (
    echo Error building application
    exit /b %ERRORLEVEL%
)

echo.
echo Build completed successfully!
echo The application is ready for deployment.
echo You can deploy the contents of the 'dist' directory to your hosting provider.
echo.

pause