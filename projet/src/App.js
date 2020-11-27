import logo from './logo.svg';
import 'C:/Users/cybop/tutoo/src/App.css';
import Accueuil from './Components/Accueuil';
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
      <Route path="/Accueuil" component={Accueuil}/>
      <Route path="/Admin" component={Admin}/>
      </BrowserRouter>
    );
  }
  
}

export default App;
