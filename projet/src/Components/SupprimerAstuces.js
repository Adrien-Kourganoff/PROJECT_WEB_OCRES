import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from "react";
import {XAxis, YAxis ,CartesianGrid, Tooltip, Legend} from 'recharts';
import {Card} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import Baton from './Baton';
import Quote from'./Quote';
import axios from 'axios';


const Astuce = props => (
  <tr>
  <div class="card">
    <div class="card-body">
  <tr>
    <td>{props.astuce.phrase}</td> 
 </tr>
    <td><input type="submit" value="Supprimer Astuce" className="btn btn-primary" onClick={() => props.onSubmit(props.astuce._id)}/></td>

  </div>
  </div>
  </tr>
)
class SupprimerAstuces extends React.Component {
    constructor(props){
        super(props);
        this.Laliste=this.Laliste.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state = {
          phrase:'',
          listeAstuces:[],
        }
      }
    
      componentDidMount() {
        axios.get('http://localhost:5000/astuces/')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                listeAstuces: response.data
              })
            }
          })
          .catch((error) => {
            console.log(error);
          })
      }


       onSubmit(id){
        axios.delete(`http://localhost:5000/astuces/`+id)
            .then(res =>console.log(res.data)); 
            {
              this.setState({
                listeAstuces: this.state.listeAstuces.filter(el=>el._id !=id)
              })
            }
        
      }
      Laliste(){
        return this.state.listeAstuces.map(currentastuce => {
          return <Astuce astuce={currentastuce} onSubmit={this.onSubmit} key={currentastuce._id}/>
        })
      }

      render() {
       return(
         <div>
           <h4>Listes des astuces</h4>
         <tbody>
           <div className="Centrer">
          {this.Laliste()}
          </div>
          </tbody>
        
          </div>
         );
       }
     }
      export default SupprimerAstuces;
   