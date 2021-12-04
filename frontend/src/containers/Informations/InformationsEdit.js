import React, { useState, useEffect } from 'react';
import axios from 'axios';

import InvestAlertsEdit from '../../components/Admin/InvestAlertsEdit/InvestAlertsEdit'

export default function InformationsEdit() {
   
    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {

            const response = await axios.get('http://localhost:1337/alerts', {  
            })
            .catch((error) => console.log(error.resp));
          setData(response);
          };

          fetchData();
          console.log(data);
        
    },[])

    const updateAlert = async (id,titre,message,date) => {
        
        const response = await axios.put('http://localhost:1337/alerts/update', {  
            id : id,
            title : titre,
            message : message,
            alertDate : date,
        }
        )
        .catch((error) => console.log(error.resp));
        console.log(response);

      };


       if (data===undefined) //Si tableau vide cad api pas encore fetch
          return <div>Loading...</div>;
       else if (data.length===0)
          return <div>Loading...</div>;
else{
    return ( 
        <div>
            <InvestAlertsEdit data={data} updateAlert={updateAlert}/>
        </div>
    )
}
}
