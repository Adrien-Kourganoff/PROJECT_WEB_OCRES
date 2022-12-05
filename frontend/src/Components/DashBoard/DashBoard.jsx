import React from 'react'
import './DashBoard'
import '../../App.css'
import '../Meteo/Forecast'

import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import Forecast from '../Meteo/Forecast';
import NbaAPI from '../NBA/NbaAPI';
import CryptoAPI from '../Crypto/CryptoAPI';
import GrapheCrypto from '../Crypto/GrapheCrypto'

function DashBoard() {


    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <div className='main'>
                    <Topbar />
                    <div className='widget'>
                        {/* <Forecast /> */}
                        {/* <NbaAPI /> */}
                        {/* <CryptoAPI /> */}
                        <GrapheCrypto />
                    </div>


                </div>

            </div>
        </div>
    );
}

export default DashBoard