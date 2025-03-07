const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Address Subschema
const addressSchema = new mongoose.Schema({
  Street: {
    type: String,
    required: true,
    trim: true,
  },
  City: {
    type: String,
    required: true,
    trim: true,
  },
  PostalCode: {
    type: String,
    required: true,
    trim: true,
  },
});

// User Schema
const userSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
    trim: true,
  },
  LastName: {
    type: String,
    required: true,
    trim: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"], // Email regex validation
  },
  Password: {
    type: String,
    required: true,
    minLength: 6, // Ensure password length is at least 6 characters
  },
  Phone: {
    type: String,
    
    
    
    length:8 , 
    
  },
  Image: {
    type: String,
    required: false, // Assuming the image path is mandatory
  },
  Adress: {
    type: addressSchema, // Embed the address schema
    required: false,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
  Role : {
    type : String,
    default : "Normal User",
  }
});

// Pre-save middleware for hashing password before saving it to DB
userSchema.pre("save", async function (next) {
  if (this.isModified("Password") || this.isNew) {
    try {
      const salt = await bcrypt.genSalt(10);
      this.Password = await bcrypt.hash(this.Password, salt);
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

// Instance method for comparing passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.Password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
