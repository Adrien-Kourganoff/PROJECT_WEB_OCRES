import React, { Component } from 'react';
import './App.css';
import Widget from './widgets/Widget.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Widget type = "Météo"/>
      </div>
    );
  }
}

export default App;
