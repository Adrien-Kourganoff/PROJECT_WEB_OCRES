import React from 'react';
import './App.css';
import { BrowserRouter , Router, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Map from './Map';
import Dashboard from './Dashboard';

const App = () => {

  return (
    
    <BrowserRouter>
      <Routes> 
        <Route path="/" exact element={<Dashboard/>} />
        <Route exact path="/map" element={<Map />} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;


