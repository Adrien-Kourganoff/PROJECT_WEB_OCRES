import React, { Component } from "react";
import "./Day.css";
import nuageimg from '../../img/nugae.png'
import Soleilimg from '../../img/soleil.png'

class Day extends Component {
  render() {
    const { data } = this.props;
    console.log("data", data);
    if (!data) return null;

    const { dt_txt } = data;
    const { temp } = data.main;
    const { icon, description } = data.weather[0];
    const nuage = data.clouds.all;
    const vent = data.wind.speed;
    const pluie = 12;
    console.log(vent);
    return (
      <div className="day-container">
        <p className="date" >Aujourd'hui</p>

        <div className="ImgTemp">
          <img className="immg"
            src={Soleilimg}
            alt="weather"
          />
          <strong className="temp">{Math.trunc(temp)}°</strong>
        </div>

        <div className="InfoSup">

          <div className ="duo">
          <img src={nuageimg} alt="image nuage" className="logoNuage"/>
          <p>{nuage}%</p>
          </div>

          <div className ="duo">
          <img src={nuageimg} alt="image nuage" className="logoNuage"/>
          <p>{vent} Km/h</p>
          </div>

          <div className ="duo">
          <img src={nuageimg} alt="image nuage" className="logoNuage"/>
          <p>{pluie}%</p>
          </div>

        </div>

        

      </div>
    );
  }
}

export default Day;
