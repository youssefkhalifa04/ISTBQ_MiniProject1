const express = require("express");
const router = express.Router();
const Product = require("../models/product"); // Correct import

// Example POST route to add a product
router.post("/products", async (req, res) => {
  try {
    const { Name, Category, Price, Status , Action, image } = req.body;

    // Validate input
    if (!Name || !Category || !Price ||!Status || !Action|| !image) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Create a new product
    const newProduct = new Product({ Name, Category, Price, Status , Action, image  });

    // Save product to the database
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
