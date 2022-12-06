import React from 'react'
import './Sidebar.css'
import {NavLink} from "react-router-dom";

const Sidebar = () => {



    return (
        <div className='Sidebar'>

            <div className='Logo'>
                <span>
                    DALY <span>PAPER.</span>
                </span>
            </div>

            <div className='NavBar'>
                <ul>
                    <NavLink to="/" >
                        <li>DASHBOARD</li>
                    </NavLink>
                    <NavLink to="/reglage" >
                        <li>Regalge</li>
                    </NavLink>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar