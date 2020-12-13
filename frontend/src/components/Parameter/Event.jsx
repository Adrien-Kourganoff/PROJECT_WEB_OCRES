import React, { Component, Fragment } from "react";
import "./Parameter.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";


import TextField from "@material-ui/core/TextField";

import API from '../../api';

import moment from "moment";



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
            this.setState({ errorMessage: "Il faut mettre un titre" })
            return;
        }
        if (this.state.formData.dateEnd === null) {
            this.setState({ errorMessage: "Il faut mettre une date de fin" })
            return;
        }
        if (this.state.formData.dateStart === null) {
            this.setState({ errorMessage: "Il faut mettre une date de début" })
            return;
        }
        if (moment(this.state.formData.dateStart).isAfter(moment(this.state.formData.dateEnd))) {
            this.setState({ errorMessage: "Il faut que la date de fin soit après la date de début" })
            return;
        }
        try {
            await API.put(`/entreprises/event/${this.props.entreprise_id}`, this.state.formData);
            

            this.setState({
                formData: {

                    event: "",
                    dateStart: "",
                    dateEnd: "",
                },
                errorMessage: "",
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
                    <div className="row">
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
                    <div className="row">
                        <Button variant="flat4" type="submit">
                            Envoyer
                        </Button>

                    </div>
                    <br />
                    <p style={{ color: "#F271D9", fontSize: "80%" }} >{this.state.errorMessage}</p>

                    <br />
                </Form>

                <br />
            </Fragment>
        );

    }
}

export default Event;