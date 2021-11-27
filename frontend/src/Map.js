<<<<<<< Updated upstream
import React from 'react';
import {GoogleMap , withScriptjs, withGoogleMap} from 'react-google-maps'

function Map() {
    return ( 
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat:48.856613,lng:2.352222}}
        />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Page() {
    return(
        <div style={{width:'100vw' , height:'100vh'}}>
            <WrappedMap 
                googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAej6sNIR6DCokBaYAL1AvVfpwToodjdUs'}
                loadingElement={<div style={{height: '100%'}}/>}
                containerElement={<div style={{height: '100%'}}/>}
                mapElement={<div style={{height: '100%'}}/>}
            />
=======
import React from "react";
import Box from './components/Box.js';
import Box2 from './components/Box2.js';
import Box3 from './components/Box3.js';
import axios from "axios";
import TodayBox from './components/TodayBox.js';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from "@react-google-maps/api";

import Dashboard from "./Dashboard";

const librairies = ["places"];

const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
const API_URL_ICON = "http://openweathermap.org/img/wn/";
const API_URL_DAY3 = "http://api.openweathermap.org/data/2.5/forecast/daily";

const mapContainerStyle = {
    width: '1700px',
    height: '400px',
}

var google = require('@google/maps').createClient({
    key: 'REACT_APP_GOOGLE_MAPS_API_KEY'
});

const center = {
    lat: 48.856613,
    lng: 2.352222,
}

const cities = [{
    lat: 51.507351,
    lng: -0.127758,
    time: 0,
    nameCities: "Londres"
},
{
    lat: 40.416775,
    lng: -3.703790,
    time: 1,
    nameCities: "Madrid"
},
{
    lat: 48.856613,
    lng: 2.352222,
    time: 2,
    nameCities: "Paris"
},
{
    lat: 55.755871,
    lng: 37.617680,
    time: 3,
    nameCities: "Moscou"
}
]

export default function Map() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        librairies,
    });

    const [markers, setMarkers] = React.useState(cities);
    const [selected, setSelected] = React.useState(null);
    const [city, setCity] = React.useState("Londres");

    const onMapClick = React.useCallback((event) => {
        const latlng =
        {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
        }

        for(var i=0; i<cities.length; ++i)
        {
            if (cities[i].lat === latlng.lat && cities[i].lng === latlng.lng)
            {
                console.log(cities[i].nameCities)
                //Dashboard ({city: cities[i].nameCities})
                setCity(cities[i].nameCities);
                callAPI();
            }
        }
    }, []);

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const callAPI = () => {
        // Call API
        console.log(city);
        axios
          .get(`${API_URL_DAY3}?q=${city}&cnt=4&units=metric&appid=${API_KEY}`)
          .then(({ data }) => {
            // Récupère la donnée d'une API
            console.log(data);
            for(let i=0;i<4;i++)
            {
              // On récupère l'information principal
              const main = data.list[i].weather[0].main;
              const description = data.list[i].weather[0].description;
              const temp = data.list[i].temp.day;
              const icon = `<img src=${API_URL_ICON}${data.list[i].weather[0].icon}@2x.png class="weather-icon"/>`;
      
              // Modifier le DOM
              document.getElementById('day'+i+'-forecast-main').innerHTML = main;
              document.getElementById('day'+i+'-forecast-more-info').innerHTML = description;
              document.getElementById('day'+i+'-icon-weather-container').innerHTML = icon;
              document.getElementById('day'+i+'-forecast-temp').innerHTML = `${temp}°C`;
            }
          })
          .catch(console.error);
      };
  
    callAPI(city);

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    //API pour trafic 
    const options = {
        method: 'GET',
        url: 'https://traffic-incident-report.p.rapidapi.com/get_report',
        params: {country: '<REQUIRED>', region: 'virginia'},
        headers: {
          'x-rapidapi-host': 'traffic-incident-report.p.rapidapi.com',
          'x-rapidapi-key': '9759435ffbmshf8ad02052e5d525p1811a9jsncc1ca5606eba'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log("test");
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
      

    return (
        <div>
            <h1>Villes disponibles</h1>

            <GoogleMap mapContainerStyle={mapContainerStyle}
                zoom={8}
                center={center}
                onClick={onMapClick}
                onLoad={onMapLoad}
            >
                {markers.map((marker) => (
                    <Marker
                        key={marker.time}
                        position={{ lat: marker.lat, lng: marker.lng }}
                        onClick={() => {
                            setSelected(marker);
                            setCity(marker.nameCities);
                            callAPI();
                            //Dashboard({city : marker.nameCities})
                        }}
                    />

                ))}

                {selected ? (
                    <InfoWindow position={{ lat: selected.lat, lng: selected.lng }}
                        onCloseClick={() => {
                            setSelected(null);
                        }}
                    >
                        <div>
                            <h2>{selected.nameCities}</h2>
                        </div>
                    </InfoWindow>) : null}
            </GoogleMap>
            <div>
                <h2>{city}</h2>
            </div>
            <TodayBox name={"Aujourd'hui"}/>
            <div class="App-header">
                <Box name={"Demain"}/>
                <Box2 name={"Après-demain"}/>
                <Box3 name={"Le jour d'après"}/>
            </div>
>>>>>>> Stashed changes
        </div>
    )
};
