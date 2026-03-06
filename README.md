🐞 Community Issue Reporter

A lightweight full-stack web application that allows citizens to report, track, and manage community issues such as potholes, garbage, streetlight failures, etc.

Users can upload images, mark locations on a map, and track issue status in real time.

Built using React, Node.js, Express, and MongoDB with secure authentication and cloud-based image storage.

🚀 Features
1. User Authentication

Secure Signup and Login system

JWT-based authentication

Protected routes for authorized users

2. Issue Reporting

Users can:

Report community problems

Add description of the issue

Upload images as proof

Select location using map

3. Image Upload

Images uploaded using Multer

Stored securely in Cloudinary

4. Map Integration

Uses Leaflet.js

Allows users to mark issue location coordinates

5. Issue Tracking

Users can:

View list of reported issues

Track status of issues

Manage their reported issues

6. Modular Backend Architecture

Backend is structured using:

Controllers

Services

Models

Routes

Middleware

This improves scalability and maintainability.

🛠️ Tech Stack
Frontend

React

Vite

Axios

Leaflet (Map Integration)

Backend

Node.js

Express.js

Database

MongoDB

Mongoose ODM

Authentication

JSON Web Token (JWT)

File Upload

Multer

Cloudinary

📁 Project Structure
.
├── src
│
├── api
│   └── axios client for API requests
│
├── components
│   └── reusable UI components
│
├── config
│   └── configuration files (database, cloudinary)
│
├── controllers
│   └── request handlers for API routes
│
├── middleware
│   └── authentication & upload middleware
│
├── models
│   └── mongoose schemas
│
├── pages
│   └── React application pages
│
├── routes
│   └── express routes
│
├── services
│   └── business logic layer
│
└── utils
    └── helper functions

Root Files
-----------
index.html
package.json
vite.config.js
⚙️ Setup & Installation
1️⃣ Clone Repository
git clone https://github.com/yourusername/community-issue-reporter.git
cd community-issue-reporter
2️⃣ Install Dependencies
npm install
3️⃣ Configure Environment Variables

Create a .env file in the root directory.

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
4️⃣ Run Development Server
npm run dev

The application will run locally on:

http://localhost:5173
📦 Available Scripts
Script	Description
npm run dev	Start development server
npm run build	Create production build
npm run serve	Serve production build locally
🔐 Security Features

Password hashing using bcrypt

JWT token authentication

Protected API routes

Secure image upload

🌍 Real-World Use Case

This application can be used by:

Citizens to report civic issues

Municipal authorities to monitor problems

Local communities to track issue resolution

Examples:

Potholes

Garbage dumping

Broken street lights

Water leakage

Road damage

🤝 Contributing

Fork the repository

Create a new branch

git checkout -b feature/my-feature

Commit your changes

git commit -m "Added new feature"

Push to the branch

git push origin feature/my-feature

Open a Pull Request

📌 Future Improvements

Issue status updates by authorities

Notification system

Admin dashboard

AI-based issue classification

Mobile responsive improvements
