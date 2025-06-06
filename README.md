# 🧠 AI Challenge Generator

A full-stack application that allows authenticated users to generate AI-powered coding challenges, track their history, and manage usage quotas. Built with **FastAPI**, **React**, **Clerk authentication**, and integrated with **OpenAI** for intelligent challenge generation.

---

## 🚀 Features

- 🔐 User Authentication via [Clerk.dev](https://clerk.dev)
- ⚙️ Backend API built with FastAPI & SQLAlchemy
- 🤖 AI-generated coding challenges using OpenAI's GPT
- 📈 User-specific challenge history and quota management
- 🌐 Seamless frontend in React + Vite
- 🔄 Webhooks support for event-driven behavior
- 🔒 Environment variable configuration using `python-dotenv`
- 🌍 Supports deployment tunneling via **Ngrok** for development

---

## 🧰 Tech Stack

### Frontend

- React (Vite)
- Clerk for Auth
- React Router DOM
- Axios (assumed for API calls)
- Tailwind CSS or custom CSS (assumed)

### Backend

- FastAPI
- SQLAlchemy
- Uvicorn (ASGI server)
- Clerk Backend API
- OpenAI SDK
- Svix (webhook support)
- python-dotenv

---

## 🗂 Project Structure

project-root/
├── backend/
│ ├── src/
│ │ ├── app.py # FastAPI entry point
│ │ ├── ai_generator.py # Challenge generation via OpenAI
│ │ ├── routes/
│ │ │ ├── challenge.py # Challenge-related endpoints
│ │ │ └── webhooks.py # Webhook handling
│ │ ├── database/
│ │ │ ├── db.py # DB logic (models, sessions)
│ │ │ └── models.py # ORM models
│ │ └── utils.py # Auth utility functions
│ └── pyproject.toml # Project dependencies
│
├── frontend/
│ ├── src/
│ │ ├── App.jsx # Main routing component
│ │ ├── auth/
│ │ │ ├── AuthenticationPage.jsx
│ │ │ └── ClerkProviderWithRoutes.jsx
│ │ ├── challenges/
│ │ │ ├── ChallengeGenerator.jsx
│ │ │ └── MCQChallenge.jsx
│ │ ├── history/HistoryPanel.jsx
│ │ └── layout/Layout.jsx
│ └── vite.config.js
└── README.md

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/Full-secureAI-Application-challenge.git
cd Full-secureAI-Application-challenge

OPENAI_API_KEY=your_openai_key
CLERK_API_KEY=your_clerk_backend_api_key

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_frontend_key
```

| Method | Endpoint                  | Description                       |
| ------ | ------------------------- | --------------------------------- |
| POST   | `/api/generate-challenge` | Generate a new AI-based challenge |
| GET    | `/api/my-history`         | Get user's challenge history      |
| GET    | `/api/quota`              | Get user's quota status           |
| POST   | `/webhooks`               | Receive events (e.g. from Clerk)  |
