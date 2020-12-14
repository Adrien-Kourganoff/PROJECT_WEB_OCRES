import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from "react";
import {XAxis, YAxis ,CartesianGrid, Tooltip, Legend} from 'recharts';
import {Card} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import Baton from './Baton';
import Quote from'./Quote';
import axios from 'axios';


const Motivation = props => (
  <tr>
  <div class="card">
    <div class="card-body">
  <tr>
    <h6>Auteur</h6>
    <p>{props.motivation.auteur}</p> 
 </tr>
 <tr>
   <h6>Citation</h6>
    <p>{props.motivation.quote}</p> 
 </tr>
    <td><input type="submit" value="Supprimer Citation" className="btn btn-primary" onClick={() => props.onSubmit(props.motivation._id)}/></td>

  </div>
  </div>
  </tr>
)
class SupprimerMotivation extends React.Component {
    constructor(props){
        super(props);
        this.Laliste=this.Laliste.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state = {
          auteur:'',
          quote:'',
          listeMotivation:[],
        }
      }
    
      componentDidMount() {
        axios.get('http://localhost:5000/motivation/')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                listeMotivation:response.data
              })
            }
          })
          .catch((error) => {
            console.log(error);
          })
      }


       onSubmit(id){
        axios.delete(`http://localhost:5000/motivation/`+id)
            .then(res =>console.log(res.data)); 
            {
              this.setState({
                listeMotivation: this.state.listeMotivation.filter(el=>el._id !=id)
              })
            }
      }
      Laliste(){
        return this.state.listeMotivation.map(currentmotivation => {
          return <Motivation motivation={currentmotivation} onSubmit={this.onSubmit} key={currentmotivation._id}/>
        })
      }

      render() {
       return(
         <div>
           <h4>Listes des citations</h4>
         <tbody>
           <div className="Centrer">
          {this.Laliste()}
          </div>
          </tbody>
          </div>
         );
       }
     }
      export default SupprimerMotivation;
   