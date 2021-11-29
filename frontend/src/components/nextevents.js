import React, { useEffect, useState } from 'react';
const { default: axios } = require('axios');

// A card used to contain all data from api
export default function NextEvents(){

    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        await axios.get('http://localhost:9000/events').then(all => setEvents(all.data));
    }

    useEffect(() => {
        fetchEvents();
        console.log( {events} );
    }, []);

    return (
        <div className='container'>
            {events.map(event => (
                <div className='event'>
                    <h5 className='lieu'>Lieu : {event.position.name}</h5>
                    <h6 className='date'>Date : {event.date}</h6>
                </div>
            ))}
        </div>
    )

}