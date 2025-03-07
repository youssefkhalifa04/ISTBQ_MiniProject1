const mongoose = require("mongoose");

// Get MongoDB URI from environment variables
const MONGO_URI = process.env.MONGO_URI;

// Ensure MONGO_URI is set
if (!MONGO_URI) {
  console.error("MongoDB URI not provided in environment variables");
  process.exit(1); // Exit the process if the URI is missing
}

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Database connection error:", err.message);
    process.exit(1); // Exit the process on error
  });

// Export mongoose to use in other files
module.exports = mongoose;
