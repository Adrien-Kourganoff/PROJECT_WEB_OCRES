import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Component } from "react";

import {XAxis, YAxis ,CartesianGrid, Tooltip, Legend,ResponsiveContainer} from 'recharts';
import {Card} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import Baton from './Baton';
import Quote from'./Quote';

import Astuce from './Astuce';
import './Astuce.css';
import ToDoList from './ToDoList';
import Digital from './Digital';
import Audio from './Audio';
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

    
      <Container maxWidth>
        <Grid container spacing={4}>


        <Grid item lg={5} sm={6} md={5} xs={12}>
        <h4 className="goal">MOTIVATION</h4>
        <Quote/>
        </Grid>
        
     
        <Grid item lg={5} sm={6} md={5} xs={12}>
        <h4 className="graphique">GRAPHIQUE</h4>
        <Baton/>

      <main>
        <ResponsiveContainer width="100%"  >
      <Container>
        <Row clasName="show-grid">
      
    <Col md={6}>
    <div className="card-deck">
   <Card style={{ width: '10px'},{ height: '300px'} }>
   <Card.Body>
        <h4 className="motivation">Motivation</h4>
        <Quote/>
        
        </Card.Body>
        </Card>
        
        </div> 
        </Col>
        <div class="mt-3" />
    <Col md={6}>
    <div className="card-deck">
 
    
      <Card style={{ width: '300px'},{ height: '300px'} }>
      <Card.Body>
        <h4 className="graphique">Graphique</h4>

        <form class="form-inline">
        <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Notez votre du jour humeur sur 8</label>
  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
    <option selected>Choose...</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
  </select>
  <button type="submit" class="btn btn-primary my-1">Submit</button>
  </form>

        
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

      

        <Grid item lg={5} sm={6} md={5} xs={12}></Grid>
      <Audio/>
  
  </Grid>
  </Container>

        <Baton/>
        </Card.Body>
        </Card>
        
  </div>
        </Col>


<div class="mt-3" />
<Col md={6}>
    <div className="card-deck">
    <Card className="flip-card"style={{ width: '300px'},{ height: '300px'} }>
      <Card.Body >
        <Astuce/>
        </Card.Body>
        </Card>
        </div>
        </Col>
        <div class="mt-3" />


        <Col md={6}>
        <div className="card-deck">
 
 
   <Card style={{ width: '300px'},{ height: '300px'} }>
   <Card.Body>
        <h4 className="feeling">CLOCK</h4>
        <Digital/>
        </Card.Body>
        </Card>
        </div>
        </Col>
        

        <div class="mt-3" />
        <Col md={6}>
        <div className="card-deck">
 
   <Card style={{ width: '300px'},{ height: '170px'} }>
   <Card.Body>
        <h4 className="goal">Goal of the day</h4>
        <ToDoList/>
        </Card.Body>
        </Card>
        </div>
        
        </Col>

      </Row>
      <Audio/>
      
      </Container>
      </ResponsiveContainer>
      </main>

      
    )
}

export default Accueil;