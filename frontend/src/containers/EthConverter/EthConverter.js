import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CryptoConverter from '../../components/CryptoConverter/CryptoConverter';


export default function EthConverter() {
   
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        
            const result = await axios(
                `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`,
            );

            setData(result.data);
        };
        fetchData();
    })

    if (data.length===0) //Si tableau vide cad api pas encore fetch
        return <div>Loading...</div>;
    return (
        <div>
            <CryptoConverter data={data}/>
        </div>
    )
}
