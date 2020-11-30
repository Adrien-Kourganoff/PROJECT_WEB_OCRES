import logo from './logo.svg';
import './App.css';
import Accueuil from './Components/Acceuil';
import Admin from './Components/Admin';
import Menu from './Components/Menu';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route} from 'react-router-dom';

class  App extends Component {
  render (){
    return (
      <BrowserRouter>
      <Menu/>
      <Route path="/Accueil" component={Accueil}/>
      <Route path="/Admin" component={Admin}/>
      </BrowserRouter>
    );
  }
  
}

export default App;
