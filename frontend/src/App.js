import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Routs from './Routs.js';
//import Widget from './widgets/Widget.js';

/*import Meteo from './widgets/Meteo.js';
import Suggestion from './widgets/Suggestion.js';
import Makeup from "./widgets/Makeup.js";
import Nasa from "./widgets/Nasa.js";
import Rates from "./widgets/Rates.js";*/


class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
        <div className = "routes_place">
          <Routs/>
        </div>
      </div>
    );
  }
}

export default App;
