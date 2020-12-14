const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});
const astucesRouter = require('./routes/astuces');
const GoalRouter = require('./routes/goal');
const BatonRouter = require('./routes/baton');
const MotivationRouter = require('./routes/motivation');

app.use('/astuces',astucesRouter);
app.use('/goal',GoalRouter);
app.use('/baton',BatonRouter);
app.use('/motivation',MotivationRouter);

app.listen(port, () => {
    console.log("Server is running on port: ${port}");
});