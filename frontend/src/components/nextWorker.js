import React, { useState, useEffect } from 'react';
const { default: axios } = require('axios');


//Give the next workers for the next events
export default function NextWorker(){

    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        await axios.get('http://localhost:9000/events').then(all => setEvents(all.data));
    }

    useEffect(() => {
        fetchEvents();
        //console.log( {events} );
    }, []);

    return (

        <div className='list_events'>
            {events.map(event => (
                <div className='event'>
                    <h3 className='eventTitle'>{event.event}</h3>
                    <h5 className='couvreurs'>Couvert par : {event.couvreurs}</h5>
                    <h5 className='position'>Lieu : {event.position.name}</h5>
                </div>
            ))}
        </div>

    );
}