import React, { useState, useEffect } from 'react';
import axios from 'axios';


import CryptoNewsSlider from '../../components/CryptoNewsSlider/Slider'


export default function EthNews() {
   
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        
            const result = await axios(
                `https://newsapi.org/v2/everything?q=ethereum&language=fr&pageSize=100&sortBy=publishedAt&apiKey=2966a611872246de87957ef9bb472648`,
            );

            setData(result.data);
        };
        fetchData();
    },[])

    if (data.length===0) //Si tableau vide cad api pas encore fetch
        return <div>Loading...</div>;
    return (
        <div>
            <CryptoNewsSlider data={data}/>
        </div>
    )
}
