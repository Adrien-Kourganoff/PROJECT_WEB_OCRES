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


class Event extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            formData: {
                event: null,
                dateStart: null,
                dateEnd: null,
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
        if (this.state.formData.event === null) {
            this.setState({errorMessage:"Test"})
            return;
        }
        if (this.state.formData.dateEnd === null) {
            return;
        }
        if (this.state.formData.dateStart === null) {
            return;
        }
        if (moment(this.state.formData.dateStart).isAfter(moment(this.state.formData.dateEnd))) {
            return;
        }
        try {
            await API.post("/event", this.state.formData);
            console.log("test");

            this.setState({
                formData: {
                    event: "",
                    dateStart: "",
                    dateEnd: "",
                },
                errorMessage:"",
            });

        }
        catch (error) {
            console.log(error);
        }


    }

    render() {

        console.log(this.state);
        return (

            <Fragment>
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <titre style={{ fontWeight: "bold" }}>Ajout d'un évènement</titre>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
                <br />
                <Form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <Form.Label style={{ color: "#F271D9" }} >Quel début?</Form.Label>
                    </div>
                    <div className="row">
                        <TextField
                            name="dateStart"
                            type="datetime-local"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={this.state.formData.dateStart}
                            onChange={this.handleChange}
                        />
                    </div>
                    <br />
                    <div className="row">
                        <Form.Label style={{ color: "#F271D9" }}>Quelle fin?</Form.Label>
                    </div>
                    <div className="row">
                        <TextField
                            name="dateEnd"
                            type="datetime-local"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={this.state.formData.dateEnd}
                            onChange={this.handleChange}
                        />
                    </div>
                    <br />
                    <div class="row">
                        <Form.Label style={{ color: "#F271D9" }}>Quelle description?</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="évènement"
                            name="event"
                            size="lg"
                            value={this.state.formData.event}
                            onChange={this.handleChange}
                        />
                    </div>
                    <br />
                    <div class="row">
                        <Button variant="flat4" type="submit">
                            Envoyer
                        </Button>

                    </div>
                    <p>{this.state.errorMessage}</p>

                    <br />
                </Form>

                <br />
            </Fragment>
        );

    }
}

export default Event;