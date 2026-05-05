# 🎯 Practice Interview Platform

A full-stack web application that connects interviewers and interviewees for mock interview practice. The platform allows users to schedule sessions, conduct interviews, and provide structured feedback.

---

## 🚀 Features

### 🔐 Authentication & Security

* User Registration & Login
* JWT-based Authentication
* Password Encryption (BCrypt)
* Protected Routes (Dashboard, Sessions)
* Role-based Access (INTERVIEWER / INTERVIEWEE)

---

### 👤 User Management

* Create user profiles with:

  * Name
  * Email
  * Skills
  * Role (Interviewer / Interviewee)
* Skill-based matching support

---

### 📅 Interview Session Management

* Schedule interview sessions
* Assign interviewer & interviewee
* Automatic meeting link generation (Jitsi)
* View all sessions
* Edit & delete sessions
* Join interview via link

---

### ⭐ Feedback System

* Provide ratings (1–5)
* Add comments
* Feedback linked to sessions
* Edit & delete feedback

---

### 📊 Dashboard

* Total sessions count
* Upcoming sessions
* Feedback statistics
* Recent sessions preview
* Quick action buttons

---

### 🎨 User Interface

* Clean card-based UI
* Responsive design (mobile, tablet, desktop)
* Navigation bar with authentication state
* Form validation & error handling

---

## 🛠️ Tech Stack

### Backend

* Java 17+
* Spring Boot 3
* Spring Data JPA (Hibernate)
* Spring Security
* JWT Authentication
* H2 Database (in-memory)
* Maven

### Frontend

* React (Vite)
* React Router
* Axios
* CSS

---

## 🗄️ Database

* **Users Table**
* **Sessions Table**
* **Feedback Table**

Relationships:

* One user → multiple sessions
* One session → multiple feedback entries

---

## ⚙️ Setup Instructions

### 🔹 Backend Setup

```bash
cd backend
mvn spring-boot:run
```

Backend runs on:

```
http://localhost:8080
```

---

### 🔹 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔑 Default Users (Auto Generated)

| Role        | Email                                                         | Password    |
| ----------- | ------------------------------------------------------------- | ----------- |
| Interviewer | [john.smith@company.com](mailto:john.smith@company.com)       | password123 |
| Interviewee | [sarah.johnson@example.com](mailto:sarah.johnson@example.com) | password123 |
| Interviewee | [mike.chen@example.com](mailto:mike.chen@example.com)         | password123 |

---

## 🔄 API Endpoints

### Authentication

* `POST /auth/register`
* `POST /auth/login`

### Users

* `GET /users`

### Sessions

* `POST /sessions`
* `GET /sessions`

### Feedback

* `POST /feedback`
* `GET /feedback`

---

## 🎯 Key Workflow

1. Register/Login
2. Access Dashboard
3. Create Interview Session
4. Join Meeting
5. Provide Feedback
6. Track Progress

---

## 🔐 Security Features

* JWT Token Authentication
* Password Hashing
* Input Validation
* CORS Configuration
* Protected APIs

---

## 🚀 Future Improvements

* Real-time video calling (WebRTC)
* AI-based interviewer matching
* Email notifications
* Calendar integration
* Analytics dashboard

---

## 👨‍💻 Author

**Palak Sharma**
B.Tech Computer Science

---

## 📌 Notes

* H2 database is in-memory → data resets on restart
* Suitable for demo & development purposes

---

## 🎉 Conclusion

This project demonstrates a complete full-stack application with authentication, scheduling, feedback system, and modern UI, making it suitable for real-world interview practice scenarios.

---
