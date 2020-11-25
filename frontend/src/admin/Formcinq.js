import React, { Component } from 'react'


import './admin.css';


class Formcinq extends Component {
  
  render () {
    
    return (
        <form>
        <label>
          Mail : 
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    )
  }
}

export default Formcinq