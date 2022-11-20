require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const noteRoutes = require("./routes/note");

// Create a new express app
const app = express();

// use body + params
app.use(express.json());

// Print all requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/note", noteRoutes);

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
