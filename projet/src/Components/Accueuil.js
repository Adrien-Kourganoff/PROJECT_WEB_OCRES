import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Component } from "react";
import Widget from './Widget';
import {XAxis, YAxis ,CartesianGrid, Tooltip, Legend,ResponsiveContainer} from 'recharts';
import {Card} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import Baton from './Baton';
import Quote from'./Quote';
import './Widget.css';
import Button from './Button';
import './button.css';
import Astuce from './Astuce';
import './Astuce.css';
import ToDoList from './ToDoList';
import Digital from './Digital';
import Audio from './Audio';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash,faHome,faUser,faMusic,faHeadphones} from '@fortawesome/free-solid-svg-icons';


const Accueuil =() => {
    return (
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

export default Accueuil;