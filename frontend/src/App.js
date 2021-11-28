import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Widget from './widgets/Widget.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Widget type="Météo"/>
        <Widget type="Suggestion"/>
      </div>
    );
  }
}

export default App;
