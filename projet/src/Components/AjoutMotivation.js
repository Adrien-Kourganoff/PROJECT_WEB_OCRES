import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from "react";
import {XAxis, YAxis ,CartesianGrid, Tooltip, Legend} from 'recharts';
import {Card} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import Baton from './Baton';
import Quote from'./Quote';
import axios from 'axios';


class AjoutMotivation extends React.Component {
    constructor(props){
        super(props);
        this.onChangeQuote=this.onChangeQuote.bind(this);
        this.onChangeAuteur=this.onChangeAuteur.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state = {
          quote:'',
          auteur:'',
        }
      }
    
      componentDidMount(){
        this.setState({
          quote :"",
          auteur:"",
        })
      }
       onChangeQuote(e){
         this.setState({
            quote: e.target.value
         });
       }
       onChangeAuteur(e){
        this.setState({
           auteur: e.target.value
        });
      }

       onSubmit(e){
         e.preventDefault();
         const motivation = {
           quote: this.state.quote,
           auteur: this.state.auteur,

         }
         console.log(motivation);
         axios.post('http://localhost:5000/motivation/add', motivation)
          .then(res =>console.log(res.data));
         window.location="./Admin";
       }
       render() {
        return(
          <form onSubmit={this.onSubmit}>
      <div class="form-group">
        <label><h2>Motivation quote</h2></label>
        <div class="form-group">
        <label><h6>Auteur</h6></label>
        <input type="text" value={this.state.auteur} required className="form-control"  onChange={this.onChangeAuteur} />
        </div>
        <div class="form-group">
        <label><h6>Citation</h6></label>
        <input type="text" value={this.state.quote} required className="form-control"  onChange={this.onChangeQuote} />
        </div>
      </div>
      <div class="form-group">
        <input type="submit" value="Ajouter Citation" className="btn btn-primary"/>
      </div>
      </form>
          );
        }
      }
    
       export default AjoutMotivation;
    