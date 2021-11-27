import React, { Component } from "react";
import './Widget.css';

class Widget extends Component {
    /*constructor(props){
        super(props);
    }*/
    render() {
        return (
        <div class="widget">
            <div class="widget-header">
              <h4 class="widget-title">Météo Actuelle</h4>
            </div>
            <div class="card-body">
              <h2 id="day1-forecast-main" class="card-title">
              </h2>
              <div>
                <p id="day1-forecast-more-info">Nuageux</p>
                <div id="icon1-weather-container" ></div>
                <h3 id="day1-forecast-temp">2°C</h3>
              </div>
            </div>
        </div>
        );
    }
}

export default Widget;