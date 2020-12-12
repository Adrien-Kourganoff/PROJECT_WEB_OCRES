
require('dotenv').config()
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const mongoose = require('mongoose');
const cors = require('cors');

//var eventRouter = require("./routes/event");
const entrepriseRouter = require("./routes/entrprise");
//var dataRouter = require("./routes/data");

var app = express();


const uri =
"mongodb://localhost:27017/entrepriseDb";
mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true });

const db = mongoose.connection;


app.use(cors());
console.log("cvc")
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.get("/bonjour", function(req,res){
    res.status(200).send("bonjour")
})

app.listen(4000,()=>{console.log("letsgo")})
//app.use("/event",eventRouter);
app.use("/entreprises", entrepriseRouter)
//app.use("/data",eventRouter);



module.exports = app;

