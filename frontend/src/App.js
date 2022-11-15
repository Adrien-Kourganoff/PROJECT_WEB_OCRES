import React from 'react';
import Horloge from './components/horloge'
import Welcome from './components/welcome'

import './App.css';
import './components/horloge';


function App() {
  return (
    <div>

      <div className="Welcome">
        Bienvenue sur SongBox
      </div>

      <div className="Horloge">
        {/*afficher l'horloge  */}
        <Horloge />
      </div>

      <div className="Hello">
        <Welcome />
      </div>

    </div>
  );
}

export default App
