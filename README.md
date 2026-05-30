# Ontario College IT Programs Pathway Finder

A full-stack web application that helps prospective and current students explore, compare, and plan their journey into Ontario College IT programs. Built with React + Vite on the frontend and Python FastAPI on the backend.

## Live Demo

> Deployed at: [Netlify link](https://your-app.netlify.app)

---

## Features

- **Program Finder** - Search and filter IT programs by college, location, tuition, and admission requirements
- **Eligibility Checker** - Check if you meet the academic and language requirements for your target programs
- **Cost Calculator** - Estimate total education costs including tuition, living expenses, and books
- **Scholarship Finder** - Discover available scholarships and bursaries with filtering by amount and deadline
- **Program Comparison** - Side-by-side comparison of up to two programs across key metrics
- **Career Pathway** - Visual timeline showing steps from application to employment
- **About & Contact** - Learn about the platform and get in touch

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18 + Vite + React Router DOM |
| Styling | CSS Variables + Flexbox + Grid |
| Backend | Python 3.11 + FastAPI |
| Database | SQLite / PostgreSQL |
| Deployment | Netlify (Frontend) + Render/Railway (Backend) |

---

## Project Structure

ontario-college-pathway/
├── frontend/                     # React + Vite frontend
│   ├── src/
│   │   ├── pages/                # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── ProgramFinder.jsx
│   │   │   ├── EligibilityChecker.jsx
│   │   │   ├── CostCalculator.jsx
│   │   │   ├── ScholarshipFinder.jsx
│   │   │   ├── ComparePrograms.jsx
│   │   │   ├── CareerPathway.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── NotFound.jsx
│   │   ├── components/           # Shared components (Layout)
│   │   ├── App.jsx               # Main app with routes
│   │   ├── main.jsx              # Entry point
│   │   ├── index.css             # Global styles
│   │   └── App.css               # Common styles
│   ├── package.json
│   └── vite.config.js
├── backend/                      # FastAPI backend
│   ├── app.py                    # Main API endpoints
│   └── ml_pipeline.py            # ML recommendation pipeline
├── data/                         # Datasets and sample data
├── notebooks/                    # Jupyter notebooks for EDA
├── index.html
└── README.md

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Python 3.11+

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will start at `http://localhost:3000`

### Backend Setup

```bash
cd ..
pip install fastapi uvicorn pandas scikit-learn
python app.py
```

The backend API will start at `http://localhost:8000`

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/programs` | Get all IT programs |
| GET | `/api/programs/:id` | Get a specific program |
| GET | `/api/programs/search` | Search programs by keyword |
| GET | `/api/colleges` | Get all colleges |
| GET | `/api/scholarships` | Get all scholarships |
| POST | `/api/eligibility/check` | Check eligibility for a program |
| POST | `/api/cost/calculate` | Calculate total education cost |
| GET | `/api/career-pathway` | Get career timeline steps |
| POST | `/api/contact` | Submit contact form |
| POST | `/api/recommend` | ML-based program recommendations |
| GET | `/api/compare` | Compare two programs |

---

## Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with hero and feature highlights |
| `/find-programs` | ProgramFinder | Search and filter IT programs |
| `/check-eligibility` | EligibilityChecker | Check admission requirements |
| `/calculate-cost` | CostCalculator | Estimate total education costs |
| `/find-scholarships` | ScholarshipFinder | Browse available scholarships |
| `/compare` | ComparePrograms | Side-by-side program comparison |
| `/career-pathway` | CareerPathway | Visual career timeline |
| `/about` | About | About the platform |
| `/contact` | Contact | Get in touch form |
| `*` | NotFound | 404 error page |

---

## Team

Built by the Ontario College IT Programs Pathway team.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments

- Ontario College application data sourced from publicly available college websites
- Built as a capstone project for the Post-Graduate Diploma in Data Analytics for Business
