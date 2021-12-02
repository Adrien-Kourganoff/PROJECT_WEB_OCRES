const mongoose = require('mongoose');
var express = require("express");
var router = express.Router();

mongoose.Promise = global.Promise;
//const dbName = "Projet_web_ocres_S1";
const dbURL = 'mongodb://localhost:27017/Projet_web_ocres_S1';

function addData(data){
  mongoose.connect(dbURL, {useNewUrlParser: true});
  mongoose.Collection('weather').insertMany(data);
};

function takeData(){
  mongoose.connect(dbURL, {useNewUrlParser: true});
  let dataWeather = mongoose.weather.find({weather});
  let dataDeg = mongoose.weather.find({deg});
  let dataWind = mongoose.weather.find({wind});
  let dataHumidity = mongoose.weather.find({humidity});
}

/* GET home page. */

router.get("/", function(req, res, next) {
  res.send("This is my homepage");
  let test = [
    {weather : "sun", deg : 15, wind : 29, humidity :15},
    {weather : "snow", deg : 5, wind : 20, humidity :40},
    {weather : "snow", deg : 2, wind : 30, humidity :50},
    {weather : "rain", deg : 7, wind : 23, humidity :90},
  ]
  addData(test);
});

module.exports = router;
