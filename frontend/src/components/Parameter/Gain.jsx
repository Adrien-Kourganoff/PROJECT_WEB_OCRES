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
import API from '../../api';

import moment from "moment";
import axios from "axios";


class Gain extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            formData: {
                gain: null,
                typegain: null,
            },
           
            errorMessage: ""
        };
    }

    handleChange(event) {
        this.setState({
            formData: {
                ...this.state.formData,
                [event.target.name]: event.target.value
            }
        })
    }
    async handleSubmit(event) {
        event.preventDefault();
        // if (this.state.formData.event === null) {
        //     this.setState({errorMessage:"Test"})
        //     return;
        // }
        // if (this.state.formData.dateEnd === null) {
        //     return;
        // }
        // if (this.state.formData.dateStart === null) {
        //     return;
        // }
        // if (moment(this.state.formData.dateStart).isAfter(moment(this.state.formData.dateEnd))) {
        //     return;
        // }
        try {
            await API.put(`/entreprises/gain/${this.props.user}`, this.state.formData);
            console.log("test");

            this.setState({
                formData: {

                    gain: "",
                    typegain: "",
                },
                errorMessage:"",
            });

        }
        catch (error) {
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
              <Form onSubmit={this.handleSubmit}>
                <div class="row">
                <Form.Label style={{ color: "#795EFF" }} >Quel type? </Form.Label>
                  <Form.Control
                    as="select"
                    size="lg"
                    value={this.state.typegain}
                    onChange={this.handleChange}
                  >
                    <option value="0">Marchandise</option>
                    <option value="1">Immobilier</option>
                    <option value="2">Investissement</option>
                    <option value="3">Autres</option>
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
                    onChange={this.handleChange}
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