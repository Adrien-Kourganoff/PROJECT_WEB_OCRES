import React, { Component } from 'react'

import Cardun from './Cardun'
import Carddeux from './Carddeux'
import Cardtrois from './Cardtrois'
import Cardquatre from './Cardquatre'
import Cardcinq from './Cardcinq'
import Cardsix from './Cardsix'

import './dashboard.css';



class Main extends Component {


  
  render () {
    
    return (
      <div>
        <header className='header'>
         <img className='imgHeader' src='../logo.png'/> Dashboard 
        </header>

        <div class="sidebar">
          <p>Home</p> 
          <a href="/admin">Admin</a>
          <a href="/">Logout</a>
        </div>

        <div class="content">
        <div className='container-flex'>
          <div className='row'> 
            <div className='col-lg-12 col-md-12'>
            <Cardun/>
            </div>
            <div className='col-lg-4 col-md-6'>
            <Cardtrois/>
            </div>
            <div className='col-lg-4 col-md-6'>
            <Carddeux/>
            </div>
            <div className='col-lg-4 col-md-4'>
            <Cardsix/>
            </div>
            <div className='col-lg-6 col-md-8'>
            <Cardquatre/>
            </div>
            <div className='col-lg-6 col-md-12'>
            <Cardcinq/>
            </div>            
          </div> 
        </div>
          
        </div>

        
    
      </div>
    )
  }
}

export default Main

