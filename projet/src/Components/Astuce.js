import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import {Card} from 'react-bootstrap';
import axios from 'axios';


class Astuce extends React.Component {
  constructor(props){
    super(props);
    this.CurrentArriere=this.CurrentArriere.bind(this);
    this.CurrentAvant=this.CurrentAvant.bind(this);
    this.onChangePhrase=this.onChangePhrase.bind(this);
    this.state = {
      phrase:'',
      Listes:[],
      i:0
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/astuces/')
    .then(response => {
      this.setState({
      Listes:response.data.map(element=>element.phrase)
    })
    })
  }

  CurrentAvant(){
    if(this.state.i==this.state.Listes.length){
      this.setState({
        i:0
      })

    }else{
      this.setState({
        i:this.state.i+1
      })
    }
    
  }
  CurrentArriere(){
    if(this.state.i ==0){
      this.setState({
        i:this.state.Listes.length-1
      })
    }else{
      this.setState({
        i:this.state.i-1
      })
    };
  }
   onChangePhrase(e){
     this.setState({
        phrase: e.target.value
     });
   }
   onSubmit(e){
     e.preventDefault();
     const astuce = {
       phrase: this.state.phrase,
     }
   }


  render() {
    return(
      <Card  style={{ width: '450px'}}>
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
        Cliquez ici
      </FrontSide>

      <BackSide className="flip-card-back" >
        <h4>Astuce</h4>
        <h5>{this.state.Listes[this.state.i]}</h5>
      </BackSide>
    </Flippy>
    
    </Card.Body>
</Card>
      );
    }
  }

  export default Astuce;