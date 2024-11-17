# **Setting Up the MERN Booking App**

This guide walks you through the process of setting up the MERN Booking App on your local machine.

---

## **Prerequisites**

Before starting, ensure you have the following installed:

- **Node.js** (includes npm) - [Download Node.js](https://nodejs.org)  
- **MongoDB** (local or cloud) - [Sign up for MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

## **Cloning the Repository**

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/chrisblakely01/mern-booking-app.git
   cd mern-booking-app
   ```

2. Navigate to the cloned directory.

---

## **Backend Configuration**

### **1. Environment Variables**
Navigate to the `backend` folder and create a `.env` file. Add the following:

```plaintext
MONGODB_CONNECTION_STRING=
JWT_SECRET_KEY=
FRONTEND_URL=

# Cloudinary Variables
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Stripe
STRIPE_API_KEY=
```

### **2. MongoDB Setup**
- Sign up or log in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- Create a cluster and database, then obtain your connection string.
- Add the connection string to `MONGODB_CONNECTION_STRING` in your `.env` file.

### **3. Cloudinary Setup**
- Create an account at [Cloudinary](https://cloudinary.com/).
- Obtain your **cloud name**, **API key**, and **API secret** from the dashboard.
- Add these details to the respective variables in `.env`.

### **4. Stripe Setup**
- Sign up or log in at [Stripe](https://stripe.com/).
- Obtain your API key from the Stripe dashboard and add it to `STRIPE_API_KEY`.

### **5. JWT Secret**
- Generate a long, random string for `JWT_SECRET_KEY`. Tools like [random.org](https://random.org) or other key generators can help.

### **6. Frontend URL**
- Set `FRONTEND_URL` to the location of your frontend app (e.g., `http://localhost:3000` for local development).

---

## **Frontend Configuration**

1. Navigate to the `frontend` folder and create a `.env` file:

   ```plaintext
   VITE_API_BASE_URL=
   VITE_STRIPE_PUB_KEY=
   ```

2. Set:
   - `VITE_API_BASE_URL` to the backend server URL (e.g., `http://localhost:7000`).
   - `VITE_STRIPE_PUB_KEY` to the public Stripe key.

---

## **Running the Application**

### **Backend**
1. Navigate to the `backend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```

### **Frontend**
1. Open a new terminal and navigate to the `frontend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm run dev
   ```

The app should now be accessible at `http://localhost:5173` by default.

---

## **Contact & Support**

For issues, create a GitHub issue or reach out at `dhruvmoradiya69000@gmail.com`.

---
