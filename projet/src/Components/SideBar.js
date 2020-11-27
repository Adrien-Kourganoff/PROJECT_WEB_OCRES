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

<link
  rel="stylesheet "
 href="path/to/font-awesome/css/font-awesome.min.css"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
  rel="manifest" href="%PUBLIC_URL%/manifest.json"
	 rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico"
 href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" 
 integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" 
 crossorigin="anonymous"
/>


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
                <i className="fa fa-fw fa-home" style={ { fontSize: '1.75em'}} />
            </NavIcon>
            <NavText><a href="/Admin">
                Admin</a>
            </NavText>
        </NavItem>

        <NavItem eventKey="Icare">
            <NavIcon>
            <i class="fa fa-fw fa-home fa-5x" style={{ fontSize: '1.75em' }} ></i>
            </NavIcon>
            <NavText><a href="/Accueuil">
                ICare</a>
            </NavText>
        </NavItem>
         
    </SideNav.Nav>
</SideNav>
    );
}
}

export default SideBar;
