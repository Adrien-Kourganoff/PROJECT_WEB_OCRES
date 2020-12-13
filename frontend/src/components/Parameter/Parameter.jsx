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
      

    };
  }

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