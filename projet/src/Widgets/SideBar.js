import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Component } from "react";

import {XAxis, YAxis ,CartesianGrid, Tooltip, Legend} from 'recharts';
import {Card} from 'react-bootstrap';
import './SideBar.css'

/*import img from './Kahina_blanc.jpg';
import logo from './logo.svg';*/


class SideBar extends React.Component{

    render()
{
    return(

<SideNav className="Nav"
    onSelect={(selected) => {
        // Add your code here
    }}

   /* <img src={img} class="ImageKahina" height="80px" />
      <div class="ligneblanche"> </div>*/

>


    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-child" style={ { fontSize: '1.75em'}} />
            </NavIcon>
            <NavText>
                Admin
            </NavText>
        </NavItem>

        <NavItem eventKey="Icare">
            <NavIcon>
            <i class="fa fa-child" aria-hidden="true" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                ICare
            </NavText>
        </NavItem>
         
    </SideNav.Nav>
</SideNav>
    );
}
}

export default SideBar;