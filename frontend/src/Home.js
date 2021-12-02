import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div class='title'>
            <img src="nuage.png" style={{width:50, height:50}} alt="" />
            <h1>Notre application météo</h1>
            <Link to="/map">Pour accéder à la météo, cliquer ici</Link>
        </div>
    );
};

export default Home;