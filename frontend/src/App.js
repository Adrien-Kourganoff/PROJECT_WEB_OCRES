import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Meteo from './widgets/Meteo.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Meteo/>
      </div>
    );
  }
}

export default App;
