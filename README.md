# **🚀 MERN-Stack Hotel Booking Application Deployment Guide**

This guide walks you through the process of setting up and deploying the **MERN Booking App** on your local machine using **Kubernetes (Kind)** or **Docker Compose**. Whether you're a student, a professional, or someone exploring the world of web development, this guide is designed to help you deploy the app with ease.

---

## **🔑 Key Features of Our Booking App**

1. **User Authentication**: Secure login and registration using HTTP cookies and JWT.
2. **Hotel Management**: Add, edit, and view hotels with full state management.
3. **Image Uploads**: Integrate image uploads for a complete booking platform experience.
4. **Search, Sort, & Filter**: Enhance user experience with advanced search functionalities.
5. **Online Payments**: Integrate Stripe for secure booking payments.
6. **Booking Management**: View and manage user bookings effectively.
7. **Dynamic Home Page**: Display recently added hotels on the home page.

---

## **📋 Prerequisites**

Before starting, ensure you have the following installed on your system. If you plan to run tests locally

- **Node.js** (includes npm) - [Download Node.js](https://nodejs.org)
- **MongoDB** (local or cloud) - [Sign up for MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Docker** - [Install Docker](https://www.docker.com/get-started)
- **Kind** (Kubernetes in Docker) - [Install Kind](https://kind.sigs.k8s.io/)
- **Kubectl** (Kubernetes Command Line Tool) - [Install Kubectl](https://kubernetes.io/docs/tasks/tools/)

---

## **Cloning or Forking the Repository**

1. **Clone or Fork**: 
   - Fork the repository on GitHub if you plan to contribute.
   - Or clone the repository directly using the following command:

     ```bash
     git clone https://github.com/dhruvmoradiya69/CI-CD-Deployment-HotelHub-MERN.git
     ```

2. Navigate into the project directory:
   ```bash
   cd CI-CD-Deployment-HotelHub-MERN
   ```

---

## **Application Configuration**

### **Backend**

1. **Environment Variables**: Create a `.env` file in the `backend` folder:

   ```plaintext
   MONGODB_CONNECTION_STRING=mongodb://admin:secret@mongodb:27017/dbname?authSource=admin
   JWT_SECRET_KEY=
   FRONTEND_URL=

   # Cloudinary Variables
   CLOUDINARY_CLOUD_NAME=
   CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=

   # Stripe
   STRIPE_API_KEY=
   ```

2. **Setup MongoDB**: Ensure your MongoDB instance uses the URL format provided above.
3. **Cloudinary**: Sign up for [Cloudinary](https://cloudinary.com/) and add your credentials.
4. **Stripe**: Add your API key from [Stripe](https://stripe.com/).
5. **JWT Secret**: Generate a secure key for `JWT_SECRET_KEY`.
6. **Frontend URL**: Set `FRONTEND_URL` to the location of your frontend app (e.g., `http://localhost:5173`).

### **Frontend**

1. Create a `.env` file in the `frontend` folder:

   ```plaintext
   VITE_API_BASE_URL=
   VITE_STRIPE_PUB_KEY=
   ```

2. Set:
   - `VITE_API_BASE_URL` to the backend server URL (e.g., `http://localhost:5050`).
   - `VITE_STRIPE_PUB_KEY` to the public Stripe key.

---

## **🐳 Deployment Using Docker Compose**

For a simpler setup, use Docker Compose:

```bash
docker-compose up -d --build
```

Access the app at [http://localhost](http://localhost).

---

## **🚢 Deployment Using Kubernetes (Kind)**

### 📦 **Create a Kind Cluster**

1. Create a Kubernetes cluster using Kind:
   ```bash
   kind create cluster --name mern-app
   ```

2. Navigate to the `k8s` folder:
   ```bash
   cd k8s
   ```

### 🗂️ **Create a Kubernetes Namespace**

```bash
kubectl apply -f namespace.yaml
```

### 🗄️ **Deploy MongoDB**

```bash
kubectl apply -f mongo-deployment.yaml -n mern-app
kubectl apply -f mongo-service.yaml -n mern-app
kubectl apply -f mongo-pvc.yaml -n mern-app
kubectl apply -f mongo-pv.yaml -n mern-app
```

### 🔐 **Deploy Secrets**

```bash
kubectl apply -f secret.yaml -n mern-app
```

### 🖥️ **Deploy Backend Service**

```bash
kubectl apply -f backend-deployment.yaml -n mern-app
kubectl apply -f backend-service.yaml -n mern-app
```

### 🌐 **Deploy Frontend Service**

```bash
kubectl apply -f frontend-deployment.yaml -n mern-app
kubectl apply -f frontend-service.yaml -n mern-app
```

### 🔍 **Verification**

1. Check pod status:
   ```bash
   kubectl get pods -n mern-app
   ```
2. Port forward the frontend service:
   ```bash
   kubectl port-forward service/frontend 8081:80 -n mern-app
   ```
   Access the app at [http://localhost:8081](http://localhost:8081).

---

## **🧹 Clean Up**

### **Kubernetes**

Remove the Kubernetes resources:
```bash
kind delete cluster --name mern-app
```

### **Docker Compose**

Stop and remove Docker Compose services:
```bash
docker-compose down
```

---

## **🎉 Conclusion**

Congratulations! You’ve successfully set up and deployed the **MERN-Stack Hotel Booking Application** using **Kubernetes (via Kind)** or **Docker Compose**. Whether you're looking for a scalable deployment or a quick local setup, your app is ready to go!
