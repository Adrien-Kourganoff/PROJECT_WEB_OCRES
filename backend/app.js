
require('dotenv').config()
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const mongoose = require('mongoose');
const cors = require('cors');

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

mongoose.connect('mongodb://localhost/projet', {useNewUrlParser: true,useUnifiedTopology: true });

const db = mongoose.connection;

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);



module.exports = app;