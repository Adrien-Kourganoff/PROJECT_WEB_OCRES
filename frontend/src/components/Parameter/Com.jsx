import React, { Component, Fragment } from "react";
import "./Parameter.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

import TextField from "@material-ui/core/TextField";
//import {API_URL} from "../../config";
import API from "../../api";

import moment from "moment";

class Com extends Component {
  constructor(props) {
    super(props);
    this.handleCommentaireChange = this.handleCommentaireChange.bind(this);
    this.mySubmitHandlerCommentaire = this.mySubmitHandlerCommentaire.bind(this);
    this.state = {
      formData: {
        title: null,
        text: null,
      },

      errorMessage: "",
    };
  }
  handleCommentaireChange = (e) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value,
      },
    });
  }
  async mySubmitHandlerCommentaire(e) {

    e.preventDefault();
    if (this.state.formData.title === null) {
      this.setState({ errorMessage: "Il faut un texte" });
      return;
    }
    if (this.state.formData.text === null) {
      this.setState({ errorMessage: "Il faut un texte" });
      return;
    }

    try {
      await API.put(`/entreprises/commentaire/${this.props.user}`,this.state.formData);
      console.log("test");
      this.setState({
        formData: {
          title: "",
          text: "",
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
              name="title"
              size="lg"
              value={this.state.formData.title}
              onChange={this.handleCommentaireChange}
            />
            <br />
            <Form.Label style={{ color: "#8CA3D7" }}>Quel message?</Form.Label>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Commentaire..."
                name="text"
                size="lg"
                value={this.state.formData.text}
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
      </Fragment>
    );
  }
}

export default Com;
