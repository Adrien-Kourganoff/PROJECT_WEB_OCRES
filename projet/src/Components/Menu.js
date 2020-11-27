
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Component } from "react";
import {Card} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import SideBar from './SideBar';

<link
  rel="stylesheet"
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

function Menu(){
    return(
        <Row clasName="show-grid">
    <SideBar/>
</Row>
    );
}

export default Menu;