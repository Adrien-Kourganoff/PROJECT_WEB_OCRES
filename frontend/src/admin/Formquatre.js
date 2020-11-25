import React, { Component } from 'react'


import './admin.css';


class Formquatre extends Component {
  
  render () {
    
    return (
        <form>
        <label>
          Adresse : 
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    )
  }
}

export default Formquatre