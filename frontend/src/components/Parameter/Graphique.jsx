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


class Graphique extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            formData: {
                mois: null,
                benef: null,
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
        //     this.setState({ errorMessage: "Test" })
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
            await API.put(`/entreprises/graphique/${this.props.user}`, this.state.formData);
            console.log("test");

            this.setState({
                formData: {
                    mois: "",
                    benef: "",
                },
                errorMessage: "",
            });

        }
        catch (error) {
            console.log(error);
        }


    }

    render() {
        console.log("hello");
        return (

            <Fragment>
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <titre style={{ fontWeight: "bold" }}>Ajout d'un chiffre d'affaire</titre>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
                <br></br>
                <Form onSubmit={this.handleSubmit}>
                    <div class="row">
                        <Form.Label style={{ color: "#FBC86A" }} >Quel mois?  </Form.Label>
                        <Form.Control
                            as="select"
                            size="lg"
                            value={this.state.mois}
                            onChange={this.handleChange}
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
                            onChange={this.handleChange}
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
            </Fragment>
        );

    }
}

export default Graphique;