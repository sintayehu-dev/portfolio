# Set environment variables
$env:REACT_APP_CONTENTFUL_SPACE_ID = "ljv58ycon8ns"
$env:REACT_APP_CONTENTFUL_ACCESS_TOKEN = "NOL_cKEn9psxI0Njm0kFaRYZLJIqJZnFUnHJ-vidDXc"
$env:REACT_APP_CONTENTFUL_ENVIRONMENT = "master"

Write-Host "Environment variables set:" -ForegroundColor Green
Write-Host "SPACE_ID: $env:REACT_APP_CONTENTFUL_SPACE_ID" -ForegroundColor Cyan
Write-Host "ACCESS_TOKEN: Set" -ForegroundColor Cyan
Write-Host "ENVIRONMENT: $env:REACT_APP_CONTENTFUL_ENVIRONMENT" -ForegroundColor Cyan
Write-Host ""
Write-Host "Starting development server..." -ForegroundColor Yellow

# Start the development server
npm start
