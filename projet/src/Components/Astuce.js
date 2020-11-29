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
      ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      style={{ width: '200px', 
      height: '160px',
      color:'purple' }} 
      
   >
      <FrontSide className="flip-card-inner">
        ASTUCES
      </FrontSide>

      <BackSide className="flip-card-back" >
        
      </BackSide>
    </Flippy>
  
      );
    }
  }

  export default Astuce;