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

const myEventsList = [
    {
        title: "test",
        start: new Date('November 22, 2020 15:00:00'),
        end:  new Date('November 22, 2020 18:00:00'),
        allDay: false
    },
    {
        title: "test2",
        start: new Date('December 23, 2020 15:00:00'),
        end:  new Date('December 23, 2020 18:00:00'),
        allDay: false
    },
];


const MyCalendar = props => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
     style={{ height: "35vh" }}/>
  </div>
)

class Agenda extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="AgendaContainer">
                <MyCalendar />
            </div>
        );
    }
}

export default Agenda;