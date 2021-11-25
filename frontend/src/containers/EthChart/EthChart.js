import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CryptoChart from '../../components/CryptoChart/CryptoChart';

export default function EthChart() {
   
    const [data, setData] = useState([]);
    const [CryptoName, setCryptoName] = useState("");
    const [CryptoSymbol, setCryptoSymbol] = useState("");

   

    function setState()
    {
        setCryptoName('Ethereum');
        setCryptoSymbol('Eth');
    }

    useEffect(() => {
        const fetchData = async () => {
        
            const result = await axios(
                `https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USD&limit=60`,
            );

            setData(result.data);
        };
        fetchData();
        setState();
    })

    if (data.length===0) //Si tableau vide cad api pas encore fetch
        return <div>Loading...</div>;
    return (
        <div>
            <CryptoChart name={CryptoName} symbol={CryptoSymbol} data={data}/>
        </div>
    )
}
