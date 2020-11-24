import React from 'react';
//import Content from './widgets';
import './App.css';
import Containerw1 from './widgets/widget1/containerw1';
import SideBar from './widgets/navigation/sidebar';
import Infos from './widgets/info/info1';



export default function App() {
  return (

    <div id="App">

      <SideBar />
      
      <div id="page-wrap">
        <div><h1>Dashboard des Bateaux Mouches</h1></div>
        <div><h2>Voici 6 widgets d'informations :</h2></div>
        <div><Containerw1/></div>
        <div><Infos/></div>
        <div>5</div>
        <div>6</div>
      </div>

        
    </div>
  );
}

