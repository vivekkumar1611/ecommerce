// ~/ecommerce/backend/db.js

const mysql = require("mysql2");
require('dotenv').config(); // Load environment variables from .env

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "ecommerce_user",
  password: process.env.DB_PASS || "12345678",
  database: process.env.DB_NAME || "ecommerce_db",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

module.exports = db;
