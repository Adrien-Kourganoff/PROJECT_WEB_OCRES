import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Affichage from './pages/Affichage';
import Contact from './pages/Contact';

const App = () => {

  // const [anchorE1, setAnchorE1] = React.useState(null);

  // const handleClose = () => {
  //   setAnchorE1(null);
  // };

  // const handleClick = (event) => {
  //   setAnchorE1(event.currentTarget);
  // }
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


