import React from 'react'
import ReactDOM from 'react-dom';
import {Component} from 'react';
import {withRouter} from 'react-router';
import { BarChart, Bar, XAxis, YAxis ,CartesianGrid, Tooltip, Legend} from 'recharts';
import './Baton.css';
import {Card} from 'react-bootstrap';
import axios from 'axios';

class Baton extends React.Component {
    constructor(props){
    super(props);
    this.OnChangeJour=this.OnChangeJour.bind(this);
    this.OnSubmit=this.OnSubmit.bind(this);
    this.OnChangeHappiness=this.OnChangeHappiness.bind(this);
    this.state = {
      jour:"",
      id:"",
      happiness:0,
      amt:20,
    }
    }

    OnChangeJour(e) {
      this.setState ({
      jour:e.target.value
      })
      if(this.state.jour=="Lu"){
        this.setState({
            id:"5fd6a3713937ca3314b6731f"
        })
      }
      if(this.state.jour=="Ma"){
          this.setState({
            id:"5fd6a3783937ca3314b67320"
        })
      }
      if(this.state.jour=="Me"){
        this.setState({
            id:"5fd6a37f3937ca3314b67321"
        })
     }
     if(this.state.jour=="Je"){
        this.setState({
            id:"5fd6a3893937ca3314b67322"
        })
    }
    if(this.state.jour=="Ve"){
        this.setState({
            id:"5fd6a3923937ca3314b67323"
        })
    }
    if(this.state.jour=="Sa"){
        this.setState({
            id:"5fd6a3993937ca3314b67324"
        })
    }
    if(this.state.jour=="Di"){
        this.setState({
            id:"5fd6a39c3937ca3314b67325"
        })
    }
    console.log(this.state.id)
    }

    OnChangeHappiness(e){
        this.setState({
          happiness:e.target.value
        })
      }
    OnSubmit(e){
       const changement= {
           jour:this.state.jour,
           happiness:this.state.happiness,
           amt:22,
       }
      axios.post('http://localhost:5000/baton/update/'+this.state.id,changement)
        .then(res => console.log(res.data));
      window.location = '/';

    }
    
      render () {
        return (
    <form>
    <label class="my-1 mr-2" >Quel jour voulez-vous modifier ?</label>
    <input type="text"  required className="form-control" value={this.state.jour} onChange={this.OnChangeJour} />
    <label class="my-1 mr-2" >Notez votre du jour humeur sur 8</label>
    <input type="number"  required className="form-control" max="8" min="0" value={this.state.happiness} onChange={this.OnChangeHappiness} />
    <button type="submit">Submit</button>
    </form>

    
      );
    }
  }
  export default Baton;