# Full Stack AI-Powered Blog Website

A robust, feature-rich blogging platform built with the **MERN Stack** (MongoDB, Express.js, React, Node.js). This application features a modern UI, a comprehensive Admin Dashboard, and integrates **Google Gemini AI** for automated content generation and **ImageKit** for efficient media management.

## 🚀 Features

### User Features (Public)
- **Responsive UI:** Clean, modern interface built with React and Tailwind CSS.
- **Browse & Search:** Filter blogs by categories (Technology, Lifestyle, Startup, etc.) or search by keywords.
- **Blog Details:** Rich text content rendering, author details, and publication dates.
- **Comments System:** Users can add comments (subject to admin approval).

### Admin Features (Dashboard)
- **Secure Authentication:** Admin login system using JWT (JSON Web Tokens).
- **Dashboard Overview:** Visual statistics for Total Blogs, Comments, and Drafts.
- **AI Content Generation:** Integrated **Google Gemini AI** to automatically generate blog descriptions/content based on titles.
- **Rich Text Editor:** WYSIWYG editor (Quill) for formatting blog posts.
- **Media Management:** Automatic image uploads and optimization using **ImageKit**.
- **Blog Management:** Create, Edit, Delete, and toggle Publish/Unpublish status.
- **Comment Moderation:** Approve or delete user comments before they go public.

## 🛠️ Tech Stack

### Frontend
- **React.js** (Vite)
- **Tailwind CSS** (Styling)
- **Context API** (State Management)
- **Axios** (API Requests)
- **React Router DOM** (Navigation)
- **React Hot Toast** (Notifications)

### Backend
- **Node.js** & **Express.js**
- **MongoDB** & **Mongoose** (Database)
- **JWT** (Authentication)
- **Multer** (File Handling)
- **ImageKit SDK** (Image Storage & Optimization)
- **Google GenAI SDK** (Gemini AI Integration)

---

## ⚙️ Environment Variables

To run this project, you need to configure environment variables for both the Server and the Client.
### 1.Client Setup (client/.env)
Create a .env file in the client directory and add the following:

```env
# Point this to your backend server URL (e.g., http://localhost:3000)
VITE_BASE_URL=http://localhost:3000```
```

### 2. Server Setup (`server/.env`)
Create a `.env` file in the `server` directory and add the following:

```env
# JWT Configuration
JWT_SECRET=your_super_secret_key_here

# Admin Credentials (for logging into the dashboard)
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_secure_password

# Database
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/blog-app

# ImageKit (Storage)
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=[https://ik.imagekit.io/your_id](https://ik.imagekit.io/your_id)

# Google Gemini AI
GEMINI_API_KEY=your_google_gemini_api_key
```
## 📦 Installation & Run

Follow these steps to set up the project locally.

### 1. Clone the Repository
```bash
git clone https://github.com/nileshmishradev/Full-Stack-Blog-Website.git
cd Full-Stack-Blog-Website
```
### 2. Install Dependencies
You need to install dependencies for both the frontend and backend .

Frontend(Backend):

```bash
cd client
npm install
```

Server (Backend):

```bash
cd server
npm install
```
### 3. Run the Project
You will need to open two separate terminal windows to run the backend and frontend simultaneously.

Terminal 1: Start Frontend
```bash
cd client
npm run dev
```

Terminal 2: backend Frontend
```bash
cd server
npm run server
```
