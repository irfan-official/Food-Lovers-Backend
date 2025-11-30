# Food Lovers Backend

## Overview

Food Lovers Backend is a Node.js and Express REST API powering the Food Lovers application. It manages users, authentication, reviews, comments, reactions, and email services.

## ✨ Features

* User authentication using Firebase Admin.
* CRUD operations for food reviews.
* Users can react (love) to reviews.
* Users can comment on any review.
* Profile updates: name & image.
* Secure JWT access & refresh token system.
* Email services via Nodemailer.
* MongoDB & Mongoose for database handling.

## 🛠️ Technologies Used

* **Node.js**
* **Express.js**
* **Mongoose**
* **MongoDB**
* **Firebase Admin SDK** (Auth)
* **Nodemailer** (Email)
* **dotenv** for environment config
* **Cors**, **Cookie-parser**, **Nodemon**

## 📂 Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/irfan-official/Food-Lovers-Backend.git
cd backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```
JWT_SECRET=
DB_URL=
DB_USER=
ENVIRONMENT=
PORT=
HOST_URL=

# Firebase Credentials
FIREBASE_TYPE=
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
FIREBASE_CLIENT_ID=
FIREBASE_AUTH_URI=
FIREBASE_TOKEN_URI=
FIREBASE_AUTH_PROVIDER_CERT_URL=
FIREBASE_CLIENT_CERT_URL=
FIREBASE_UNIVERSE_DOMAIN=

# Email
JWT_ACCESS_TOKEN_SECRET_KEY=
JWT_REFRESH_TOKEN_SECRET_KEY=
JWT_ACCESS_TOKEN_EXPIRE=
JWT_REFRESH_TOKEN_EXPIRE=
EMAIL_HOST=
EMAIL_PORT=
EMAIL_USER=
EMAIL_PASS=
SENDER_MAIL=
```

### 4. Start development server

```bash
npm run dev
```

## 📁 Folder Structure

```
root/
 ├── controllers/
 ├── routes/
 ├── middlewares/
 ├── models/
 ├── utils/
 ├── services/
 ├── index.js
 └── config/
```

## 🧪 API Endpoints (Examples)

### **Auth**

* `POST /auth/login`
* `POST /auth/refresh`
* `POST /auth/logout`

### **Reviews**

* `GET /reviews`
* `POST /reviews`
* `PATCH /reviews/:id`
* `DELETE /reviews/:id`

### **Comments**

* `POST /reviews/:id/comments`
* `GET /reviews/:id/comments`

### **Reactions**

* `POST /reviews/:id/love`

## 🚀 Deployment

Backend is deployed on **Vercel serverless functions**.

## 🤝 Contributions

Pull requests are welcome.

## 📜 License

This project is licensed under the MIT License.
