# WiseMindOS

<div align="center">

[![MERN Stack](https://img.shields.io/badge/Stack-MERN-green?style=for-the-badge)]()
[![React](https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=black)]()
[![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white)]()
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)]()
[![JWT](https://img.shields.io/badge/Auth-JWT-black?style=for-the-badge)]()
[![Open Source](https://img.shields.io/badge/Open%20Source-GSSoC-orange?style=for-the-badge)]()
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)]()

### Full-Stack Productivity & Life Management Platform

Transform long-term goals into structured daily execution through interconnected planning systems, habit tracking, productivity analytics, and focused workflow management.

</div>

---

## Live Demo

| Platform | Link |
|---|---|
| Live Application | https://wise-mind-os.vercel.app |
| GitHub Repository | https://github.com/aaryan498/WiseMindOS.git |

---

# Overview

WiseMindOS is a modular full-stack productivity and life-management platform designed to help users stay aligned with their long-term ambitions.

Unlike traditional productivity applications that focus only on isolated task management, WiseMindOS connects goals, projects, tasks, habits, planning, focus systems, and analytics into a unified productivity ecosystem.

The long-term vision of the project is to evolve into a scalable “Life Operating System” with AI-powered personalized productivity assistance through FutureTwin.

---

# Core Features

| Module | Description |
|---|---|
| Goal Management | Create and manage long-term goals with progress tracking |
| Project System | Break goals into actionable projects |
| Task Management | Manage solo tasks and productivity workflows |
| Daily Planner | Structured daily execution planning |
| Habit Tracking | Track habits and maintain productivity streaks |
| Productivity Dashboard | Visual analytics and productivity insights |
| Focus Room | Dedicated distraction-free focus workspace |
| Library & Notes | Notebook and page-based knowledge management |
| Authentication System | Secure JWT-based authentication and protected routes |
| Progress Analytics | Weekly productivity statistics and tracking systems |

---

# Future Roadmap

The following systems are planned for future releases:

- AI-powered FutureTwin productivity assistant
- Smart productivity recommendations
- Behavioral analytics system
- Burnout prediction system
- Finance tracking module
- Diet and wellness tracking
- Gamification and reward systems
- Productivity rankings and leaderboards
- Google authentication
- Mobile application
- Desktop application
- Cross-platform synchronization

---

# Tech Stack

## Frontend

- React.js
- Tailwind CSS
- React Router
- Axios
- Context API

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

## Deployment

- Vercel

---

# Project Architecture

# Project Architecture

```text
WiseMindOS/
│
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   ├── documentation.md
│   │   └── feature_request.md
│   │
│   └── PULL_REQUEST_TEMPLATE.md
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── utils/
│   │
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
│
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── LICENSE
├── README.md
└── .gitignore
```

---

# Productivity Workflow Structure

```text
Goals
   ↓
Projects
   ↓
Tasks
   ↓
Daily Planning
   ↓
Habit Consistency
   ↓
Analytics & Productivity Tracking
```

---

# Current Implemented Modules

| Status | Module |
|---|---|
| Completed | Authentication System |
| Completed | Goals Management |
| Completed | Projects Management |
| Completed | Solo Tasks |
| Completed | Daily Planner |
| Completed | Habit Tracker |
| Completed | Dashboard Analytics |
| Completed | Focus Room |
| Completed | Library & Notebook System |
| Completed | Productivity Streak System |
| Planned | FutureTwin AI Assistant |
| Planned | Reward & Ranking System |
| Planned | Finance Tracker |
| Planned | Diet Tracker |

---

# Frontend Setup

## Prerequisites

- Node.js 18+
- npm

## Installation

```bash
cd frontend
npm install
```

## Environment Variables

Create a `.env` file inside the frontend directory:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

## Run Frontend

```bash
npm run dev
```

---

# Backend Setup

## Prerequisites

- Node.js 18+
- MongoDB

## Installation

```bash
cd backend
npm install
```

## Environment Variables

Create a `.env` file inside the backend directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

## Run Backend

```bash
npm run dev
```

---

# API Structure

| Endpoint Category | Description |
|---|---|
| `/auth` | Authentication APIs |
| `/goals` | Goal management APIs |
| `/projects` | Project management APIs |
| `/tasks` | Task management APIs |
| `/planner` | Daily planner APIs |
| `/habits` | Habit tracking APIs |
| `/library` | Notebook and notes APIs |
| `/dashboard` | Productivity analytics APIs |

---

# Contribution Areas

WiseMindOS is designed as a modular open-source project where contributors can independently work on different systems.

## Available Contribution Areas

- Frontend UI/UX
- Backend APIs
- Authentication Systems
- Productivity Analytics
- AI Integrations
- Gamification Systems
- Documentation
- Testing
- Accessibility Improvements
- Performance Optimization
- DevOps & Deployment

---

# Why WiseMindOS?

Most productivity applications focus primarily on isolated task management.

WiseMindOS focuses on long-term goal alignment and structured execution by connecting:

- Goals
- Projects
- Tasks
- Habits
- Planning
- Focus Systems
- Productivity Analytics

into a unified productivity ecosystem.

The project aims to help users stay consistent, focused, and aligned with their ambitions through scalable productivity workflows.

---

# Open Source Contribution

We welcome contributors of all experience levels.

Please read:

- `CONTRIBUTING.md`
- `CODE_OF_CONDUCT.md`

before contributing.

Beginner-friendly issues and contribution guidelines will be maintained for new contributors.

---

# Planned Enhancements

- Google OAuth Authentication
- Real-time notifications
- AI-driven productivity recommendations
- Calendar integrations
- Advanced analytics dashboards
- Smart scheduling assistant
- Cross-platform synchronization
- FutureTwin AI assistant

---

# Repository Structure

```text
.github/        GitHub issue templates and pull request templates
backend/        Express backend APIs, middleware, models, and server logic
frontend/       React frontend application and UI components
```

---

# License

This project is licensed under the MIT License.

See the `LICENSE` file for more information.

---

# Maintainer

Aaryan Kumar

Building WiseMindOS with the vision of creating a scalable productivity and life-management ecosystem.

---

# Support the Project

If you find this project useful:

- Star the repository
- Fork the project
- Contribute to the project
- Share feedback and suggestions