import React from 'react';
import Box from './components/Box.js';
import Box2 from './components/Box2.js';
import Box3 from './components/Box3.js';
import axios from "axios";
import TodayBox from './components/TodayBox.js';

const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
const API_URL_ICON = "http://openweathermap.org/img/wn/";
const API_URL_DAY3 = "http://api.openweathermap.org/data/2.5/forecast/daily";

const Dashboard = ({city}) => {

  city="Paris";
    const callAPI = ({city}) => {
      // Call API
      console.log(city);
      axios
        .get(`${API_URL_DAY3}?q=Paris&cnt=4&units=metric&appid=${API_KEY}`)
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
  
    return (
    <div>
      <div>
        <h2>{city}</h2>
      </div>
      <TodayBox name={"Aujourd'hui"}/>
      <div class="App-header">
        <Box name={"Demain"}/>
        <Box2 name={"Après-demain"}/>
        <Box3 name={"Le jour d'après"}/>
      </div>
    </div>
    
    );
};

export default Dashboard;