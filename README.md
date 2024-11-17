# MERN Booking App: Local Setup Guide

This guide provides a step-by-step process to set up and run the MERN Booking App on your local machine.

---

## Prerequisites

Before you begin, ensure the following are installed on your system:

- **Node.js** (LTS version recommended)
- **Git**
- **MongoDB** (or MongoDB Atlas for a cloud-based setup)
- **Stripe Account** (for payment integration)
- **Cloudinary Account** (for media storage)

---

## 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/chrisblakely01/mern-booking-app.git
cd mern-booking-app
2. Backend Setup
Step 1: Navigate to the Backend Directory
bash
Copy code
cd backend
Step 2: Install Dependencies
Install the required dependencies:

bash
Copy code
npm install
Step 3: Set Up Environment Variables
Create a .env file in the backend directory:

bash
Copy code
touch .env
Add the following variables to the .env file:

plaintext
Copy code
MONGODB_CONNECTION_STRING=<your-mongodb-connection-string>
JWT_SECRET_KEY=<your-secret-key>
FRONTEND_URL=http://localhost:5173

# Cloudinary Variables
CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>

# Stripe Variables
STRIPE_API_KEY=<your-stripe-api-key>
Note: Replace <your-mongodb-connection-string>, <your-secret-key>, and other placeholders with actual values.

Step 4: Start the Backend Server
Run the following command to start the backend server:

bash
Copy code
npm start
By default, the backend will run on http://localhost:7000.

3. Frontend Setup
Step 1: Navigate to the Frontend Directory
Open a new terminal and navigate to the frontend directory:

bash
Copy code
cd frontend
Step 2: Install Dependencies
Install the required dependencies:

bash
Copy code
npm install
Step 3: Set Up Environment Variables
Create a .env file in the frontend directory:

bash
Copy code
touch .env
Add the following variables to the .env file:

plaintext
Copy code
VITE_API_BASE_URL=http://localhost:7000
VITE_STRIPE_PUB_KEY=<your-stripe-public-key>
Note: Replace <your-stripe-public-key> with your Stripe public API key.

Step 4: Start the Frontend Application
Run the following command to start the frontend:

bash
Copy code
npm run dev
By default, the frontend will run on http://localhost:5173.

4. Running the Application Locally
Once both servers are running:

Open your browser and navigate to http://localhost:5173.
Use the login credentials as required, or set up a new user.
Common Issues and Solutions
Port Conflicts:

If another process is using port 7000 or 5173, either stop that process or change the port in the .env files.
Database Connection Issues:

Verify your MongoDB connection string and ensure the database server is running.
Missing Dependencies:

Run npm install in both the backend and frontend directories.
Additional Notes
Frontend:

The frontend uses Vite for fast development builds. Make sure to use npm run dev for development mode.
Backend:

The backend is set up to restart automatically on changes using nodemon. Ensure it is installed globally if required.
Happy coding! 🎉

vbnet
Copy code

This version is fully formatted in Markdown and ready for use. Let me know if there are further edits or ad
