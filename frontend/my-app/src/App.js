import React from 'react';
import logo from './logo.svg';
import './App.css';
<link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>

function App() {
  console.log(window.location.pathname); //si on peut voir l'url en haut
  var id=window.location.pathname[1] === undefined ? 0 : window.location.pathname[1]
  console.log(id)
  return (
    <div class ="container">
      <header class="App-header">
      
      <p><a>photo de profil    </a><a>Dashboard     </a>
      <a>Ma page</a></p>
      </header>
    <div class="row" style={{marginTop:"-3%"}}>
    <div class="col-sm-1">
      </div>
      <div class="col-sm-10">
        <contain>
          <p>mon agenda, 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19</p>
        </contain>
      </div>
      <div class="col-sm-1">
      </div>
    </div>
    <div class="row">
      <div class="col-sm-10 col-xs-10">
      <contain><p>benefices<br></br>
      de<br></br>entreprise<br></br>benefices<br></br>
      de<br></br>entreprise</p> </contain>
      </div>
      <div class="col-sm-2 col-xs-2">
      <contain>taches</contain>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
      <contain>gains</contain>
      </div>
      <div class="col-sm-6">
      <contain>depenses</contain>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
      <contain>commentaires (faire deux profils qu'on pourra changer en haut)</contain>
      </div>
    </div>
      </div>
   
     
    
  );
}

export default App;
