import React, { Component } from "react";
import './Widget.css';

class Widget extends Component {
    constructor(props){
      super(props);
      if(this.props.type === "meteo"){
        this.state = {
          title: "Météo actuelle",
          info: "Nuageux",
          temp: "2°C",
        }
      }
    }
    render() {
        return (
        <div class="widget">
            <div class="widget-header">
              <h4 class="widget-title">{this.state.title}</h4>
            </div>
            <div class="card-body">
              <div>
                <p id="day1-forecast-more-info">{this.state.info}</p>
                <div id="icon1-weather-container" ></div>
                <h3 id="day1-forecast-temp">{this.state.temp}</h3>
              </div>
            </div>
        </div>
        );
    }
}

export default Widget;