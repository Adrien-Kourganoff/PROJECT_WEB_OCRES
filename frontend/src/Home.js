import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import nuage from './images/nuage.png';

const Home = () => {
    return (
        <div className='title'>
            <img alt="meteo" src={nuage} style={{width:80, height:80}, {marginBottom:0}} />
            <h1> Notre application météo</h1>
            <Link to="/map">Pour accéder à la météo, cliquer ici</Link>
        </div>
    );
};

export default Home;