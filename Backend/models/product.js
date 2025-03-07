const mongoose = require("mongoose"); // Import mongoose

// Define the Product schema
const productSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  categorie: {
    type: String,
    required: true,
  },
  Price: {
    type: Number, // Changed to Number
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

// Create the Product model
const Product = mongoose.model("Product", productSchema);

// Export the model
module.exports = Product;
