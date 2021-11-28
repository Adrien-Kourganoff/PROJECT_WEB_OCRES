import React, { useState, useEffect } from 'react';



//Give the next workers for the next events
export default function NextWorker(){

    const [data, setData] = useState([
        {"event":"Pot des caves","position":{ "name":"Duplex", "lat":48.873658, "lng": 2.292500 },"couvreurs":["Emma"," Tara"]},
        {"event":"JOB","position":{ "name":"Palais royal", "lat":48.865045, "lng": 2.337404 },"couvreurs":["Eloi"," Thomas"]},
        {"event":"Afterwork JEECE","position":{ "name":"Square St Eloi", "lat":48.844737, "lng": 2.387503 },"couvreurs":["Nina"," Mathieux"]}
    ]);

    return (

        <div className='container'>
            {data.map(data => (
                <div className='event'>
                    <h1 className='eventTitle'>{data.event}</h1>
                    <h5 className='couvreurs'>Couvert par : {data.couvreurs}</h5>
                    <h5 className='position'>Lieu : {data.position.name}</h5>
                </div>
            ))}
        </div>

    );
}