import React from 'react'
import './DashBoard'
import '../../App.css'
import '../Meteo/Forecast'

import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import Forecast from '../Meteo/Forecast';

const DashBoard = () => {


    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <div className='main'>
                    <Topbar />
                    <div className='widget'>
                        <Forecast />
                        <Forecast />
                        <Forecast />
                    </div>
                   

                </div>

            </div>
        </div>
    )
}

export default DashBoard