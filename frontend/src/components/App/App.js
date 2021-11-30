import React, {useState} from 'react';
import './App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Header from '../Header/Header';
import Widgets from '../../pages/Widgets/Widgets';
import AdminControl from '../../pages/AdminControl/AdminControl';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {

  return (
    <div>
    
    <Header/>
   
    <div Container fluid className="App">  
        <Routes>
             <Route path="/" element={<Widgets/>} />
             <Route path="/AdminControl" element={<AdminControl/>} />
       </Routes>

    </div> 

    </div>
  );
}
export default App;
