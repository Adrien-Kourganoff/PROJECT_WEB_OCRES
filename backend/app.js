var express = require("express");
var app = express();
const mongoose= require('mongoose'); 
const bodyParser= require('body-parser');
const cors=require('cors');

app.use(cors());
app.use(bodyParser.json());


//import
const postsRoute=require('./routes/index');
app.use('/posts',postsRoute)

//routes
app.get('/',(req,res)=>{
    res.send('we are on home')
}); 


app.listen(3005);

//connexion

mongoose.connect('mongodb+srv://root:root@test.pblr0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
()=> console.log('connected')
);


var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");



app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter); 
app.use("/users", usersRouter);

module.exports = app;
  