import React, { Component } from "react";
import "./Parameter.css";
import  Event from "./Event";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
// import FormControl from 'react-bootstrap/FormControl'
// import FormCheck from 'react-bootstrap/FormCheck'
// import FormFile from 'react-bootstrap/FormFile'
import { isNaN } from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";



class parameter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mois: null,
      benef: null,
      gain: null,
      typegain: null,
      dep: null,
      typedep: null,
      
      pseudo: null,
      commentaire: null,
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
  mySubmitHandlerCommentaire = (e) => {
    e.preventDefault();
    let commentaire = this.state.commentaire;
    let pseudo = this.state.pseudo;
    console.log(commentaire);
    console.log(pseudo);
  };
  handleCommentaireChange = (e) => {
    this.setState({ commentaire: e.target.value });
  };
  handleCommentairePseudoChange = (e) => {
    this.setState({ pseudo: e.target.value });
  };
  render() {
    return (
      <div className="containerPage2">
        <div class="col-sm-6">
          <div className="row ">
            <div className="App-headerMilieu style">
              <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                  <titre  style={{ fontWeight: "bold" }}>Ajout d'un chiffre d'affaire</titre>
                </div>
                <div className="col-sm-1"></div>
              </div>
              <br></br>
              <Form onSubmit={this.mySubmitHandlerBenef}>
                <div class="row">
                <Form.Label style={{ color: "#FBC86A" }} >Quel mois?  </Form.Label>
                  <Form.Control
                    as="select"
                    size="lg"
                    value={this.state.mois}
                    onChange={this.handleBenefMoisChange}
                  >
                    <option value="Janvier">Janvier</option>
                    <option value="Février">Février</option>
                    <option value="Mars">Mars</option>
                    <option value="Avril">Avril</option>
                    <option value="Mai">Mai</option>
                    <option value="Juin">Juin</option>
                    <option value="Juillet">Juillet</option>
                    <option value="Août">Août</option>
                    <option value="Septembre">Septembre</option>
                    <option value="Octobre">Octobre</option>
                    <option value="Novembre">Novembre</option>
                    <option value="Décembre">Décembre</option>
                  </Form.Control>
                </div>
                <br />
                <div class="row">
                  <Form.Label style={{ color: "#FBC86A" }} >Combien?</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="bénéfice en K€"
                    name="benef"
                    size="lg"
                    value={this.state.benef}
                    onChange={this.handleBenefChange}
                  />
                </div>
                <br />
                <div class="row">
                  <Button variant="flat1" type="submit">
                    Envoyer
                  </Button>
                  
                </div>
              </Form>

              <br></br>
            </div>
          </div>
          <div className="row">
            <div className="App-headerMilieu style">
              <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                  <titre style={{ fontWeight: "bold" }}>Ajout d'un gain</titre>
                </div>
                <div className="col-sm-1"></div>
              </div>
              <br />
              <Form onSubmit={this.mySubmitHandlerGain}>
                <div class="row">
                <Form.Label style={{ color: "#795EFF" }} >Quel type? </Form.Label>
                  <Form.Control
                    as="select"
                    size="lg"
                    value={this.state.typegain}
                    onChange={this.handleTypeGainChange}
                  >
                    <option value="Marchandise">Marchandise</option>
                    <option value="Immobilier">Immobilier</option>
                    <option value="Investissement">Investissement</option>
                    <option value="Autres">Autres</option>
                  </Form.Control>
                </div>
                <br />
                <div class="row">
                <Form.Label style={{ color: "#795EFF" }} >Combien?</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="gain en K€"
                    name="gain"
                    size="lg"
                    value={this.state.gain}
                    onChange={this.handleGainChange}
                  />
                </div>
                <br />
                <div class="row">
                  <Button variant="flat2" type="submit">
                    Envoyer
                  </Button>
                </div>

                <br />
              </Form>

              <br></br>
            </div>
          </div>
          {/*----------------------------------------------------------dépense*/}
          <div className="row">
            <div className="App-headerMilieu style">
              <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                  <titre style={{ fontWeight: "bold" }}>Ajout d'une dépense</titre>
                </div>
                <div className="col-sm-1"></div>
              </div>
              <br />
              <Form onSubmit={this.mySubmitHandlerDep}>
                <div class="row">
                <Form.Label style={{ color: "#89D761" }} >Quel type?</Form.Label>
                  <Form.Control
                    as="select"
                    size="lg"
                    value={this.state.typedep}
                    onChange={this.handleTypeDepChange}
                  >
                    <option value="Salaire">Charges employés</option>
                    <option value="MatierePremiere">Matières Premières</option>
                    <option value="Charges">Charges</option>
                    <option value="Autres">Autres</option>
                  </Form.Control>
                </div>
                <br />
                <div class="row">
                <Form.Label style={{ color: "#89D761" }} >Combien?</Form.Label>
                  <Form.Control
                  
                    type="text"
                    placeholder="dépense en K€"
                    name="dep"
                    size="lg"
                    value={this.state.dep}
                    onChange={this.handleDepChange}
                  />
                </div>
                <br />
                <div clas="row">
                  <Button variant="flat3" type="submit">
                    Envoyer
                  </Button>
                </div>
              </Form>

              <br></br>
            </div>
          </div>
        </div>
        {/*----------------------------------------------------------evenement*/}
        <div class="col-sm-6">
          <div className="row">
            <div className="App-headerMilieu style">
              <Event />
            </div>
          </div>
          {/*----------------------------------------------------------Commentaire  style={{ justify-content: center }}*/}
          <div className="row">
            <div className="App-headerMilieu style">
              <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                  <titre style={{ fontWeight: "bold" }}>Ajout d'un commentaire</titre>
                </div>
                <div className="col-sm-1"></div>
              </div>
              
              <Form onSubmit={this.mySubmitHandlerCommentaire}>
                <Form.Group>
                  <br />
                  <Form.Label style={{ color: "#8CA3D7" }}>Quel pseudo?</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Pseudo"
                    name="pseudo"
                    size="lg"
                    value={this.state.pseudo}
                    onChange={this.handleCommentairePseudoChange}
                  />
                  <br />
                  <Form.Label style={{ color: "#8CA3D7" }}>Quel message?</Form.Label>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Commentaire..."
                      name="commentaire"
                      size="lg"
                      value={this.state.commentaire}
                      onChange={this.handleCommentaireChange}
                    />
                  </Form.Group>
                  
                </Form.Group>
                <br />
                <Button variant="flat5" type="submit">
                  Envoyer
                </Button>
                <br />
              </Form>

              <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default parameter;
