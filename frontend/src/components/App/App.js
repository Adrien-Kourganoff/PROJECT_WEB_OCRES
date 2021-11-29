import React, {useState} from 'react';
import './App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Header from '../Header/Header';
import Widgets from '../../pages/Widgets/Widgets';

function App() {

  return (
    <div>
      <Header/>
    <div Container fluid className="App">  

       <Widgets/>
    
    </div> </div>
  );
}
export default App;
