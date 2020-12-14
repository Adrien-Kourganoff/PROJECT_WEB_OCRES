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


    //FETCH LA DATA
  /*
    state ={
      url :'',
      posts:[]
    }
    
    componentDidMount = () =>{
      this.getUrl();
    };

getUrl = () => {
    axios.get('/')
    .then((response)=>{
      const data = response.data;
      this.setState({posts:data})
      console.log("Data has been received");
  
  })

  .catch(()=>{
    
      console.log(" ERROR : Data has not been received");
  
    });
  
}


displayBlogPost = (posts) =>{

  if (!posts.length) return null;

 posts.map((post,index)=>{
  
  <div key={index}>
    {post.url}
  </div>
  });
};*/
    render() {
          
      return (
        <div >
<div className="card">
          <h3 className="addnew">Add New Musique</h3>
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
              <input type="submit" value="Add Music" className="btn btn-primary" />
            </div>
          </form>
          
</div>
      <ReactPlayer url={this.state.url} playing />

        </div>
      )
    }
  }
 

 
