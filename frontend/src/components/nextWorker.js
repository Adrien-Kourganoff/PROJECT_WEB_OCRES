import React, { useEffect, useState } from 'react';
const { default: axios } = require('axios');

//Give the next workers for the next 3 events or less if less programmed
export default function NextWorker(){

    const [data, setData] = useState([
        {"event":"Pot des caves","position":{ "lat":48.851913, "lng": 2.286672 },"couvreurs":["Emma","Tara"]},
        {"event":"SDI","position":{ "lat":48.851913, "lng": 2.286672 },"couvreurs":["Eloi","Thomas"]},
        {"event":"Afterwork JEECE","position":{ "lat":48.851913, "lng": 2.286672 },"couvreurs":["Nina","Mathieux"]}
    ]);
    

}