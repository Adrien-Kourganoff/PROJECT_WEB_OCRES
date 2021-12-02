import React, {useState,useEffect} from 'react';
import  {Card ,ListGroup, Row,Col,Table} from 'react-bootstrap';
import UserAppointment from'./UserAppointment.module.css'
import classNames from 'classnames';
import axios from 'axios';
import {
    DatePicker,
  } from "react-tempusdominus-bootstrap";
  

export default function UserAppointement() {


    const [dateSelected, setDateSelected] = useState(new Date());
    const [meetingsRes, setmeetingsRes] = useState([]);


var dateActuelle = new Date;

useEffect(() => {
    if(dateSelected.length!=0)
    {
        showDisponibilityByDate();
        console.log(meetingsRes);
    }
    else {
        console.log("pas de date select")
    }

},[dateSelected]);

const showDisponibilityByDate = async () => {

    console.log(dateSelected);

    const response = await axios.get('http://localhost:1337/meetings/getMeetingsByDate', {
        params: {
            date: dateSelected.toISOString(),
          }    
    })
    .catch((error) => console.log(error.resp));
    setmeetingsRes(response);
  };


function getSelectedDate(selectedDate)
{
    //console.log(selectedDate);
}

    return( 

            <Card className ="h100" >
                <Card.Header>Prendre un rendez-vous</Card.Header>
                <ListGroup variant="flush">
                        <ListGroup.Item>

                <div style={{marginBottom : "2px"}}>Choisissez une date</div>

                 <DatePicker 
                 locale="fr"
                 onChange={ e => {
                       setDateSelected(e.date._d);
                       getSelectedDate(e.date._d)
                      }
            
            
                }
                 />

        <div className={classNames(UserAppointment.myCustomScrollbar,UserAppointment.tableWrapperScrollY)}>
        <Table striped bordered hover className="disponibility" style={{marginTop :"15px"}}>
               
                <thead>
                    <tr>
                    <th style={{fontSize :"14px"}} >Heure Disponible : </th>
                    </tr>
                </thead>
               
                <tbody className="tbodyColor"> 
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
         </div>
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
