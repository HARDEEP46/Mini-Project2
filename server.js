import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/studentRoutes.js";

dotenv.config();          // Load .env file
const app = express();    // Create Express app

// Middleware to parse JSON body
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api", studentRoutes);
app.use(express.static("public")); //  Serve HTML from /public

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
