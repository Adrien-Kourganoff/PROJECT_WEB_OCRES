import React, {useState,useEffect} from 'react';
import  {Card ,ListGroup, Row,Col,Table} from 'react-bootstrap';
import userAppointment from'./userAppointment.module.css'
import classNames from 'classnames';


import {
    DatePicker,
  } from "react-tempusdominus-bootstrap";
  

export default function UserAppointement() {



    return( 

            <Card className ="h100" >
                <Card.Header>Prendre un rendez-vous</Card.Header>
                <ListGroup variant="flush">
                        <ListGroup.Item>

                <div style={{marginBottom : "2px"}}>Choisissez une date</div>

                 <DatePicker locale="fr"/>

                <Table striped bordered hover className="disponibility" style={{marginTop :"15px"}}>
               
                <thead>
                    <tr>
                    <th style={{fontSize :"14px"}} >Heure Disponible : </th>
                    </tr>
                </thead>
               
                <tbody>
                    <tr>
                        <td>12h00</td>
                    </tr>
                    
                    <tr>
                        <td>13h00</td>
                    </tr>
                    
                    <tr>
                         <td>14h00</td>
                    </tr>
                    <tr>
                         <td>16h00</td>
                    </tr>
                </tbody>
                </Table>
            <div className="row">
                    <div className="col text-center">
                        <button style={{marginTop:"8px"}}type="button" class="btn">Choisir</button>
                   </div>
                </div>


            </ListGroup.Item>
                    </ListGroup>
            </Card>


    
        )
}
