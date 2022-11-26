import React from 'react'
import './DashBoard'
import '../../App.css'

import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';

const DashBoard = () => {


    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <Topbar />
                <p> DASHBOARD</p>
            </div>
        </div>
    )
}

export default DashBoard