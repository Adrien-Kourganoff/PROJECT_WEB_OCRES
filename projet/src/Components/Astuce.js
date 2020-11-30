import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import {Card} from 'react-bootstrap';


class Astuce extends React.Component {
  
   
  render() {
   
    return(
      <Card  style={{ width: '450px',}}>
  <Card.Body>
    <Flippy className="flipcard"
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle(), // if you pass isFlipped prop component will be controlled component.// and other props, which will go to div
      style={{ width: '400px', 
      height: '240px',
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
    </Card.Body>
</Card>
      );
    }
  }

  export default Astuce;