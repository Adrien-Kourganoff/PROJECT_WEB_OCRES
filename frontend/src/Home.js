import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Weather App</h1>
            <Link to="/map">Dashboard</Link>
        </div>
    );
};

export default Home;