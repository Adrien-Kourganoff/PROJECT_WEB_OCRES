import React, { Component } from 'react'

import './admin.css';

class Formtrois extends Component {
  
  render () {
    
    return (
        <form>
        <label>
          Prénom : 
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    )
  }
}

export default Formtrois