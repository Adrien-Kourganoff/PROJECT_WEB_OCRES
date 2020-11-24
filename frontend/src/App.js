import React from 'react';
//import Content from './widgets';
import './App.css';
import Containerw1 from './widgets/widget1/containerw1';
import SideBar from './widgets/navigation/sidebar';


export default function App() {
  return (
    <div id="App">
      <SideBar />
      <div id="page-wrap">
        <h1>Dashboard des Bateaux Mouches</h1>
        <h2>Voici 6 widgets d'informations :</h2>

          <div class="widget1">
            <Containerw1/>
          </div>
      </div>

    </div>
  );
}

