const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/f8_education_dev");
    console.log("MongoDB connected successfully!!!!");
  } catch (error) {
    console.error("MongoDB connection failed:");
  }
}

module.exports = { connect };
