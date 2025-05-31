const mongoose = require('mongoose');
require('dotenv').config()
const connectionString = process.env.CONNECTION_STRING;

const connectToDatabase = async () => {
  if (!connectionString) {
    throw new Error("❌ CONNECTION_STRING is undefined. Check your .env and dotenv config.");
  }

  try {
    await mongoose.connect(connectionString);
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
