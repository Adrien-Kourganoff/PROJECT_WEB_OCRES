import React from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
import SearchBox from "react-google-maps/lib/components/places/SearchBox";

//API Maps Javascript
//const API_URL = "https://maps.googleapis.com/maps/api/js";
//const API_KEY = "AIzaSyCL8ARlA4RfE7O2tfW_YmP_oM5hANAZReo";

//Clé API Google geocode
const API_KEY_gg = "AIzaSyBLPHz3LcO2MiR7Y-mA7B3YKPmfl8o5FwE";
//const API_KEY_gg_none = "";

//URL API google geocode xml
//const API_URL_gg = "https://maps.googleapis.com/maps/api/geocode/xml";
//URL API google geocode json
const API_URL_gg_json = "https://maps.googleapis.com/maps/api/geocode/json";

class API_Geocode{

    constructor(ville){
        console.log("test : " + document.getElementById("input"));
        ville = document.getElementById("input");
        if(ville === ""){
            ville = "Paris";
        }
        this.ville = ville;
        console.log("ville : " + ville)
    }

    fetchLongLat(){
        const axios = require('axios').default;
        return axios
        .get(`${API_URL_gg_json}?address=${this.ville},&key=${API_KEY_gg}`,{
            crossdomain : true
        })
    }
}

/////////////////////////
/*class API_MapsJavascript extends React.Component{

    render(){
        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
              defaultZoom={1.5}
              defaultCenter={{ lat: 0, lng: 0 }}
            >
              <Marker
                position={{ lat: -0, lng: 0 }}
              />
            </GoogleMap>
          ));

        return(
            <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCL8ARlA4RfE7O2tfW_YmP_oM5hANAZReo&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        )
    }
}*/


class API_MapsJavascript extends React.Component{

    render(){
        const apiGeocode = new API_Geocode();
        var latitude = 0;
        var longitude = 0;

        apiGeocode.fetchLongLat().then(function(response){
            const data = response.data;
            console.log("data1 : " + data);
    
            latitude = data.results[Object.keys(data.results)[0]].geometry.location.lat;
            
            longitude = data.results[Object.keys(data.results)[0]].geometry.location.lng;

            
        })
        console.log("lat2 : "+ latitude); 
        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
            defaultZoom={1.5}
            defaultCenter={{ lat: latitude, lng: longitude }}
            >    
            <Marker
                position={{ lat: -latitude, lng: longitude }}
            />
            </GoogleMap>
        ));

        return(
            <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCL8ARlA4RfE7O2tfW_YmP_oM5hANAZReo&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        )
       
        
    }
}


export function start(){
    /*const apiGeocode = new API_Geocode();
    var latitude;
    var longitude;

    apiGeocode.fetchLongLat().then(function(response){
        const data = response.data;

        latitude = data.results[Object.keys(data.results)[0]].geometry.location.lat;
        longitude = data.results[Object.keys(data.results)[0]].geometry.location.lng;

        API_MapsJavascript(data);
    })*/
    API_MapsJavascript();
}
///////////////////////////







/////////////////
/*class API_MapsJavascript extends React.Component{
    render(){

        const apiGeocode = new API_Geocode();
        var latitude = 0;
        var longitude = 0;

        apiGeocode.fetchLongLat().then(function(response){
            const data = response.data;

            latitude = data.results[Object.keys(data.results)[0]].geometry.location.lat;
            longitude = data.results[Object.keys(data.results)[0]].geometry.location.lng;

        })

        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
              defaultZoom={1.5}
              defaultCenter={{ lat: latitude, lng: longitude }}
            >
              <Marker
                position={{ lat: -latitude, lng: longitude }}
              />
            </GoogleMap>
        ));

        return(
            <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCL8ARlA4RfE7O2tfW_YmP_oM5hANAZReo&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        )
    }
}*/
///////////




export default API_MapsJavascript;

