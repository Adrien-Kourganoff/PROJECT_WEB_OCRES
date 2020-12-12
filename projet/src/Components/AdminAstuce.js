import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from "react";
import {XAxis, YAxis ,CartesianGrid, Tooltip, Legend} from 'recharts';
import {Card} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import Baton from './Baton';
import Quote from'./Quote';



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
      phrase :"Le plus important c'est le principal et c'est ça l'essentiel"
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
     window.location="/";
   }
   render() {
    return(
      <form onSubmit={this.onSubmit}>
  <div class="form-group">
    <label>Astuce :</label>
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
