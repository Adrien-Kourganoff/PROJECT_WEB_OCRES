/*var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
*/

const express = require("express");
const app = express();

app.get('/hello', (req,res) => {

    res.send('hello world')

})

app.listen(1337, () => {
    console.log('server started at 1337')
})