🐞 Community Issue Reporter
A lightweight web application built with React, Node.js, and Express that allows users to report and track issues — complete with authentication, file uploads, and map support.

🚀 Features

User Authentication (signup/login)
Report Issues with optional image upload
Issue Listing & Management
Map Integration (using Leaflet)
Secure routes with JWT
Cloudinary support for image storage
Modular structure (controllers, services, models, routes)

📁 Project Structure
.
├── src/
│   ├── api/             # Axios client
│   ├── components/      # Reusable UI components
│   ├── config/          # DB, cloudinary, etc.
│   ├── controllers/     # Express handlers
│   ├── middleware/      # Auth, upload
│   ├── models/          # Mongoose schemas
│   ├── pages/           # React pages
│   ├── routes/          # Server routes
│   ├── services/        # Business logic
│   └── utils/           # Helpers (eg. fixLeafletIcon)
├── index.html
├── package.json
└── vite.config.js

🛠️ Tech Stack
Frontend: React, Vite, Axios
Backend: Node.js, Express
Database: MongoDB (via Mongoose)
Authentication: JSON Web Tokens
Uploads: Multer + Cloudinary
Maps: Leaflet
💾 Setup & Installation
Clone the repo:

Install dependencies:

Configure environment variables (.env):

MONGO_URI – your MongoDB connection string
JWT_SECRET – secret key for JWT
CLOUDINARY_* – your Cloudinary credentials
Run the development server:

📦 Available Scripts

npm run dev – start development server
npm run build – produce production build
npm run serve – serve the build locally (requires serve)

🤝 Contributing

Fork the repo
Create a new branch (git checkout -b feature/my-feature)
Commit your changes
Push to your branch and open a PR
