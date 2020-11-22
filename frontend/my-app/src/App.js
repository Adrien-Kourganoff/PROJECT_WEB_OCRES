import React from 'react';
import Logo from'./unknown.png';
import Param from'./param.png';
import Dash from'./dash.png';

import './App.css';
<link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>

function App() {
  console.log(window.location.pathname); //si on peut voir l'url en haut
  var id=window.location.pathname[1] === undefined ? 0 : window.location.pathname[1]
  console.log(id)
  return (
    <div class ="container"    style={{maxWidth: "2000px"}}>
      <div class="row">
      <div class="col-sm-2" style={{fontWeight: "bold"}}>
        <header class="App-header">
        <div class="row" >
          <img src={Logo} style={{margin: "auto"}}></img>
        </div>
        <div class="row" >
          <div  class="choixEntre">
            <div class="col-sm-12">
                <a>Entreprise A</a>
            </div>
          </div>
        </div>
        <div class="row" style={{marginTop: "40%"}}>
        <div class="col-sm-2">
        <img src={Dash}></img>
          </div>
          <div class="col-sm-10">
            <a style={{color: "#FDE1DE"}} >Mon DashBoard</a>
          </div>
          
        </div>
        <div class="row" style={{marginTop: "10%"}}>
        <div class="col-sm-2">
        <img src={Param}></img>
            </div>
            <div class="col-sm-10">
              <a> Mes Paramètres</a>
            </div>
         
        </div>
      </header>
      </div>
      <div class="col-sm-10" style={{fontWeight: "bold"}}>
        <div class="row">
          <div class="col-sm-9">
              <div class="row">
                <div class="App-header">
                  <titre>Date</titre>
                </div>
              </div>
              <div class="row">
                <div class="App-header">
                  <titre>Benefice</titre>
                </div>
              </div>
              <div class="row">
                <div class="App-header">
                  <titre>Commentaires</titre>
                </div>
              </div>
              
            </div>
            <div class="col-sm-3">
            <div class="row">
                <div class="App-header">
                  <titre>To do list</titre>
                </div>
              </div>
              <div class="row">
                <div class="App-header">
                  <titre>Gains</titre>
                </div>
              </div>
              <div class="row">
                <div class="App-header">
                  <titre>Depenses</titre>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      
    
      </div>
   
     
    
  );
}

export default App;
