import React from 'react'
import './DashBoard'
import '../../App.css'
import '../Meteo/Forecast'

import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import Forecast from '../Meteo/Forecast';
import NbaAPI from '../NBA/NbaAPI';
import CryptoAPI from '../Crypto/CryptoAPI';
<<<<<<< HEAD
import GrapheCrypto from '../Crypto/GrapheCrypto'
import NewsAPI from '../News/NewsAPI';

=======
>>>>>>> parent of da60ed5 (SwitchOrdiRyan)

function DashBoard() {


    return (
       
        
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <div className='main'>
                    <Topbar />
                    <div className='widget'>
<<<<<<< HEAD
                        {/* <Forecast /> */}
                        {/* <NbaAPI /> */}
                        {/* <CryptoAPI /> */}
                        <GrapheCrypto />
                        <CryptoAPI />
                        <NewsAPI />
=======
                        <Forecast />
                        <NbaAPI />
                        <CryptoAPI />
>>>>>>> parent of da60ed5 (SwitchOrdiRyan)
                    </div>


                </div>

            </div>
        </div>
    );
}

export default DashBoard