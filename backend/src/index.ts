import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import path from "path";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import { v2 as cloudinary } from "cloudinary";
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import myHotelRoutes from "./routes/my-hotels";
import hotelRoutes from "./routes/hotels";
import myProfileRoutes from "./routes/my-profile";
import bookingRoutes from "./routes/my-bookings";

// Load environment variables
dotenv.config();

// Validate essential environment variables
const requiredEnvVars = [
  "CLOUDINARY_CLOUD_NAME",
  "CLOUDINARY_API_KEY",
  "CLOUDINARY_API_SECRET",
  "MONGODB_CONNECTION_STRING",
];
requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    console.error(`Missing required environment variable: ${envVar}`);
    process.exit(1);
  }
});

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Connect to MongoDB
const connectToDatabase = async () => {
  try {
    console.log("Connecting to MongoDB Cluster...");
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING!);
    console.log("Connected to MongoDB Cluster");
  } catch (err) {
    console.error("Failed to connect to MongoDB Cluster. Trying local MongoDB...");
    try {
      await mongoose.connect(process.env.MONGODB_CONNECTION_STRING_LOCAL!);
      console.log("Connected to Local MongoDB");
    } catch (localErr) {
      console.error("Failed to connect to MongoDB:", localErr);
      process.exit(1);
    }
  }
};
connectToDatabase();

// Initialize Express app
const app = express();

// Middleware
app.use(helmet()); // Secure HTTP headers
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/my-hotels", myHotelRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/my-profile", myProfileRoutes);
app.use("/api/my-bookings", bookingRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../frontend/dist")));
  app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../../frontend/dist", "index.html"));
  });
}

// Error Handling Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start server
app.listen(3000, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:3000 🚀`);
});

// Handle graceful shutdown
process.on("SIGINT", async () => {
  console.log("Shutting down server...");
  await mongoose.connection.close();
  console.log("MongoDB connection closed");
  process.exit(0);
});
