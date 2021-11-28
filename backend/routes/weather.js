const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();

// Clé api
const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
// Url API
const API_URL = "http://api.openweathermap.org/data/2.5/forecast/daily?q=";
// Base source icon
const API_URL_ICON = "http://openweathermap.org/img/wn/";

/** GET weather for next 7 days 
 * if city is given give the meteo for the city otherwise give it for paris
 * 
 * IN req can ask for 'city' and 'day' for the number of days !! must add 1 day !!
*/
router.get('/', async function(req, res, next) {
    
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

    var response;

    var city = "Paris";//Default city = Paris
    var day = 8;//Default days = 8

    //If city give and not null
    if(req.query.city)
        city = req.query.city;

    //If day give and not null
    if(req.query.day)
        day = req.query.day;

    /* if city precised */
    console.log(city);
    console.log(req.query.city);

    await axios.get(API_URL+city+"&cnt="+day+"&units=metric&appid="+API_KEY)
        .then(allData => response=allData.data)
        .catch(err => res.send(err));

    res.status(200).send(response);
});

//get icons for next *day* days
router.get('/icon', async function(req, res, next) {

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    
    var icons = [];
    var day = 1;//default 1
    var city = "Paris";//Default city = Paris

    //If city give and not null
    if(req.query.city)
    city = req.query.city;

    //If days give and not null
    if(req.query.day)
        day = req.query.day;

        await axios.get(API_URL+city+"&cnt="+day+"&units=metric&appid="+API_KEY)
            .then(allData => {
                for (let i = 0; i < day; i++) {
                    icons.push(API_URL_ICON+allData.data.list[i].weather[0].icon+"@2x.png");
                }
            })
            .catch(err => res.send(err));
        
    res.status(200).send(icons);
});

module.exports = router;