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


export default class Son extends React.Component
 {
    constructor(props) {
      super(props);
  
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        url: ''
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
  
    
    render() {

      let audio = new Audio('music.mp3');
    
      const start = () => {
        audio.play()
      }
    
      const stop=()=>{
        audio.pause()
      }
    
      return (
        <div>
          <h3>Add New Musique</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label>URL </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.url}
                  onChange={this.onChangeUsername}
                  />
            </div>
            <div className="form-group">
              <input type="submit" value="Create User" className="btn btn-primary" />
            </div>
          </form>




          <button variant="light" onClick={start}>Play</button>
      <button variant="light" onClick={stop}>Pause</button>




        </div>
      )
    }
  }
 

 
