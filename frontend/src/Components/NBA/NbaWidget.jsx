import React, { Component } from "react";

class NbaWidget extends Component {
  render() {
     const  match  = this.props;
   
     console.log( match.home_team_score);
    
    // if (!data) return null;

    
    return (
      <p>Hello </p> 
    );
  }
}

export default NbaWidget;
