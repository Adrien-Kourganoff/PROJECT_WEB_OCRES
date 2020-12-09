
require('dotenv').config()
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const mongoose = require('mongoose');
const cors = require('cors');

var eventRouter = require("./routes/event");

var app = express();

mongoose.connect('mongodb://localhost/projet', {useNewUrlParser: true,useUnifiedTopology: true });

const db = mongoose.connection;

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



app.use("/event",eventRouter);


module.exports = app;