import React, { Component } from 'react';
import {
    Calendar,
    DateLocalizer,
    momentLocalizer,
    globalizeLocalizer,
    move,
    Views,
    Navigate,
    components,
} from 'react-big-calendar';
import moment from 'moment';
import API from '../../api';

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);// or globalizeLocalizer


class Agenda extends Component {
    constructor(props) {
        super(props);
        this.state = { events: [] };
    }
    async componentDidMount() {
        const response = await API.get("/event");
        console.log(response);
        const eventElements = response.data.map(function (eventElement) {
            return {
                title: eventElement.content,
                start: new Date(eventElement.start),
                end: new Date(eventElement.end),
                allDay: false
            }
        });
        this.setState({ events: eventElements });
    }


    render() {
        return (
            <div className="AgendaContainer" style={{ width: "100%" }}>
                <Calendar
                    localizer={localizer}
                    events={this.state.events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: "35vh" }} />
            </div>
        );
    }
}

export default Agenda;