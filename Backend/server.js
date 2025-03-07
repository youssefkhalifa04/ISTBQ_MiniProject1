require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const cors = require("cors");
const mongoose = require("./connect"); // Import the MongoDB connection file

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS

// Routes
app.use("/api/users", require("./routes/user")); // User-related routes
app.use("/api/products", require("./routes/product")); // Product-related routes

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log error stack for debugging
  
  // Handle different types of errors
  if (err.name === "ValidationError") {
    return res.status(400).send({ error: "Validation Error", message: err.message });
  }

  // If the error is from MongoDB or another source, handle it as a generic server error
  if (err.name === "MongoError" || err.name === "CastError") {
    return res.status(400).send({ error: "Database Error", message: err.message });
  }

  // General error handler
  res.status(500).send({ error: "Something went wrong!", message: err.message });
});

// Handle uncaught exceptions and unhandled promise rejections globally
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  process.exit(1); // Exit the application after handling uncaught exceptions
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection:", reason);
  process.exit(1); // Exit the application after handling unhandled promise rejections
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
