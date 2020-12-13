import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from "react";
import {XAxis, YAxis ,CartesianGrid, Tooltip, Legend} from 'recharts';
import {Card} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import Baton from './Baton';
import Quote from'./Quote';
import axios from 'axios';


class AdminAstuce extends React.Component {
constructor(props){
    super(props);
    this.onChangePhrase=this.onChangePhrase.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.state = {
      phrase:'',
    }
  }

  componentDidMount(){
    this.setState({
      phrase :""
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
     axios.post('http://localhost:5000/astuces/add', astuce)
      .then(res =>console.log(res.data));
     window.location="./Admin";
   }
   render() {
    return(
      <form onSubmit={this.onSubmit}>
  <div class="form-group">
    <label><h2>Astuces</h2></label>
    <h6>Inserez l'astuce à ajouter</h6>
    <input type="text" value={this.state.phrase} required className="form-control"  onChange={this.onChangePhrase} />
  </div>
  <div class="form-group">
    <input type="submit" value="Ajouter Astuce" className="btn btn-primary"/>
  </div>
  </form>
      );
    }
  }

   export default AdminAstuce;
