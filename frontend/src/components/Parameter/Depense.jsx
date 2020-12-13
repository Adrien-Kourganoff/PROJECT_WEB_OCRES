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

class Depense extends Component {
  constructor(props) {
    super(props);
    this.myRef2 = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.mySubmitHandler = this.mySubmitHandler.bind(this);
    this.state = {
      formData: {
        dep: null,
        typedep: null,
      },

      errorMessage: "",
    };
  }

  handleChange(e) {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value,
      },
    });
    
  }
  async mySubmitHandler(event) {
    event.preventDefault();
    var typedep = 1;
    if (this.state.formData.dep === null) {
      this.setState({ errorMessage: "Il faut rentrer des valeurs" });
      return;
    }
console.log("avant switch", this.myRef2.current.value)
        switch (this.myRef2.current.value) { // on aurait pu mettre dans la BDD typegain en int mais on trouvait ca plus simple pour se reperer de mettre des string
          case "Salaire":
            console.log("Salaire")
               typedep=1;
               break;
          case "MatierePremiere":
              console.log("MatierePremiere")
             typedep=2;
             
            break;
          case "Charges":
            console.log("charges")
            typedep=3;
            break;
          case "Autres":
            console.log("Autres")
            typedep=4;
            break;
          default:
            typedep=1;
            break;
        }
    try {
        
      await API.put(
        `/entreprises/dep/${this.props.entreprise_id}/${typedep}`,
        this.state.formData
      );
      this.setState({
        formData: {
            dep: "",
            typedep: "",
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
                  <titre style={{ fontWeight: "bold" }}>Ajout d'une dépense</titre>
                </div>
                <div className="col-sm-1"></div>
              </div>
              <br />
              <Form onSubmit={this.mySubmitHandler}>
                <div class="row">
                <Form.Label style={{ color: "#89D761" }} >Quel type?</Form.Label>
                  <Form.Control
                    as="select"
                    size="lg"
                    value={this.state.formData.typedep}
                    ref = {this.myRef2}
                    onChange={this.handleChange}
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
                    value={this.state.formData.dep}
                    onChange={this.handleChange}
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
      </Fragment>
    );
  }
}

export default Depense;
