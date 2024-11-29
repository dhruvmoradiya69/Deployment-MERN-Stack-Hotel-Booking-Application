# **Setting Up the MERN Booking App**

This guide walks you through the process of setting up the MERN Booking App on your local machine.

---

## **🔑 Key Features of Our Booking App**

1. **User Authentication**: Learn to implement secure login and registration using HTTP cookies and JWT for a seamless user experience.  
2. **Hotel Management**: Master the art of adding, editing, and viewing hotels. We cover everything from handling form inputs to managing state.  
3. **Image Uploads**: Dive into integrating image uploads, a crucial feature for any booking platform.  
4. **Search, Sort, & Filter**: Enhance the user experience with functionalities to search, sort, and filter hotels, making it easy for users to find their perfect stay.  
5. **Online Payments**: Integrate Stripe for secure and efficient hotel booking payments.  
6. **Booking Management**: Implement the feature to view and manage bookings, essential for any booking application.  
7. **Recent Hotels on Home Page**: Display recently added hotels on the home page, keeping the content dynamic and engaging.

---

## **Prerequisites**

Before starting, ensure you have the following installed:

- **Node.js** (includes npm) - [Download Node.js](https://nodejs.org)  
- **MongoDB** (local or cloud) - [Sign up for MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

## **Cloning or Forking the Repository**

1. **Clone or Fork**:  
   - If you want to contribute to the project, fork the repository by clicking the **Fork** button on GitHub.  
   - Alternatively, clone the repository directly using the following command:

     ```bash
     https://github.com/dhruvmoradiya69/CI-CD-Deployment-HotelHub-MERN.git
     ```

2. Navigate into the project directory:
   ```bash
   cd mern-booking-app
   ```

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
   - `VITE_API_BASE_URL` to the backend server URL (e.g., `http://localhost:3000`).
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
