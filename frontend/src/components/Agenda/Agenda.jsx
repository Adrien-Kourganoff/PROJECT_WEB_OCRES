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
import moment from 'moment'

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);// or globalizeLocalizer


class Agenda extends Component {
    constructor(props) {
        super(props);
        this.state = { benef : this.props.user.myEventsList };
    }
    render() {
        return (
            <div className="AgendaContainer" style={{width:"100%"}}>
                <Calendar
      localizer={localizer}
      events={this.state.benef}
      startAccessor="start"
      endAccessor="end"
     style={{ height: "35vh" }}/>
            </div>
        );
    }
}

export default Agenda;