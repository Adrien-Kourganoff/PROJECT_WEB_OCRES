import React from 'react';
import Horloge from './components/horloge'
import Welcome from './components/welcome'

import './App.css';


function App() {
  return (
    <div className="App">
      Bienvenue sur SongBox

      /*afficher l'horloge*/
      <Horloge />
      <Welcome />
    </div>
  );
}

export default App;
