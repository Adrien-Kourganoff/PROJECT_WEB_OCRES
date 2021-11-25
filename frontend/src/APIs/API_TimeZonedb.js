//API Heure: http://api.timezonedb.com/v2.1/get-time-zone
//API long_lat : https://maps.googleapis.com/maps/api/geocode


//Pour récuperer l'heure d'une ville il faut d'abbord récupérer sa longitude/latitude grace à l'API google.
//Ensuite on peut utiliser l'API timezonedb pour récupere l'heure de la ville à partir de sa longitude/latitude.

//Clé API
const API_KEY = "AIzaSyBLPHz3LcO2MiR7Y-mA7B3YKPmfl8o5FwE";

//URL API xml
const API_URL = "https://maps.googleapis.com/maps/api/geocode/xml";
//URL API json
//const API_URL_json = "https://maps.googleapis.com/maps/api/geocode/json";



class API_TimeZonedb{

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
        .get(`${API_URL}?address=${this.ville},+CA&key=${API_KEY}`,{
            crossdomain : true
        })
    }
}

function start(){
    const apiTimeZonedb = new API_TimeZonedb();

    apiTimeZonedb.fetchLongLat().then(function(response){
        const data = response.data;

        const latitude = data.geometry[Object.keys(data.geometry)[0]].lat;
        const longitude = data.geometry[Object.keys(data.geometry)[0]].lng;
        
        document.getElementById("lat").innerHTML = latitude;
        document.getElementById("lng").innerHTML = longitude;
    })
}




/*function start(){
    
    /*fetch(){
        return 'axios'
        .get(`${API_URL}?address=${this.ville},+CA&key=${API_KEY}`, {
        crossdomain: true
        })
        
    };*/

    /*fetch("${API_URL}?address=${this.ville},+CA&key=${API_KEY}")
    .then(data =>initialisation(data))
    .catch(err =>console.log("Erreur:", err));


    */
    
    /*function initialisation (ville){
        ville = document.getElementById("ville-input").value;
        // Si la ville n'est pas définit alors la ville par défault est Paris
        if(ville === ""){
          ville = "paris";
        }
        this.ville = ville;
        recupererLongLat();
    }

    function getInfosVille(){
        const axios = require('axios');
        return axios
        .get(`${API_URL}?address=${this.ville},+CA&key=${API_KEY}`, {
        crossdomain: true
        })
    }

    function recupererLongLat(){
        const data = getInfosVille();
        document.getElementById("lat").innerHTML = data.geometry; 
    }

}*/