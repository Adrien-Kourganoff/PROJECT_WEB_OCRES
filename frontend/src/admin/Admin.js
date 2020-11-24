import React from 'react';
import './admin.css';
import Formun from './Formun'
import Formdeux from './Formdeux'
import Formtrois from './Formtrois'
import Formquatre from './Formquatre'
import Formcinq from './Formcinq'
import Formsix from './Formsix'



//numéro du widget par défaut
let numForm =0;


//class qui permet d'afficher les formulaires

class Formulaire extends React.Component{


  render() {
    
    if(this.props.form==0){
      return (
       <Formun/> 
      );
    }
    else if(this.props.form==1){
      return (
        <Formdeux/>
      );
    }
    else if(this.props.form==2){
      return (
        <Formtrois/>
      );
    }   
    else if(this.props.form==3){
      return (
        <Formquatre/>
      );
    }
    else if(this.props.form==4){
      return (
        <Formcinq/>
      );
    }   
    else if(this.props.form==5){
      return (
        <Formsix/>
      );
    }         
  }
}


//class qui permet d'afficher les boutons correspondants aux trois profils proposés
class Choixformulaire extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      numForm: 0  //numéro profil par défaut
    }
  }


//fonctions qui changent le profil et ses informations en fonction du bouton 
  changeWidge0 = () => {
    numForm=0;
    this.setState({numForm: 0});
  }

  changeWidge1 = () => {
    numForm=1;
    this.setState({numForm: 1});
  }

  changeWidge2 = () => {
    numForm=2;
    this.setState({numForm: 2});
  }

  changeWidge3 = () => {
    numForm=3;
    this.setState({numForm: 3});
  }

  changeWidge4 = () => {
    numForm=4;
    this.setState({numForm: 4});
  }

  changeWidge5 = () => {
    numForm=5;
    this.setState({numForm: 5});
  }
  

  render() {
    
    return (
      
      <div>
        <header className='header'>
         Administration
        </header>
        <center>
        
          <br></br>
        <div className="container-form">
          <div className="row">
            <div className="col-sm-2"><button onClick={this.changeWidge0}>Widget 1</button></div>
            <div className="col-sm-2"><button onClick={this.changeWidge1}>Widget 2</button></div>
            <div className="col-sm-2"><button onClick={this.changeWidge2}> Widget 3</button></div>
            <div className="col-sm-2"><button onClick={this.changeWidge3}>Widget 4</button></div>
            <div className="col-sm-2"><button onClick={this.changeWidge4}>Widget 5</button></div>
            <div className="col-sm-2"><button onClick={this.changeWidge5}> Widget 6</button></div>
          </div>
        </div>
        
        <br></br> <br></br> <br></br>
        <Formulaire form={numForm} />
  
        <br></br><br></br> <br></br>
        <a className='retourButton' href='/'>Retour</a>
        </center>  
 
      </div>
     
    );
  }
}

export default Choixformulaire