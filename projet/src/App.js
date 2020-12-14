import logo from './logo.svg';
import './App.css';
import Accueil from './Components/Accueil';
import Admin from './Components/Admin';
import Menu from './Components/Menu';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route} from 'react-router-dom';
import { Grid } from 'grommet';



class  App extends Component {
  render (){
    return (
      <BrowserRouter>
      <div className="Page">
      <Menu/>
      <Route path="/Accueil" component={Accueil}/>
      <Route path="/Admin" component={Admin}/>
      </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
