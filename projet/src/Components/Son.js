import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash,faHome,faUser,faForward,faBackward,faPlay} from '@fortawesome/free-solid-svg-icons';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import PropsTypes from 'prop-types';
import { render } from 'react-dom';
import Sound from 'react-sound';
import { Component } from 'react';
import ReactPlayer from 'react-player'
import './Son.css';


export default class Son extends React.Component
 {
    constructor(props) {
      super(props);
  
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        url: '',
        posts:[]
      }
    }
  
    onChangeUsername(e) {
      this.setState({
        url: e.target.value
      })
    }
  
    onSubmit(e) {
      e.preventDefault();
  
      const user = {
        url: this.state.url
      }
  
      console.log(user);
  
      axios.post('http://localhost:5000/son/add', user)
        .then(res => console.log(res.data));
  
      this.setState({
        url: ''
      })
    }


    //FETCH LA DATA

    componentDidMount = () =>{
      axios.get('/http:localhost:5000/son/')
    .then((response)=>{

      if(response.data.length>0)
      {
        this.setState({
          posts : response.data.map(user=>user.url),
          url: response.data[0].url
        })
      }
     
    
  })

}

    render() {
          
      return (
        <div >
<div className="card">
          <h3 className="addnew">Ajouter une musique</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
             
              <label>URL </label>
              <input  type="text"
                  required
                  className="form-control" list="url"
                  value={this.state.url}
                  onChange={this.onChangeUsername}/>
                  <datalist id="url">
                  <option>{this.state.url}</option>
              
                  </datalist>


            
                {
                  this.state.posts.map(function(user) {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
           
            </div>
            
            <div className="form-group">
              <input type="submit" value="Add Music" className="btn btn-primary" />
            </div>
          </form>
          
</div>
<p> </p> <p> </p>
      <ReactPlayer url={this.state.url} playing />

        </div>
      )
    }
  }
 
 