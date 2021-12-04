import React, {Component} from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

// Clé api
const API_KEY = "b59fd36e1b27dbeb2246876f9a15bac5";
// Url API
const API_URL = "https://api.openweathermap.org/data/2.5/";


class AltMeteo extends Component {
    constructor(props){
        super(props);
        this.state = {
            city: "Paris",
            info: "Nuageux",
            temp: "2°C",
            lon: "0",
            lat: "0",
            fiveDays: [],
            day: false,
            week: false,
        }
    }

    dayAPI(){
        fetch(`${API_URL}find?q=${this.state.city}&units=metric&appid=${API_KEY}`)
        .then(res => res.json())
        .then((data) =>{/*
            let stats = [{name: 'Today', uv: 0, pv: 2400, amt: 2400},
                {name: 'Tomorrow', uv: 0, pv: 2400, amt: 2400},
                {name: '3th day', uv: 0, pv: 2400, amt: 2400},
                {name: '4th day', uv: 0, pv: 2400, amt: 2400},
                {name: '5th day', uv: 0, pv: 2400, amt: 2400}]
            for (let i = 0; i<5; i ++){
                stats[i].uv = data.list[i].temp.day;
            }*/
            this.setState({
                info: data.list[0].weather[0].description,
                temp: data.list[0].main.temp + "°C",
                lon: data.list[0].coord.lon,
                lat: data.list[0].coord.lat,
                //fiveDays: stats,
                day: true,
            });
        },
        (error) =>{
            console.error(error);
        })
    }

    weekAPI(){
        fetch(`${API_URL}onecall?lat=${this.state.lat}&lon=${this.state.lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${API_KEY}`)
        .then(res => res.json())
        .then((data) =>{
            let stats = [{name: 'Today', uv: 0, pv: 2400, amt: 2400},
                {name: 'Tomorrow', uv: 0, pv: 2400, amt: 2400},
                {name: 'Fri', uv: 0, pv: 2400, amt: 2400},
                {name: 'Sat', uv: 0, pv: 2400, amt: 2400},
                {name: 'Sun', uv: 0, pv: 2400, amt: 2400}]
            for (let i = 0; i<5; i ++){
                stats[i].uv = data.daily[i].temp.day;
            }
            this.setState({
                fiveDays: stats,
                week: true,
            });
        },
        (error) =>{
            console.error(error);
        })
    }

    render(){
        this.dayAPI();
        this.weekAPI();

        if(this.state.day){
            return(
                <div className="Meteo">
                    <h4 className="widget-title">Météo</h4>
                    <p id="weather_description">{this.state.info}</p>
                    <h3 id="weather_temp">{this.state.temp}</h3>
                    <div className="temp_chart">
                        <LineChart width={600} height={300} data={this.state.fiveDays} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                        </LineChart>
                    </div>
                  </div>
            );
        }
        else{
            return(
                <div className="Meteo">
                    <h4 className="widget-title">Météo</h4>
                    <p>Can't find anything...</p>
                </div>
            );
        }
        
    }
}

export default AltMeteo;