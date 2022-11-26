import React from 'react'
import './Reglage'
import '../../App.css'
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';


const Reglage = () => {


    return (

        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <Topbar />
            </div>
        </div>

    )
}

export default Reglage