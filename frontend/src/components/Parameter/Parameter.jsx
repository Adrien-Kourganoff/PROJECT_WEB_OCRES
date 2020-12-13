import React, { Component } from "react";
import "./Parameter.css";
import Event from "./Event";
import Graphique from "./Graphique";
import Gain from "./Gain";
import Depense from "./Depense";
import Com from "./Com";




class parameter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.entreprise._id,


    };
  }

  render() {
    var id = this.state._id;

    return (

      <div className="containerPage2">
        <div className="col-sm-6">
          <div className="row ">
            <div className="App-headerMilieu style">


              <Graphique entreprise_id={id} />

            </div>
          </div>
          <div className="row">
            <div className="App-headerMilieu style">
              <Gain entreprise_id={id} />
            </div>
          </div>
          {/*----------------------------------------------------------dépense*/}
          <div className="row">
            <div className="App-headerMilieu style">
              <Depense entreprise_id={id} />
            </div>
          </div>
        </div>
        {/*----------------------------------------------------------evenement*/}
        <div className="col-sm-6">
          <div className="row">
            <div className="App-headerMilieu style">

              <Event entreprise_id={id} />
            </div>
          </div>
          {/*----------------------------------------------------------Commentaire  style={{ justify-content: center }}*/}
          <div className="row">
            <div className="App-headerMilieu style">
              <Com entreprise_id={id} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default parameter;