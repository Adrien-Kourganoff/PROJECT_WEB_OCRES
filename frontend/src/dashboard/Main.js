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
         Dashboard 
         <a className='lienAdmin' href='/admin'> Admin</a>
        </header>
        <div className='flex-container'>
            <Cardun/>
            <Carddeux/>
            <Cardtrois/>
            <Cardquatre/>
            <Cardcinq/>
            <Cardsix/>
        </div>
    
      </div>
    )
  }
}

export default Main

