import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CryptoConverter from '../../components/CryptoConverter/CryptoConverter';


export default function EthConverter() {
   
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        
            const result = await axios(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum%2C%20bitcoin%2C%20elrond-erd-2%2C%20binancecoin%2C%20ripple&order=market_cap_desc&per_page=100&page=1&sparkline=false
                `,
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
