import React, { useEffect, useState, Component } from 'react';
import './App.css';
import DisplayOnePokemon from './onePokemonStat/DisplayOnePokemon';
import GenerationPokemonStat from './generationPokemonStat/generationPokemonStat';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:5000/testAPI/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <div className="test">
          <p className="App-intro">{this.state.apiResponse}</p>
        </div>
        <div className="widget1">
          <DisplayOnePokemon />
        </div>
        <div className="widget2">
          <GenerationPokemonStat />
        </div>
      </div>
    );
  }
}

export default App;