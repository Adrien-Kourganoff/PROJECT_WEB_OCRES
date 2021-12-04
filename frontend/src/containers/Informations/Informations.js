import React, { useState, useEffect } from 'react';
import axios from 'axios';

import InvestAlerts from '../../components/DashboardComponents/InvestAlerts/InvestAlerts'

export default function Informations() {
   
    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {

            const response = await axios.get('http://localhost:1337/alerts', {  
            })
            .catch((error) => console.log(error.resp));
          setData(response);
          };

          fetchData();
        
    },[])


    console.log("test");
       if (data===undefined) //Si tableau vide cad api pas encore fetch
          return <div>Loading...</div>;
       else if (data.length===0)
          return <div>Loading...</div>;
else{
    return ( 
        <div>
            <InvestAlerts data={data}/>
        </div>
    )
}
}
