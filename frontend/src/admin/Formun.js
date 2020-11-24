import React, { Component } from 'react'



import './admin.css';


class Formun extends Component {
  
  render () {
    
    return (
      <div>
        <form>
        <label>
          Nom : 
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
      
      </div>
        
    )
  }
}

export default Formun

