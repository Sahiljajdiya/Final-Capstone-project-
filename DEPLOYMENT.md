# Deployment Guide

This guide covers deploying the Smart College IT Finder to production.

## Overview
*   **Backend**: FastAPI application (Python)
*   **Frontend**: React application (Vite)
*   **Database**: Optional (for future scaling)
*   **CI/CD**: GitHub Actions automation

## Frontend Deployment
*   **Option 1: GitHub Pages**: Auto-deploys from `main` to `frontend/dist`.
*   **Option 2: Netlify**: Connect repo; uses `netlify.toml`. Set `VITE_API_URL` environment variable.
*   **Option 3: Vercel**: Root `frontend`, Build: `npm run build`, Output: `dist`.

## Backend Deployment
*   **Option 1: Render.com**: Detects `render.yaml`. 
    *   *Manual:* Root `./`, Build `pip install -r requirements.txt`, Start `uvicorn app:app --host 0.0.0.0 --port 8000`.
*   **Option 2: Railway.app**: Deploy via GitHub.
*   **Option 3: Heroku**: Use legacy CLI: `heroku login`, `heroku create smart-college-it-finder`, `git push heroku main`.

## Environment Variables
*   **Backend**: `DATABASE_URL`, `ENVIRONMENT=production`, `API_KEY`.
*   **Frontend**: `VITE_API_URL`.

## GitHub Actions CI/CD
Automated pipeline runs:
1. Backend Tests (pytest)
2. Frontend Build (Vite)
3. Code Quality (linting)
4. Deploy Backend
5. Deploy Frontend

*Enable by adding Secrets:* `RENDER_API_KEY` and `RENDER_SERVICE_ID` in GitHub Settings.

## Local Testing
*   **Backend**: `pip install -r requirements.txt`, `uvicorn app:app --reload --port 8000` (from repo root).
*   **Frontend**: `cd frontend`, `npm install`, `npm run dev`.

## Post-Deployment Checklist
*   Verify frontend access and `/health` backend endpoint.
*   Ensure environment variables, CORS settings, database migrations, and SSL/TLS are configured.
*   Set up monitoring and logging.

## Custom Domain Setup
*   **Frontend**: Point CNAME to GitHub Pages/Netlify and update `cname` field in `.github/workflows/ci-cd.yml`.
*   **API**: Point CNAME to Render/Railway and update frontend `VITE_API_URL`.

## Troubleshooting
*   **Frontend**: Clear GitHub Pages cache or rebuild manually.
*   **Backend**: Verify CORS, API_URL matching, and environment variables.
*   **Builds**: Check versions, dependencies (`requirements.txt`/`package.json`), and logs.
