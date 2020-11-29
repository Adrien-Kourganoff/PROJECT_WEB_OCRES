import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import Flippy, { FrontSide, BackSide } from 'react-flippy';



class Astuce extends React.Component {
  
   
  render() {
   
    return(
    <Flippy className="flipcard"
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle(), // if you pass isFlipped prop component will be controlled component.// and other props, which will go to div
      style={{ width: '500px', 
      height: '160px',
     }} 
      
   >
      <FrontSide className="flip-card-inner">
        Cliquez vite pour decouvir une Astuce !!!
      </FrontSide>

      <BackSide className="flip-card-back" >
        <h4>Astuce pour être heureux</h4>
        <h5>Savoir lâcher-prise quand il le faut</h5>
        <p> Le plus grand secret pour le bonheur, c’est d’être bien avec soi. <br />- Bernard Fontenelle </p>
      </BackSide>
    </Flippy>
  
      );
    }
  }

  export default Astuce;