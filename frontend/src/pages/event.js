import React from 'react';
import Navigation from '../components/navigation';
import "../styles/settings.css";

function Event() {
    return (
      <div className="App">
        <Navigation/>
        <header className="Page">
           <h1>This is the event page</h1>
        </header>
      </div>
    );
}
  
export default Event;