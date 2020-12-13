import React, { Component, Fragment } from "react";
import "./Parameter.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { isNaN } from "lodash";
import API from "../../api";

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
    let depe = parseInt(this.state.formData.dep, 10);
    if (this.state.formData.dep === null) {
      this.setState({ errorMessage: "Il faut rentrer une dépense" });
      return;
    }
    if (isNaN(depe)) {
      this.setState({ errorMessage: "Il faut que la dépense soit un nombre" });
      this.setState({
        formData: {
          dep: "",
          typedep: "",
        }
      });
      return;
    }

    switch (this.myRef2.current.value) { 
      case "Salaire":
        
        typedep = 1;
        break;
      case "MatierePremiere":
        
        typedep = 2;

        break;
      case "Charges":
        
        typedep = 3;
        break;
      case "Autres":
        
        typedep = 4;
        break;
      default:
        typedep = 1;
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
            <titre style={{ fontWeight: "bold",color: "#89D761" }}>Ajout d'une dépense</titre>
          </div>
          <div className="col-sm-1"></div>
        </div>
        <br />
        <Form onSubmit={this.mySubmitHandler}>
          <div className="row">
            <Form.Label style={{ color: "#89D761" }} >Quel type?</Form.Label>
            <Form.Control
              as="select"
              size="lg"
              value={this.state.formData.typedep}
              ref={this.myRef2}
              onChange={this.handleChange}
            >
              <option value="Salaire">Charges Salariés</option>
              <option value="MatierePremiere">Matières Premières</option>
              <option value="Charges">Charges</option>
              <option value="Autres">Autres</option>
            </Form.Control>
          </div>
          <br />
          <div className="row">
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
          <div className="row">
            <Button variant="flat3" type="submit">
              Envoyer
                  </Button>
          </div>
          <br />
          <p style={{ color: "#89D761", fontSize: "80%" }}>{this.state.errorMessage}</p>
        </Form>

        <br></br>
      </Fragment>
    );
  }
}

export default Depense;
