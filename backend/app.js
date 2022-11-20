require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

// Create a new express app
const app = express();

// Routes

// Connect to MongoDB + Started Server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 8000, () =>
      console.log(
        "Connected to DB and Server started on port",
        process.env.PORT
      )
    );
  })
  .catch((err) => console.log(err));
