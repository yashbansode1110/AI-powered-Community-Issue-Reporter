# 🐞 Community Issue Reporter

A lightweight full-stack web application that allows citizens to **report and track community issues** such as potholes, garbage dumping, streetlight failures, etc.

Users can upload images, mark locations on a map, and track issue status.  
Built using **React, Node.js, Express, and MongoDB** with secure authentication and cloud-based image storage.

---

# 🚀 Features

### 1. User Authentication
- Secure **Signup and Login**
- **JWT-based authentication**
- Protected routes for authorized users

### 2. Issue Reporting
Users can:
- Report community problems
- Add description of the issue
- Upload images as proof
- Select location using map

### 3. Image Upload
- Images uploaded using **Multer**
- Stored securely in **Cloudinary**

### 4. Map Integration
- Uses **Leaflet.js**
- Allows users to mark issue **location coordinates**

### 5. Issue Tracking
Users can:
- View list of reported issues
- Track issue status
- Manage their reported issues

### 6. Modular Backend Architecture
Backend is structured using:
- Controllers
- Services
- Models
- Routes
- Middleware

This improves **scalability and maintainability**.

---

# 🛠️ Tech Stack

### Frontend
- React
- Vite
- Axios
- Leaflet

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JSON Web Tokens (JWT)

### File Upload
- Multer
- Cloudinary

---

# 📁 Project Structure

```
.
├── src/
│   ├── api/           # Axios client
│   ├── components/    # Reusable UI components
│   ├── config/        # Database & Cloudinary configuration
│   ├── controllers/   # Express request handlers
│   ├── middleware/    # Authentication & upload middleware
│   ├── models/        # Mongoose schemas
│   ├── pages/         # React pages
│   ├── routes/        # Express routes
│   ├── services/      # Business logic
│   └── utils/         # Helper functions
│
├── index.html
├── package.json
└── vite.config.js
```

---

# ⚙️ Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/community-issue-reporter.git
cd community-issue-reporter
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Configure Environment Variables

Create a `.env` file in the root directory.

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

### 4. Run the Development Server

```bash
npm run dev
```

The application will run on:

```
http://localhost:5173
```

---

# 📦 Available Scripts

| Script | Description |
|------|-------------|
| npm start | To run Backend |
| npm run dev:client | To run Frontend |

---

# 🔐 Security Features

- Password hashing using **bcrypt**
- **JWT authentication**
- Protected API routes
- Secure image uploads

---

# 🌍 Real-World Use Cases

This application can be used by:

- Citizens to report civic problems
- Municipal authorities to monitor issues
- Local communities to track issue resolution

Examples of issues:
- Potholes
- Garbage dumping
- Broken street lights
- Water leakage
- Road damage

---

# 🤝 Contributing

1. Fork the repository

2. Create a new branch

```bash
git checkout -b feature/my-feature
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to the branch

```bash
git push origin feature/my-feature
```

5. Open a Pull Request

---

# 📌 Future Improvements

- Admin dashboard
- Issue status updates by authorities
- Notification system
- AI-based issue classification
- Mobile responsive improvements

---
