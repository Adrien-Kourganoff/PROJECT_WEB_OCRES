import React, { useEffect, useState } from 'react';
const { default: axios } = require('axios');

// A card used to contain all data from api
export default function LastPictures(){

    const [URL, setURL] = useState([]);
    const [nb , setNB] = useState(0);

    const fetchURL = async () => {
        await axios.get('http://localhost:9000/galerie').then(all => setURL(all.data));
    }

    useEffect(() => {
        fetchURL();
        //setURL(["https://jbtv-galerie.ece.fr/2021-2022/Voyages-des-Caves/i-xBNwq2W/0/07e5a481/M/DSC_6412-M.jpg","https://jbtv-galerie.ece.fr/2021-2022/Voyages-des-Caves/i-KTmTbHT/0/72d14d38/M/DSC_6444-M.jpg"]);
        //setURL("https://jbtv-galerie.ece.fr/2021-2022/Voyages-des-Caves/i-xBNwq2W/0/07e5a481/M/DSC_6412-M.jpg");
        console.log( {URL} );
    }, []);

    return (
        <div className='container'>
            <img src={URL[nb]} onClick={() => { 
                if(nb==URL.length-1)
                    setNB(0);
                else setNB(nb + 1);
            }}></img>
        </div>
    )

}