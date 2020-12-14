import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Component } from "react";
import Son from './Son.js';
import {XAxis, YAxis ,CartesianGrid, Tooltip, Legend,ResponsiveContainer} from 'recharts';
import {Card} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import Baton from './Baton';
import Quote from'./Quote';
import Astuce from './Astuce';
import './Astuce.css';
import ToDoList from './ToDoList';
import Digital from './Digital';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash,faHome,faUser,faMusic,faHeadphones} from '@fortawesome/free-solid-svg-icons';
import { Grid } from '@material-ui/core';
import SideBar from './SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';


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


const Accueil =() => {
    return (
    <div className="Alpha">
      <Container maxWidth>
        <Grid container spacing={4}>


        <Grid item lg={5} sm={6} md={5} xs={12}>
        <h4 className="goal">MOTIVATION</h4>
        <Quote/>
        </Grid>
     
        <Grid item lg={5} sm={6} md={5} xs={12}>
        <h4 className="graphique">GRAPHIQUE</h4>
        <Baton/>
        </Grid>

        <Grid item lg={5} sm={6} md={5} xs={12}>
        <h4 className="feeling">CLOCK</h4>
        <Digital/>
       </Grid>
      
       <Grid item lg={5} sm={6} md={5} xs={12}>
        <h4 className="feeling">ASTUCES</h4>
        <Astuce/>
        </Grid>
        
       <Grid item lg={5} sm={6} md={5} xs={12}>
        <h4 className="goal">GOAL OF THE DAY</h4>
        <ToDoList/>
      </Grid>

      

        <Grid item lg={5} sm={6} md={5} xs={12}>
        <Son/>
        </Grid>
  </Grid>
  </Container>
  </div>

      
    )
}

export default Accueil;