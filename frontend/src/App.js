import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
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
        <div className="navbar navbar-expand-sm navbar-light navbar">
          <a className="navbar-brand" href="/">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt=""/>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link btn btn-ghost"href="/settings">Settings </a>
              </li>
            </ul>
          </div>
        </div>
        <div className = "routes_place">
          <Routs/>
        </div>
      </div>
    );
  }
}

export default App;
