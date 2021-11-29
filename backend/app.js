var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var galerieRouter = require("./routes/galerie");
var weatherRouter = require("./routes/weather");
var eventsRouter = require("./routes/events");
var albumsRouter = require("./routes/albums");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/galerie", galerieRouter);
app.use("/weather", weatherRouter);
app.use("/events", eventsRouter);
app.use("/albums", albumsRouter);

module.exports = app;
