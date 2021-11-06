const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose.connect(url, console.log("Database is up and running."));
};

module.exports = connectDB;
