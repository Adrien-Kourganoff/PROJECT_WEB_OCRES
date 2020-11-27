import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './Kahina_blanc.jpg';

import React from 'react';
import { Component } from "react";
import Widget from './Widgets/Widget';
import {XAxis, YAxis ,CartesianGrid, Tooltip, Legend} from 'recharts';
import {Card} from 'react-bootstrap';
import Baton from './Widgets/Baton';
import Quote from'./Widgets/Quote';
import './Widgets/Widget.css';
import Button from './Widgets/Button';
import './Widgets/button.css';


<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>

function App() {
  return (

<div>
<aside>
<div class="container">
        
        <div class="wrapper">
  <div className="row">

  <div className=" col-2">
    <div className="card-deck"></div>
      <div class="Colonne">
      <img src={img} class="ImageKahina" height="80px" />
      <div class="ligneblanche"> </div>
      <div class="Boutons">
      <a href="#"><button type="button" class="button" >I'Care </button></a>
      </div>
      <a href="#"><button type="button" class="button"> Page Admin</button></a>
      </div>
      </div>
</div>
</div>
</div>
</aside>

<main>
<div className="container">
<div className="row">
    <div className=" col-md-4 col-sm-6 col-xs-_6 col-sm-2 ">
    <div className="card-deck">
 
   <Card style={{ width: '10px'} }>
   <Card.Body>
        <h4 className="title">Motivation</h4>
        <p className="category">Motivation</p>
        <Quote/>
        <Button>New Quote</Button>
        </Card.Body>
        </Card>
        </div>
        </div>
     
        <div class="mt-3" />

        <div className=" col-md-4 col-sm-6 col-xs-_6 col-sm-2 ">
        <div className="card-deck">
 
 
   <Card style={{ width: '10px'} }>
   <Card.Body>
        <h4 className="title">Music</h4>
        <p className="category">Music</p>
        </Card.Body>
        </Card>
        </div>
        </div>
       
        <div class="mt-3" />

        <div className=" col-md-4 col-sm-6 col-xs-_6 col-sm-2 ">
    <div className="card-deck">
    <Card style={{ width: '10px'} }>
      <Card.Body>
     
        <h4 className="title">Astuces</h4>
        <p className="category">Astuces</p>
      
        </Card.Body>
        </Card>
        </div>
        </div>
        <div class="mt-3" />

    <div className=" col-md-4 col-sm-6 col-xs-_6 col-sm-2 ">
    <div className="card-deck">
 
    
      <Card style={{ width: '10px'} }>
      <Card.Body>
        <h4 className="title">Gaphique</h4>
        <p className="category">Graphique</p>
        <Baton/>
        </Card.Body>
        </Card>
        
  </div>
        </div>


<div class="mt-3" />

        <div className=" col-md-4 col-sm-6 col-xs-_6 col-sm-2 ">
        <div className="card-deck">
 
 
   <Card style={{ width: '10px'} }>
   <Card.Body>
        <h4 className="title">Feeling</h4>
        <p className="category">Feeling</p>
        </Card.Body>
        </Card>
        </div>
        </div>
        

        <div class="mt-3" />

        <div className=" col-md-4 col-sm-6 col-xs-_6 col-sm-2 ">
        <div className="card-deck">
 
 
   <Card style={{ width: '10px'} }>
   <Card.Body>
        <h4 className="title">Goal</h4>
        <p className="category">Goal</p>
        </Card.Body>
        </Card>
        </div>
        
        </div>
        
      </div>
      </div>
      </main>


   </div>
  );
}

export default App;
