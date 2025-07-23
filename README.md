# 📚 Mini-Project #2 – Student Records API (MongoDB + Express)

This is a JavaScript-based mini project that demonstrates how to **Create** student records using a **RESTful API** built with **Express.js** and **MongoDB**. The application also includes a basic HTML frontend to display student data dynamically.

---

## 🔧 Project Objective

To build a simple, server-side application that performs **CRUD operations**, with the focus in this project being on the **CREATE (POST)** operation. It allows users to insert new student records into a MongoDB database and fetch them via API or frontend.

---

## 🚀 Features

- ✅ `POST /api/students` — Add a new student record
- ✅ `GET /api/students` — View all students (optional frontend)
- 📌 Data fields:
  - Name
  - Email
  - Age (0–100)
  - Program
  - Student ID
  - Status (`enrolled` / `not enrolled`)
- 🧾 JSON validation using **Mongoose schema**
- 🌐 Basic HTML/CSS frontend to display records
- 💡 Supports **Postman testing** or integrated form input

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (via Mongoose)
- **Postman** for API testing
- **HTML/CSS** for basic UI (optional)

---

## 📁 Folder Structure

Mini-Project2/
│
├── server.js # Entry point (Express server)
├── models/
│ └── studentModel.js # Mongoose schema for Student
├── routes/
│ └── studentRoutes.js # API routes
├── controllers/
│ └── studentController.js # Business logic
├── public/
│ ├── index.html # Frontend UI
│ └── style.css # (Optional styling)
├── config/
│ └── db.js # MongoDB connection
├── .env # Environment variables
├── package.json
└── README.md


---

## ⚙️ How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/Mini-Project2.git
cd Mini-Project2

