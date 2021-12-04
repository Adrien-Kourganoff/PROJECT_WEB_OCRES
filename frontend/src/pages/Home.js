import React, { Component } from 'react';
import './Home.css';

import Meteo from '../widgets/Meteo.js';
import Suggestion from '../widgets/Suggestion.js';
import Makeup from "../widgets/Makeup.js";
import Nasa from "../widgets/Nasa.js";
import Rates from "../widgets/Rates.js";


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="grid-meteo">
          <Meteo/>
        </div>
        <div className="grid-nasa">
          <Nasa/>
        </div>
        <div className="grid-rates">
          <Rates/>
        </div>
        <div className="grid-suggestions">
          <Suggestion/>
        </div>
        <div className="grid-films">Films</div>
        <div className="grid-shopping">
          <Makeup/>
        </div>
      </div>
    );
  }
}

export default Home;