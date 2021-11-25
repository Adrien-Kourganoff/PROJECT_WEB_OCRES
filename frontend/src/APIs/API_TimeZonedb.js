//API Heure: http://api.timezonedb.com/v2.1/get-time-zone
//API long_lat : https://maps.googleapis.com/maps/api/geocode


//Pour récuperer l'heure d'une ville il faut d'abbord récupérer sa longitude/latitude grace à l'API google.
//Ensuite on peut utiliser l'API timezonedb pour récupere l'heure de la ville à partir de sa longitude/latitude.

//Clé API Google
//const API_KEY_gg = "AIzaSyBLPHz3LcO2MiR7Y-mA7B3YKPmfl8o5FwE";
const API_KEY_gg_none = "";

//URL API google xml
//const API_URL_gg = "https://maps.googleapis.com/maps/api/geocode/xml";
//URL API google json
const API_URL_gg_json = "https://maps.googleapis.com/maps/api/geocode/json";


//Clé API TimeZonedb
const API_KEY_tz = "JS2NXLXQZRA8";

//URL API TimeZonedb
const API_URL_tz = "http://api.timezonedb.com/v2.1/get-time-zone";



class API_Geocode{

    constructor(ville){
        ville = document.getElementById("city-input").value;
        if(ville === ""){
            ville = "Paris";
        }
        this.ville = ville;
    }

    fetchLongLat(){
        const axios = require('axios').default;
        return axios
        .get(`${API_URL_gg_json}?address=${this.ville},&key=${API_KEY_gg_none}`,{
            crossdomain : true
        })
    }
}

class API_TimeZonedb{

    constructor(lng,lat){
        this.lng = lng;
        this.lat = lat;
    }

    fetchTime(){
        const axios = require('axios').default;
        return axios
        .get(`${API_URL_tz}?key=${API_KEY_tz}&format=json&by=position&lat=${this.lat}&lng=${this.lng}`,{
            crossdomain : true
        })
    }
}

export default function start(){
    const apiGeocode = new API_Geocode();
    var latitude = 0;
    var longitude = 0;

    apiGeocode.fetchLongLat().then(function(response){
        const data = response.data;

        latitude = data.results[Object.keys(data.results)[0]].geometry.location.lat;
        longitude = data.results[Object.keys(data.results)[0]].geometry.location.lng;

        const apiTimeZone = new API_TimeZonedb(longitude,latitude);

        apiTimeZone.fetchTime().then(function(response){
            const data = response.data;

            var actuel = data.formatted;
            actuel = actuel.split(' ');
            actuel = actuel[1].split(':');
            var heure = actuel[0];
            var minute = actuel[1];

            heure = heure*30;
            minute = minute*6;
            document.getElementById("heure").style.transform = `rotate(${heure}deg)`;
            document.getElementById("minute").style.transform = `rotate(${minute}deg)`;

            //document.getElementById("heure").innerHTML = heure;
            //document.getElementById("minute").innerHTML = minute;
        })
    })
}

