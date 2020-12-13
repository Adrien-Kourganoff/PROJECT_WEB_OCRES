import React, { Component } from 'react';
import {
    Calendar,
    momentLocalizer,
} from 'react-big-calendar';
import moment from 'moment';

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);


class Agenda extends Component {
 
    render() {
        return (
            <div className="AgendaContainer" style={{ width: "100%" }}>
                <Calendar
                    localizer={localizer}
                    events={this.props.entreprise.myEventsList}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: "35vh" }} />
            </div>
        );
    }
}

export default Agenda;