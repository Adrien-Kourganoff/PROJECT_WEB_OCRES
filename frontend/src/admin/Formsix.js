import React, { Component } from 'react'


import './admin.css';


class Formsix extends Component {
  
  render () {
    
    return (
        <form>
        <label>
          Phone : 
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    )
  }
}

export default Formsix