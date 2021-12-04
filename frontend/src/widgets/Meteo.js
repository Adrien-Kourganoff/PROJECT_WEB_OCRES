import React, {Component} from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

// Clé api
const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
// Url API
const API_URL = "https://api.openweathermap.org/data/2.5/forecast/daily";


class Meteo extends Component {
    constructor(props){
        super(props);
        let city;

        if(this.props.city){
            city = this.props.city;
        }else{
            city = "London";
        }
        this.state = {
            city: city,
            info: "Nuageux",
            temp: "2°C",
            fiveDays: [],
            request: false,
            refresh: true,
        }
    }

    useAPI(){
        fetch(`${API_URL}?q=${this.state.city}&units=metric&appid=${API_KEY}`)
        .then(res => res.json())
        .then((data) =>{
            let stats = [{name: 'Today', uv: 0, pv: 2400, amt: 2400},
                {name: 'Tomorrow', uv: 0, pv: 2400, amt: 2400},
                {name: '3th day', uv: 0, pv: 2400, amt: 2400},
                {name: '4th day', uv: 0, pv: 2400, amt: 2400},
                {name: '5th day', uv: 0, pv: 2400, amt: 2400}]
            for (let i = 0; i<5; i ++){
                stats[i].uv = data.list[i].temp.day;
            }
            this.setState({
                info: data.list[0].weather[0].description,
                temp: data.list[0].temp.day + "°C",
                fiveDays: stats,
                request: true,
                refresh: false,
            });
        },
        (error) =>{
            console.error(error);
        })
    }

    render(){
        if(this.state.refresh){
            this.useAPI();
        }
        
        if(this.state.request){
            return(
                <div className="Meteo">
                    <h4 className="widget-title">Météo</h4>
                    <p>{this.state.city}</p>
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
                    <p>Can't find anything for {this.state.city}</p>
                </div>
            );
        }
        
    }
}

export default Meteo;
