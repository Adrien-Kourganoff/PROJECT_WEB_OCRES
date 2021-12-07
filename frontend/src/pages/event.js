import React from 'react';
import Navigation from '../components/navigation';
import EventTable from '../components/events';
import "../styles/settings.css";

function Event() {
    return (
      <div className="App">
        <Navigation/>
        <header className="Page">
          <EventTable/>
        </header>
      </div>
    );
}
  
export default Event;