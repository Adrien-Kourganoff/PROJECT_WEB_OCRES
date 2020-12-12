import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from "react";
import {XAxis, YAxis ,CartesianGrid, Tooltip, Legend} from 'recharts';
import {Card} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import Baton from './Baton';
import Quote from'./Quote';
import axios from 'axios';


class SupprimerAstuces extends React.Component {
    constructor(props){
        super(props);
        this.onChangePhrase=this.onChangePhrase.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state = {
          phrase:'',
          listeAstuces:[],
        }
      }
    
      componentDidMount() {
        axios.get('http://localhost:5000/astuces')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                listeAstuces: response.data.map(phrase => phrase.phrase),
                phrase: response.data[0].phrase
              })
            }
          })
          .catch((error) => {
            console.log(error);
          })
    
      }
       onChangePhrase(e){
         this.setState({
            phrase: e.target.value
         });
       }
       onSubmit(e){
        e.preventDefault();
   
        const astuce = {
          phrase: this.state.phrase,
        }
        console.log(astuce);
        axios.delete('http://localhost:5000/astuces/',astuce.delete)
            .then(res =>console.log(res.data)); 
        
      }
      render() {
       return(
         <form onSubmit={this.onSubmit}>
     <div class="form-group">
       <label>Supprimer Astuce :</label>
       <select ref="userInput"
              required
              className="form-control"
              value={this.state.phrase}
              onChange={this.onChangePhrase}>
              {
                this.state.listeAstuces.map(function(phrase) {
                  return <option 
                    key={phrase}
                    value={phrase}>{phrase}
                    </option>;
                })
              }
          </select>
     </div>
     <div class="form-group">
       <input type="submit" value="Supprimer Astuce" className="btn btn-primary"/>
     </div>
     </form>
         );
       }
     }
   
      export default SupprimerAstuces;
   