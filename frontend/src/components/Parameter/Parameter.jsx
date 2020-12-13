import React, { Component } from "react";
import "./Parameter.css";
import  Event from "./Event";
import  Graphique from "./Graphique";
import  Gain from "./Gain";
import  Depense from "./Depense";
import  Com from "./Com";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
// import FormControl from 'react-bootstrap/FormControl'
// import FormCheck from 'react-bootstrap/FormCheck'
// import FormFile from 'react-bootstrap/FormFile'
import { isNaN } from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Commentaire from "../Commentaire/Commentaire";



class parameter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id : this.props.entreprise._id,
      mois: null,
      benef: null,

      dep: null,
      typedep: null,

    };
  }

  /*----------------------------------------------------------benefice*/
  mySubmitHandlerBenef = (event) => {
    event.preventDefault();
    let benef = parseInt(this.state.benef, 10);
    let mois = this.state.mois;
    console.log(mois);
    console.log(benef);

    if (isNaN(benef)) {
      alert("Le benefice doit être un nombre");
    }
  };
  handleBenefChange = (e) => {
    this.setState({ benef: e.target.value });
  };
  handleBenefMoisChange = (e) => {
    this.setState({ mois: e.target.value });
    // let mois=this.state.mois;
    // console.log(mois);
  };
  /*----------------------------------------------------------gain*/
  mySubmitHandlerGain = (event) => {
    event.preventDefault();
    let gain = parseInt(this.state.gain, 10);
    let typegain = this.state.typegain;
    console.log(typegain);
    console.log(gain);

    if (isNaN(gain)) {
      alert("Le gain doit être un nombre");
    }
  };
  handleGainChange = (e) => {
    this.setState({ gain: e.target.value });
  };
  handleTypeGainChange = (e) => {
    this.setState({ typegain: e.target.value });
  };
  /*----------------------------------------------------------dépense*/
  mySubmitHandlerDep = (event) => {
    event.preventDefault();
    let dep = parseInt(this.state.dep, 10);
    let typedep = this.state.typedep;
    console.log(typedep);
    console.log(dep);

    if (isNaN(dep)) {
      alert("La dépense doit être un nombre");
    }
  };
  handleDepChange = (e) => {
    this.setState({ dep: e.target.value });
  };
  handleTypeDepChange = (e) => {
    this.setState({ typedep: e.target.value });
  };
  /*----------------------------------------------------------évènement*/
  mySubmitHandlerEvent = (e) => {
    e.preventDefault();
    let event = this.state.event;
    let dateStart = this.state.dateStart;
    let dateEnd = this.state.dateEnd;
    console.log(dateStart);
    console.log(dateEnd);
    console.log(event);
  };
  handleEventChange = (e) => {
    this.setState({ event: e.target.value });
  };
  handleDateStartChange = (e) => {
    this.setState({ dateStart: e.target.value });
  };

  handleDateEndChange = (e) => {
    this.setState({ dateEnd: e.target.value });
  };
  /*----------------------------------------------------------commentaire*/

  render() {
    var id=this.state._id;
    
    return (
      
      <div className="containerPage2">
        <div class="col-sm-6">
          <div className="row ">
            <div className="App-headerMilieu style">
              
              
            <Graphique entreprise_id={id}/> 
              
            </div>
          </div>
          <div className="row">
            <div className="App-headerMilieu style">
            <Gain entreprise_id={id}/>
            </div>
          </div>
          {/*----------------------------------------------------------dépense*/}
          <div className="row">
            <div className="App-headerMilieu style">
            <Depense entreprise_id={id}/>
            </div>
          </div>
        </div>
        {/*----------------------------------------------------------evenement*/}
        <div class="col-sm-6">
          <div className="row">
            <div className="App-headerMilieu style">
    
              <Event entreprise_id={id}/> 
            </div>
          </div>
          {/*----------------------------------------------------------Commentaire  style={{ justify-content: center }}*/}
          <div className="row">
            <div className="App-headerMilieu style">
              <Com entreprise_id={id}/> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default parameter;
