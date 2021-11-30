import React, { useEffect, useState } from 'react';
const { default: axios } = require('axios');


// A card used to contain all data from api
export default function EventListTable(){

    const [dat, setDat] = useState([]);

    const fetchDat = async () => {
        await axios.get('http://localhost:9000/albums').then(all => setDat(all.data));
    }

    useEffect(() => {
        fetchDat();
        //console.log( {dat} );
    }, []);

    return (
        <div>
        </div>
    );
}