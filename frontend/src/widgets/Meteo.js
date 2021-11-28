import React, {Component} from "react";
//import axios from '@https://unpkg.com/axios/dist/axios.min.js';

// Clé api
const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
// Url API
const API_URL = "https://api.openweathermap.org/data/2.5/weather";


class Meteo extends Component {
    constructor(props){
        super(props);
        this.state = {
            city: "Paris",
            info: "Nuageux",
            temp: "2°C",
            isLoaded: false,
            error: null,
        }
    }

    useAPI(){
        fetch(`${API_URL}?q=${this.state.city}&units=metric&appid=${API_KEY}`)
        .then(res => res.json())
        .then((data) =>{
            this.setState({
                info: data.weather[0].description,
                temp: data.main.temp + "°C",
                isLoaded: true,
            });
        },
        (error) =>{
            console.error(error);
        })
    }

    /*fetchInfos(){
        return axios
        .get(`${API_URL}?q=${this.city}&units=metric&appid=${API_KEY}`, {
          crossdomain: true
        })
    }

    setInfos(){
        this.fetchInfos().then(function(response){
            const data = response.data;
            this.setState({
                info: data.weather[0].description,
                temp: data.main.temp + "°C",
            })
        })
        .catch(function(error){
            console.error(error);
        });
    }*/

    render(){
        //this.setInfos();
        this.useAPI();

        return(
            <div>
                <p id="day1-forecast-more-info">{this.state.info}</p>
                <div id="icon1-weather-container" ></div>
                <h3 id="day1-forecast-temp">{this.state.temp}</h3>
              </div>
        );
    }
}

export default Meteo;