import React from 'react';
import Graphs from '../components/galerie';
import Navigation from '../components/navigation';
import "../styles/settings.css";

function Galerie() {
    return (
      <div className="App">
        <Navigation/>
        <header className="Page">
           <Graphs/>
        </header>
      </div>
    );
}
  
export default Galerie;