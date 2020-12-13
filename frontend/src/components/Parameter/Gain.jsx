import React, { Component, Fragment } from "react";
import "./Parameter.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
// import FormControl from 'react-bootstrap/FormControl'
// import FormCheck from 'react-bootstrap/FormCheck'
// import FormFile from 'react-bootstrap/FormFile'
import { isNaN } from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
//import {API_URL} from "../../config";
import API from "../../api";

import moment from "moment";
import axios from "axios";

class Gain extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.handleGainChange = this.handleGainChange.bind(this);
    this.mySubmitHandlerGain = this.mySubmitHandlerGain.bind(this);
    this.state = {
      formData: {
        gain: null,
        typegain: null,
      },

      errorMessage: "",
    };
  }

  handleGainChange(e) {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value,
      },
    });
  }
  async mySubmitHandlerGain(event) {
    event.preventDefault();
    var typeg = 1;
    if (this.state.formData.gain === null) {
      this.setState({ errorMessage: "Le Gain n'est pas le bon" });
      return;
    }
console.log("avant switch", this.myRef.current.value)
        switch (this.myRef.current.value) { // on aurait pu mettre dans la BDD typegain en int mais on trouvait ca plus simple pour se reperer de mettre des string
          case "Marchandise":
            console.log("marchandise")
               typeg=1;
               break;
          case "Immobilier":
              console.log("Immobilier")
             typeg=2;
             
            break;
          case "Investissement":
            typeg=3;
            break;
          case "Autres":
            typeg=4;
            break;
          default:
            typeg=1;
            break;
        }
    try {
        
      await API.put(
        `/entreprises/gain/${this.props.user}/${typeg}`,
        this.state.formData
      );
      this.setState({
        formData: {
            gain: "",
            typegain: "",
        },
        errorMessage: "",
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Fragment>
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
            <Form.Label style={{ color: "#795EFF" }}>Quel type? </Form.Label>
            <Form.Control
            type="text"
              as="select"
              size="lg"
              name="typegain"
              value={this.state.formData.typegain}
              ref = {this.myRef}
              onChange={this.handleGainChange}
            >
              <option value="Marchandise">Marchandise</option>
              <option value="Immobilier">Immobilier</option>
              <option value="Investissement">Investissement</option>
              <option value="Autres">Autres</option>
            </Form.Control>
          </div>
          <br />
          <div class="row">
            <Form.Label style={{ color: "#795EFF" }}>Combien?</Form.Label>
            <Form.Control
              type="text"
              placeholder="gain en K€"
              name="gain"
              size="lg"
              value={this.state.formData.gain}
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
      </Fragment>
    );
  }
}

export default Gain;
