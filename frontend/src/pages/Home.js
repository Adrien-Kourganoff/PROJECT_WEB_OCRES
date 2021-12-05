import React, { Component } from 'react';
import './Home.css';

import Meteo from '../widgets/Meteo.js';
import Suggestion from '../widgets/Suggestion.js';
import Makeup from "../widgets/Makeup.js";
import Nasa from "../widgets/Nasa.js";
import Rates from "../widgets/Rates.js";


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      city: this.props.city,

      nasa_parameters: this.props.nasa_parameters,

      rates_parameters: this.props.rates_parameters,

      makeup_parameters: this.props.makeup_parameters,
    }
  }

  render() {
    return (
      <div className="Home">
        <div className="grid-meteo">
          <Meteo city={this.state.city}/>
        </div>
        <div className="grid-nasa">
          <Nasa date={this.state.nasa_parameters}/>
        </div>
        <div className="grid-rates">
          <Rates currencies={this.state.rates_parameters}/>
        </div>
        <div className="grid-suggestions">
          <Suggestion/>
        </div>
        <div className="grid-films">Films</div>
        <div className="grid-shopping">
          <Makeup parameters = {this.state.makeup_parameters}/>
        </div>
      </div>
    );
  }
}

export default Home;
