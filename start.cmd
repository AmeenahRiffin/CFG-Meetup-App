@echo off
start cmd /k "cd backend && npm run dev"
start cmd /k "cd frontend && npm run dev"
timeout /t 5 /nobreak >nul
start http://localhost:5173/