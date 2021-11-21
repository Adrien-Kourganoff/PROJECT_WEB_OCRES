import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Affichage from './pages/Affichage';

const App = () => {
  return (
    <Router>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/affichage" element={<Affichage />} />
      </Routes>

    </Router>
  );
}
export default App;


