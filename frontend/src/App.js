import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Affichage from './pages/Affichage';
import Contact from './pages/Contact';

const App = () => {

  return (
    <Router>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/affichage" element={<Affichage />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>

    </Router>
    
  );
};
export default App;


