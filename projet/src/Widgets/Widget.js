import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import Baton from './Baton';
import Quote from'./Quote';
import './Widget.css';
import {XAxis, YAxis ,CartesianGrid, Tooltip, Legend} from 'recharts';
import Button from './Button';
import './button.css';

const Widget = () => {
  return (
<div className="content">
<div className="container-fluid">
  <div className="row">

    <div className="ol-md-4 col-sm-6 col-xs-_6 col-sm-2 ">
    <div className="card-deck">
 
   <Card style={{ width: '10rem'} }>
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

        <div className="ol-md-4 col-sm-6 col-xs-_6 col-sm-2 ">
        <div className="card-deck">
 
 
   <Card style={{ width: '10rem'} }>
   <Card.Body>
        <h4 className="title">Music</h4>
        <p className="category">Music</p>
        </Card.Body>
        </Card>
        </div>
        </div>
       
        <div class="mt-3" />

        <div className="ol-md-4 col-sm-6 col-xs-_6 col-sm-2 ">
    <div className="card-deck">
    <Card style={{ width: '10rem'} }>
      <Card.Body>
     
        <h4 className="title">Astuces</h4>
        <p className="category">Astuces</p>
      
        </Card.Body>
        </Card>
        </div>
        </div>
        <div class="mt-3" />

    <div className="ol-md-4 col-sm-6 col-xs-_6 col-sm-2 ">
    <div className="card-deck">
 
    
      <Card style={{ width: '10rem'} }>
      <Card.Body>
        <h4 className="title">Gaphique</h4>
        <p className="category">Graphique</p>
        <Baton/>
        </Card.Body>
        </Card>
        
  </div>
        </div>


<div class="mt-3" />

        <div className="ol-md-4 col-sm-6 col-xs-_6 col-sm-2 ">
        <div className="card-deck">
 
 
   <Card style={{ width: '10rem'} }>
   <Card.Body>
        <h4 className="title">Feeling</h4>
        <p className="category">Feeling</p>
        </Card.Body>
        </Card>
        </div>
        </div>
        

        <div class="mt-3" />

        <div className="ol-md-4 col-sm-6 col-xs-_6 col-sm-2 ">
        <div className="card-deck">
 
 
   <Card style={{ width: '10rem'} }>
   <Card.Body>
        <h4 className="title">Goal</h4>
        <p className="category">Goal</p>
        </Card.Body>
        </Card>
        </div>
        
        </div>
        
      </div>
      </div>
      </div>


   

     
      

  );
};

export default Widget;