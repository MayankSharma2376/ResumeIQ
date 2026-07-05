# 🚀 ResumeIQ – AI-Powered Resume Analyzer & Job Matcher

ResumeIQ is a Full Stack MERN application that helps users analyze their resumes using AI, calculate an ATS (Applicant Tracking System) score, identify missing skills, and compare resumes against job descriptions to improve job readiness.

---

## 🌐 Live Demo

🔗 **Frontend:** https://resume-iq-vwg3.vercel.app

🔗 **Backend API:** https://resumeiq-gezj.onrender.com

---

## 📂 GitHub Repository

https://github.com/MayankSharma2376/ResumeIQ

---

# ✨ Features

### 🔐 Authentication

* User Registration
* User Login
* Secure JWT Authentication
* HTTP-Only Cookie Authentication
* Logout

### 📄 Resume Management

* Upload Resume (PDF)
* Resume History
* View Resume Analysis
* Delete Resume

### 🤖 AI Resume Analysis

* ATS Score
* Resume Summary
* Strengths
* Weaknesses
* Skills Extraction
* Missing Skills Detection
* AI Suggestions

### 💼 Job Match

* Paste Job Description
* Resume vs Job Match Score
* Matching Skills
* Missing Skills
* AI Recommendations

### 📊 Dashboard

* Resume Statistics
* Latest Resume Overview
* Quick Insights

---

# 🛠 Tech Stack

## Frontend

* React 19
* TypeScript
* Vite
* Tailwind CSS
* Axios
* React Router
* React Hook Form
* React Hot Toast
* Lucide React

## Backend

* Node.js
* Express.js
* TypeScript
* MongoDB Atlas
* Mongoose
* JWT Authentication
* Multer
* PDF Parser
* Google Gemini AI

## Deployment

* Frontend → Vercel
* Backend → Render
* Database → MongoDB Atlas

---

# 📁 Project Structure

```
ResumeIQ
│
├── client
│   ├── src
│   ├── components
│   ├── pages
│   ├── services
│   └── api
│
├── server
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── services
│   ├── validators
│   └── config
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/MayankSharma2376/ResumeIQ.git

cd ResumeIQ
```

---

## Backend Setup

```bash
cd server

npm install

npm run dev
```

---

## Frontend Setup

```bash
cd client

npm install

npm run dev
```

---

# 🔑 Environment Variables

## Backend (.env)

```env
PORT=5000

MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY

JWT_EXPIRES_IN=7d

CLIENT_URL=http://localhost:5173

GOOGLE_API_KEY=YOUR_GEMINI_API_KEY
```

---

## Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api/v1
```

---

# 📸 Screenshots

> Add screenshots here after uploading them.

### Login

<img width="100%" src="./screenshots/login.png">

### Dashboard

<img width="100%" src="./screenshots/dashboard.png">

### Resume Analysis

<img width="100%" src="./screenshots/analysis.png">

### Job Match

<img width="100%" src="./screenshots/job-match.png">

---

# 🚀 Future Enhancements

* Resume Builder
* AI Cover Letter Generator
* Interview Preparation
* Resume Templates
* Dark Mode
* Profile Management
* Email Verification
* Forgot Password
* Google Authentication
* Resume Download
* Premium Features

---

# 📚 What I Learned

While building ResumeIQ, I gained practical experience in:

* Full Stack MERN Development
* REST API Design
* Authentication using JWT & HTTP-Only Cookies
* AI Integration
* PDF Processing
* MongoDB Atlas
* Deployment with Render & Vercel
* CORS Configuration
* Environment Variable Management
* TypeScript Debugging
* Production Deployment

---

# 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit a pull request.

---

# 📬 Contact

**Mayank Sharma**

GitHub:
https://github.com/MayankSharma2376

LinkedIn:
(Add your LinkedIn Profile URL)

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!

It motivates me to continue building and improving open-source projects.
