import React, { Component } from 'react'


import './admin.css';


class Formdeux extends Component {
  
  render () {
    
    return (
        <form>
        <label>
          Age : 
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    )
  }
}

export default Formdeux