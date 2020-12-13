import React, { Component, Fragment } from "react";
import "./Parameter.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

import { isNaN } from "lodash";

import API from "../../api";



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
    let gaine = parseInt(this.state.formData.gain, 10);
    if (this.state.formData.gain === null) {
      this.setState({ errorMessage: "Il faut rentrer un gain" });
      return;
    }
    if (isNaN(gaine)) {
      this.setState({ errorMessage: "Il faut que le gain soit un nombre" });
      this.setState({
        formData: {
          gain: "",
          typegain: "",
        }
      });
      return;
    }
    
    switch (this.myRef.current.value) { // on aurait pu mettre dans la BDD typegain en int mais on trouvait ca plus simple pour se reperer de mettre des string
      case "Marchandise":
        
        typeg = 1;
        break;
      case "Immobilier":
       
        typeg = 2;

        break;
      case "Investissement":
        typeg = 3;
        break;
      case "Autres":
        typeg = 4;
        break;
      default:
        typeg = 1;
        break;
    }
    try {

      await API.put(
        `/entreprises/gain/${this.props.entreprise_id}/${typeg}`,
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
            <titre style={{ fontWeight: "bold", color: "#795EFF" }}>Ajout d'un gain</titre>
          </div>
          <div className="col-sm-1"></div>
        </div>
        <br />
        <Form onSubmit={this.mySubmitHandlerGain}>
          <div className="row">
            <Form.Label style={{ color: "#795EFF" }}>Quel type? </Form.Label>
            <Form.Control
              type="text"
              as="select"
              size="lg"
              name="typegain"
              value={this.state.formData.typegain}
              ref={this.myRef}
              onChange={this.handleGainChange}
            >
              <option value="Marchandise">Marchandise</option>
              <option value="Immobilier">Immobilier</option>
              <option value="Investissement">Investissement</option>
              <option value="Autres">Autres</option>
            </Form.Control>
          </div>
          <br />
          <div className="row">
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
          <div className="row">
            <Button variant="flat2" type="submit">
              Envoyer
            </Button>
          </div>

          <br />
          <p style={{ color: "#795EFF", fontSize: "80%" }}>{this.state.errorMessage}</p>
        </Form>

        <br></br>
      </Fragment>
    );
  }
}

export default Gain;
