
require('dotenv').config()
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const mongoose = require('mongoose');
const cors = require('cors');

const entrepriseRouter = require("./routes/entrprise");
var app = express();
const uri =
    "mongodb://localhost:27017/entrepriseDb";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;


app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.get("/bonjour", function (req, res) {
    res.status(200).send("bonjour")
})

app.listen(4000, () => { console.log("letsgo") })
app.use("/entreprises", entrepriseRouter)




module.exports = app;

