import React from "react";
import Box from './components/Box.js';
import Box2 from './components/Box2.js';
import Box3 from './components/Box3.js';
import Box4 from './components/Box4.js';
import Box5 from './components/Box5.js';
import Box6 from './components/Box6.js';
import Box7 from './components/Box7.js';
import Box8 from './components/Box8.js';
import BoxEmojis from './components/BoxEmojis.js';
import axios from "axios";
import TodayBox from './components/TodayBox.js';
import { Link } from 'react-router-dom';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from "@react-google-maps/api";

//import Admin from "./Admin";

import { Chart, PieController, ArcElement, Legend, Tooltip, Title, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

import BoxSun from "./components/BoxSun.js";
import BoxAPICreated from "./components/BoxAPICreated.js";

Chart.register(LinearScale, CategoryScale, PieController, ArcElement, Title, Legend, Tooltip, PointElement, LineElement);

const librairies = ["places"];

const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
const API_URL_ICON = "http://openweathermap.org/img/wn/";
const API_URL_DAY3 = "http://api.openweathermap.org/data/2.5/forecast/daily";

const mapContainerStyle = {
    width: '1500px',
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
},
{
    lat: 52.5170365,
    lng: 13.3888599,
    time: 4,
    nameCities: "Berlin"
},
{
    lat: 41.8933203,
    lng: 12.4829321,
    time: 5,
    nameCities: "Rome"
},
{
    lat: 40.7127281,
    lng: -74.0060152,
    time: 6,
    nameCities: "New York"
}
]

var myChart = new Chart();

export default function Map() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        librairies,
    });

    const [markers, setMarkers] = React.useState(cities);
    const [selected, setSelected] = React.useState(null);
    const [city, setCity] = React.useState("la ville que vous souhaitez !");

    const onMapClick = React.useCallback((event) => {
        const latlng =
        {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
        }

        for (var i = 0; i < cities.length; ++i) {
            if (cities[i].lat === latlng.lat && cities[i].lng === latlng.lng) {
                console.log(cities[i].nameCities)
                //Dashboard ({city: cities[i].nameCities})
                setCity(cities[i].nameCities);
                //callAPI();
                callAPI2(cities[i].nameCities);
            }
        }
    }, []);

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    var callAPI = (city) => {
        // Call API
        console.log(city);
        axios
            .get(`${API_URL_DAY3}?q=${city}&cnt=4&units=metric&appid=${API_KEY}`)
            .then(({ data }) => {
                // Récupère la donnée d'une API
                //console.log(data);
                for (let i = 0; i < 4; i++) {
                    // On récupère l'information principal
                    const main = data.list[i].weather[0].main;
                    const description = data.list[i].weather[0].description;
                    const temp = data.list[i].temp.day;
                    const icon = `<img src=${API_URL_ICON}${data.list[i].weather[0].icon}@2x.png class="weather-icon"/>`;

                    // Modifier le DOM
                    document.getElementById('day' + i + '-forecast-main').innerHTML = main;
                    document.getElementById('day' + i + '-forecast-more-info').innerHTML = description;
                    document.getElementById('day' + i + '-icon-weather-container').innerHTML = icon;
                    document.getElementById('day' + i + '-forecast-temp').innerHTML = `${temp}°C`;


                }
                const temp1 = data.list[0].temp.day;
                const temp2 = data.list[1].temp.day;
                const temp3 = data.list[2].temp.day;
                const temp4 = data.list[3].temp.day;

                if (temp1 < 10) {
                    var emoji1 = String.fromCodePoint(129508); //Gants
                    document.getElementById('emoji1').innerHTML = emoji1;
                    var emoji2 = String.fromCodePoint(129509); //Manteau
                    document.getElementById('emoji2').innerHTML = emoji2;
                    var emoji3 = String.fromCodePoint(128086);//Jean
                    document.getElementById('emoji3').innerHTML = emoji3;
                }

                else if (10 < temp1 < 20) {
                    emoji1 = String.fromCodePoint(129507); //Echarpe
                    document.getElementById('emoji1').innerHTML = emoji1;
                    emoji2 = String.fromCodePoint(128085); //T-shirt
                    document.getElementById('emoji2').innerHTML = emoji2;
                    emoji3 = String.fromCodePoint(128086);//Jean
                    document.getElementById('emoji3').innerHTML = emoji3;
                }

                else if (20 < temp1) {
                    emoji1 = String.fromCodePoint(129506); //Casquette
                    document.getElementById('emoji1').innerHTML = emoji1;
                    emoji2 = String.fromCodePoint(128374); //Lunettes de soleil
                    document.getElementById('emoji2').innerHTML = emoji2;
                    emoji3 = String.fromCodePoint(129651); //Short
                    document.getElementById('emoji3').innerHTML = emoji3;
                }



                const ctx = document.getElementById('myChart').getContext('2d');
                myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ["Aujourd'hui", "Demain", "Après-Demain", "Le jour d'après"],
                        datasets: [{
                            label: 'Graphe des températures',
                            data: [temp1, temp2, temp3, temp4],
                            backgroundColor: 'rgb(0, 96, 255)',
                            borderColor: 'rgb(0, 64, 255)',
                            tension: 0.1
                        }]
                    },


                });

            })
            .catch(console.error);
    };

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    const callAPI2 = (city) => {
        // Call API

        if (city === "Paris") {
            axios
                .get(`https://api.breezometer.com/weather/v1/current-conditions?lat=48.86272&lon=2.28759&key=641f82b214e14a6fb39bf36a33bbcdb6`)
                .then((data) => {

                    // Récupère la donnée d'une API
                    const windSpeed = data.data.data.wind.speed.value;
                    const pressure = data.data.data.pressure.value;
                    const humidity = data.data.data.relative_humidity;


                    // Modifier le DOM
                    document.getElementById('vitesse-vent').innerHTML = `${windSpeed} km/h`;
                    document.getElementById('pressure').innerHTML = `${pressure} mb`;
                    document.getElementById('humidity').innerHTML = `${humidity} %`;
                })
                .catch(console.error);

            axios
                .get(`https://api.sunrise-sunset.org/json?lat=48.86272&lng=2.28759&date=today`)
                .then((data) => {

                    // Récupère la donnée d'une API
                    const sunrise = data.data.results.sunrise;
                    const sunset = data.data.results.sunset;
                    const solarnoon = data.data.results.solar_noon;
                    const daylength = data.data.results.day_length;

                    // Modifier le DOM
                    document.getElementById('sunrise').innerHTML = `Lever du soleil : ${sunrise}`;
                    document.getElementById('sunset').innerHTML = `Coucher du soleil : ${sunset}`;
                    document.getElementById('solarnoon').innerHTML = `Midi solaire : ${solarnoon}`;
                    document.getElementById('daylength').innerHTML = `Durée de la journée : ${daylength}`;

                    var heures1 = sunrise.substring(0, 1);
                    var minutes1 = sunrise.substring(2, 4);
                    var secondes1 = sunrise.substring(5, 7);

                    console.log(heures1);
                    console.log(minutes1);
                    console.log(secondes1);

                    const heure1 = heures1 * 30;
                    const minute1 = minutes1 * 6;
                    const seconde1 = secondes1 * 6;

                    document.querySelector('.heure').style.transform = `rotate(${heure1}deg)`;
                    document.querySelector('.minute').style.transform = `rotate(${minute1}deg)`;
                    document.querySelector('.seconde').style.transform = `rotate(${seconde1}deg)`;
                })
                .catch(console.error);
        }
        if (city === "Londres") {
            axios
                .get(`https://api.breezometer.com/weather/v1/current-conditions?lat=51.507351&lon=-0.127758&key=641f82b214e14a6fb39bf36a33bbcdb6`)
                .then((data) => {

                    // Récupère la donnée d'une API
                    const windSpeed = data.data.data.wind.speed.value;
                    const pressure = data.data.data.pressure.value;
                    const humidity = data.data.data.relative_humidity;

                    // Modifier le DOM
                    document.getElementById('vitesse-vent').innerHTML = `${windSpeed} km/h`;
                    document.getElementById('pressure').innerHTML = `${pressure} mb`;
                    document.getElementById('humidity').innerHTML = `${humidity} %`;
                })
                .catch(console.error);

            axios
                .get(`https://api.sunrise-sunset.org/json?lat=51.507351&lng=-0.127758&date=today`)
                .then((data) => {

                    // Récupère la donnée d'une API
                    const sunrise = data.data.results.sunrise;
                    const sunset = data.data.results.sunset;
                    const solarnoon = data.data.results.solar_noon;
                    const daylength = data.data.results.day_length;

                    // Modifier le DOM
                    document.getElementById('sunrise').innerHTML = `Lever du soleil : ${sunrise}`;
                    document.getElementById('sunset').innerHTML = `Coucher du soleil : ${sunset}`;
                    document.getElementById('solarnoon').innerHTML = `Midi solaire : ${solarnoon}`;
                    document.getElementById('daylength').innerHTML = `Durée de la journée : ${daylength}`;

                    var heures1 = sunrise.substring(0, 1);
                    var minutes1 = sunrise.substring(2, 4);
                    var secondes1 = sunrise.substring(5, 7);

                    console.log(heures1);
                    console.log(minutes1);
                    console.log(secondes1);

                    const heure1 = heures1 * 30;
                    const minute1 = minutes1 * 6;
                    const seconde1 = secondes1 * 6;

                    document.querySelector('.heure').style.transform = `rotate(${heure1}deg)`;
                    document.querySelector('.minute').style.transform = `rotate(${minute1}deg)`;
                    document.querySelector('.seconde').style.transform = `rotate(${seconde1}deg)`;

                })
                .catch(console.error);
        }
        if (city === "Madrid") {
            axios
                .get(`https://api.breezometer.com/weather/v1/current-conditions?lat=40.416775&lon=-3.703790&key=641f82b214e14a6fb39bf36a33bbcdb6`)
                .then((data) => {

                    // Récupère la donnée d'une API
                    const windSpeed = data.data.data.wind.speed.value;
                    const pressure = data.data.data.pressure.value;
                    const humidity = data.data.data.relative_humidity;


                    // Modifier le DOM
                    document.getElementById('vitesse-vent').innerHTML = `${windSpeed} km/h`;
                    document.getElementById('pressure').innerHTML = `${pressure} mb`;
                    document.getElementById('humidity').innerHTML = `${humidity} %`;
                })
                .catch(console.error);

            axios
                .get(`https://api.sunrise-sunset.org/json?lat=40.416775&lng=-3.703790&date=today`)
                .then((data) => {

                    // Récupère la donnée d'une API
                    const sunrise = data.data.results.sunrise;
                    const sunset = data.data.results.sunset;
                    const solarnoon = data.data.results.solar_noon;
                    const daylength = data.data.results.day_length;

                    // Modifier le DOM
                    document.getElementById('sunrise').innerHTML = `Lever du soleil : ${sunrise}`;
                    document.getElementById('sunset').innerHTML = `Coucher du soleil : ${sunset}`;
                    document.getElementById('solarnoon').innerHTML = `Midi solaire : ${solarnoon}`;
                    document.getElementById('daylength').innerHTML = `Durée de la journée : ${daylength}`;

                    var heures1 = sunrise.substring(0, 1);
                    var minutes1 = sunrise.substring(2, 4);
                    var secondes1 = sunrise.substring(5, 7);

                    console.log(heures1);
                    console.log(minutes1);
                    console.log(secondes1);

                    const heure1 = heures1 * 30;
                    const minute1 = minutes1 * 6;
                    const seconde1 = secondes1 * 6;

                    document.querySelector('.heure').style.transform = `rotate(${heure1}deg)`;
                    document.querySelector('.minute').style.transform = `rotate(${minute1}deg)`;
                    document.querySelector('.seconde').style.transform = `rotate(${seconde1}deg)`;

                })
                .catch(console.error);
        }
        if (city === "Moscou") {
            axios
                .get(`https://api.breezometer.com/weather/v1/current-conditions?lat=55.755871&lon=37.617680&key=641f82b214e14a6fb39bf36a33bbcdb6`)
                .then((data) => {

                    // Récupère la donnée d'une API
                    const windSpeed = data.data.data.wind.speed.value;
                    const pressure = data.data.data.pressure.value;
                    const humidity = data.data.data.relative_humidity;

                    // Modifier le DOM
                    document.getElementById('vitesse-vent').innerHTML = `${windSpeed} km/h`;
                    document.getElementById('pressure').innerHTML = `${pressure} mb`;
                    document.getElementById('humidity').innerHTML = `${humidity} %`;
                })
                .catch(console.error);

            axios
                .get(`https://api.sunrise-sunset.org/json?lat=55.755871&lng=37.617680&date=today`)
                .then((data) => {

                    // Récupère la donnée d'une API
                    const sunrise = data.data.results.sunrise;
                    const sunset = data.data.results.sunset;
                    const solarnoon = data.data.results.solar_noon;
                    const daylength = data.data.results.day_length;

                    // Modifier le DOM
                    document.getElementById('sunrise').innerHTML = `Lever du soleil : ${sunrise}`;
                    document.getElementById('sunset').innerHTML = `Coucher du soleil : ${sunset}`;
                    document.getElementById('solarnoon').innerHTML = `Midi solaire : ${solarnoon}`;
                    document.getElementById('daylength').innerHTML = `Durée de la journée : ${daylength}`;

                    var heures1 = sunrise.substring(0, 1);
                    var minutes1 = sunrise.substring(2, 4);
                    var secondes1 = sunrise.substring(5, 7);

                    console.log(heures1);
                    console.log(minutes1);
                    console.log(secondes1);

                    const heure1 = heures1 * 30;
                    const minute1 = minutes1 * 6;
                    const seconde1 = secondes1 * 6;

                    document.querySelector('.heure').style.transform = `rotate(${heure1}deg)`;
                    document.querySelector('.minute').style.transform = `rotate(${minute1}deg)`;
                    document.querySelector('.seconde').style.transform = `rotate(${seconde1}deg)`;

                })
                .catch(console.error);
        }
        if (city === "Berlin") {
            axios
                .get(`https://api.breezometer.com/weather/v1/current-conditions?lat=52.5170365&lon=13.3888599&key=641f82b214e14a6fb39bf36a33bbcdb6`)
                .then((data) => {

                    // Récupère la donnée d'une API
                    const windSpeed = data.data.data.wind.speed.value;
                    const pressure = data.data.data.pressure.value;
                    const humidity = data.data.data.relative_humidity;


                    // Modifier le DOM
                    document.getElementById('vitesse-vent').innerHTML = `${windSpeed} km/h`;
                    document.getElementById('pressure').innerHTML = `${pressure} mb`;
                    document.getElementById('humidity').innerHTML = `${humidity} %`;
                })
                .catch(console.error);

            axios
                .get(`https://api.sunrise-sunset.org/json?lat=52.5170365&lng=13.3888599&date=today`)
                .then((data) => {

                    // Récupère la donnée d'une API
                    const sunrise = data.data.results.sunrise;
                    const sunset = data.data.results.sunset;
                    const solarnoon = data.data.results.solar_noon;
                    const daylength = data.data.results.day_length;

                    // Modifier le DOM
                    document.getElementById('sunrise').innerHTML = `Lever du soleil : ${sunrise}`;
                    document.getElementById('sunset').innerHTML = `Coucher du soleil : ${sunset}`;
                    document.getElementById('solarnoon').innerHTML = `Midi solaire : ${solarnoon}`;
                    document.getElementById('daylength').innerHTML = `Durée de la journée : ${daylength}`;

                    var heures1 = sunrise.substring(0, 1);
                    var minutes1 = sunrise.substring(2, 4);
                    var secondes1 = sunrise.substring(5, 7);

                    console.log(heures1);
                    console.log(minutes1);
                    console.log(secondes1);

                    const heure1 = heures1 * 30;
                    const minute1 = minutes1 * 6;
                    const seconde1 = secondes1 * 6;

                    document.querySelector('.heure').style.transform = `rotate(${heure1}deg)`;
                    document.querySelector('.minute').style.transform = `rotate(${minute1}deg)`;
                    document.querySelector('.seconde').style.transform = `rotate(${seconde1}deg)`;
                })
                .catch(console.error);
        }
        if (city === "Rome") {
            axios
                .get(`https://api.breezometer.com/weather/v1/current-conditions?lat=41.8933203&lon=12.4829321&key=641f82b214e14a6fb39bf36a33bbcdb6`)
                .then((data) => {

                    // Récupère la donnée d'une API
                    const windSpeed = data.data.data.wind.speed.value;
                    const pressure = data.data.data.pressure.value;
                    const humidity = data.data.data.relative_humidity;

                    // Modifier le DOM
                    document.getElementById('vitesse-vent').innerHTML = `${windSpeed} km/h`;
                    document.getElementById('pressure').innerHTML = `${pressure} mb`;
                    document.getElementById('humidity').innerHTML = `${humidity} %`;
                })
                .catch(console.error);

            axios
                .get(`https://api.sunrise-sunset.org/json?lat=41.8933203&lng=12.4829321&date=today`)
                .then((data) => {

                    // Récupère la donnée d'une API
                    const sunrise = data.data.results.sunrise;
                    const sunset = data.data.results.sunset;
                    const solarnoon = data.data.results.solar_noon;
                    const daylength = data.data.results.day_length;

                    // Modifier le DOM
                    document.getElementById('sunrise').innerHTML = `Lever du soleil : ${sunrise}`;
                    document.getElementById('sunset').innerHTML = `Coucher du soleil : ${sunset}`;
                    document.getElementById('solarnoon').innerHTML = `Midi solaire : ${solarnoon}`;
                    document.getElementById('daylength').innerHTML = `Durée de la journée : ${daylength}`;

                    var heures1 = sunrise.substring(0, 1);
                    var minutes1 = sunrise.substring(2, 4);
                    var secondes1 = sunrise.substring(5, 7);

                    console.log(heures1);
                    console.log(minutes1);
                    console.log(secondes1);

                    const heure1 = heures1 * 30;
                    const minute1 = minutes1 * 6;
                    const seconde1 = secondes1 * 6;

                    document.querySelector('.heure').style.transform = `rotate(${heure1}deg)`;
                    document.querySelector('.minute').style.transform = `rotate(${minute1}deg)`;
                    document.querySelector('.seconde').style.transform = `rotate(${seconde1}deg)`;
                })
                .catch(console.error);
        }
        if (city === "New York") {
            axios
                .get(`https://api.breezometer.com/weather/v1/current-conditions?lat=40.7127281&lon=-74.0060152&key=641f82b214e14a6fb39bf36a33bbcdb6`)
                .then((data) => {

                    // Récupère la donnée d'une API
                    const windSpeed = data.data.data.wind.speed.value;
                    const pressure = data.data.data.pressure.value;
                    const humidity = data.data.data.relative_humidity;


                    // Modifier le DOM
                    document.getElementById('vitesse-vent').innerHTML = `${windSpeed} km/h`;
                    document.getElementById('pressure').innerHTML = `${pressure} mb`;
                    document.getElementById('humidity').innerHTML = `${humidity} %`;
                })
                .catch(console.error);
            axios
                .get(`https://api.sunrise-sunset.org/json?lat=40.7127281&lng=-74.0060152&date=today`)
                .then((data) => {

                    // Récupère la donnée d'une API
                    const sunrise = data.data.results.sunrise;
                    const sunset = data.data.results.sunset;
                    const solarnoon = data.data.results.solar_noon;
                    const daylength = data.data.results.day_length;

                    console.log(sunrise);

                    // Modifier le DOM
                    document.getElementById('sunrise').innerHTML = `Lever du soleil : ${sunrise}`;
                    document.getElementById('sunset').innerHTML = `Coucher du soleil : ${sunset}`;
                    document.getElementById('solarnoon').innerHTML = `Midi solaire : ${solarnoon}`;
                    document.getElementById('daylength').innerHTML = `Durée de la journée : ${daylength}`;

                    var heures1 = sunrise.substring(0, 2);
                    var minutes1 = sunrise.substring(3, 5);
                    var secondes1 = sunrise.substring(6, 9);

                    const heure1 = heures1 * 30;
                    const minute1 = minutes1 * 6;
                    const seconde1 = secondes1 * 6;


                    document.querySelector('.heure').style.transform = `rotate(${heure1}deg)`;
                    document.querySelector('.minute').style.transform = `rotate(${minute1}deg)`;
                    document.querySelector('.seconde').style.transform = `rotate(${seconde1}deg)`;

                })
                .catch(console.error);
        }
    };

    const callAPI3 = () => {
        axios
            .get(`http://api.icndb.com/jokes/random?exclude=[nerdy,explicit]`)
            .then((data) => {

                // Récupère la donnée d'une API
                const joke = data.data.value.joke;

                // Modifier le DOM
                document.getElementById('joke').innerHTML = joke;
            })
            .catch(console.error);
    }

    const callAPICreate = () => {
        axios
            .get('http://localhost:3001/index')
            .then((data) => {

                const tempHaute = data.data[0].tempHaute;
                const lieuTempHaute = data.data[0].lieuTempHaute;
                const anneeTempHaute = data.data[0].anneeTempHaute;

                const tempBasse = data.data[0].tempBasse;
                const lieuTempBasse = data.data[0].lieuTempBasse;
                const anneeTempBasse = data.data[0].anneeTempBasse;

                console.log(tempHaute);
                console.log(lieuTempHaute);

                document.getElementById('tempH').innerHTML = `Température la plus haute : ${tempHaute}°C`;
                document.getElementById('lieuTempH').innerHTML = `Lieu : ${lieuTempHaute}`
                document.getElementById('anneeTempH').innerHTML = `Année : ${anneeTempHaute}`;

                document.getElementById('tempB').innerHTML = `Température la plus basse : ${tempBasse}°C`;
                document.getElementById('lieuTempB').innerHTML = `Lieu : ${lieuTempBasse}`;
                document.getElementById('anneeTempB').innerHTML = `Année : ${anneeTempBasse}`;
            })
            .catch(console.error);
    }
    callAPI2();
    callAPI3();
    return (
        callAPI2(),
        callAPI3(),
        callAPICreate(),
        <div className="Corps">
            <div className="TitleSite">
                <h1> Quel temps fait-il dans le monde ?</h1>
            </div>
            <center>
                <GoogleMap mapContainerStyle={mapContainerStyle}
                    zoom={2}
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
                                //callAPI(marker.nameCities);
                                callAPI2(marker.nameCities);
                                callAPI3();
                                callAPICreate();
                                myChart.destroy();
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
            </center>
            <div>
                <center>
                    <div className="titreDonnee">
                        <h3>{"Données météorologiques de " + city}</h3>
                    </div>
                </center>
            </div>
            <TodayBox name={"Aujourd'hui"} />
            <div className="App-header">
                <Box name={"Demain"} />
                <Box2 name={"Après-demain"} />
                <Box3 name={"Le jour d'après"} />
            </div>
            <div className="App-header">
                <Box4 name={"Vitesse du vent"} />
                <Box5 name={"Pression"} />
                <Box7 name={"Humidité"} />
            </div>
            <div>
                <BoxSun name={"Données sur la journée (Heure UTC)"} />
                <BoxEmojis name={"Conseils pour s'habiller"} />
            </div>
            <div>
                <Box8 name={"Graphe des températures"} />
                <BoxAPICreated name={"Record des températures en France !"} />
            </div>
            <div>
                <Box6 name={"Blague du jour !"} />
            </div>
            <div>
                <Link to="/admin">
                    Pour modifier les données de l'API créée, cliquer ici
                </Link>
            </div>
        </div>
    )
};

