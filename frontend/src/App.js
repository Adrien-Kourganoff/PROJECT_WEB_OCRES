import React, { Component } from 'react';
import './App.css';
import Widget from './widgets/Widget.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="grid-meteo">
          <Widget type = "Météo"/>
        </div>
        <div className="grid-stats">Stats</div>
        <div className="grid-mail">Mail</div>
        <div className="grid-suggestions">
          <Widget type="Suggestion"/>
        </div>
        <div className="grid-musique">Musique</div>
        <div className="grid-shopping">
          <Widget type="Makeup"/>
        </div>
      </div>
    );
  }
}

export default App;
