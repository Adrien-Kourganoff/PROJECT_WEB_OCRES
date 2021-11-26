import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Router, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Map from './Map';
import Dashboard from './Dashboard';

const App = () => {

   const [anchorE1, setAnchorE1] = React.useState(null);

   const handleClose = () => {
     setAnchorE1(null);
   };

   const handleClick = (event) => {
    setAnchorE1(event.currentTarget);
  }
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


