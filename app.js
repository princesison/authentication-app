//jshint esversion:6
require("dotenv/config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const connectDB = require("./db/connect");

const app = express();

// ? Middlewares
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(cors());

// ? Routes
app.use("/api/v1/secrets", require("./routes/index"));

const PORT = process.env.PORT || 8000;

async function start() {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

start();
