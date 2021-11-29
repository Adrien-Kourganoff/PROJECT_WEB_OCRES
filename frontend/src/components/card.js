import React, { useEffect, useState } from 'react';
const { default: axios } = require('axios');

// A card used to contain all data from api
export default function CardWeather(){

    const [data, setData] = useState([]);
    const [icons, setIcons] = useState([]);

    const fetchData = async () => {
        await axios.get('http://localhost:9000/weather?day=3').then(all => setData(all.data));
    }

    const fetchIcon = async () => {
        await axios.get('http://localhost:9000/weather/icon?day=3').then(all => setIcons(all.data));
    }

    useEffect(() => {
        //fetchData();
        //fetchIcon();
        setIcons(["http://openweathermap.org/img/wn/09d@2x.png","http://openweathermap.org/img/wn/02d@2x.png","http://openweathermap.org/img/wn/04d@2x.png"]);
        setData("yo");
        console.log( {icons} );
        console.log( {data} );
    }, [icons[3],data]);

    return(
        <section className='cont_meteo'>
            <div className='today'>
                <h3 className='title'>Today</h3>
                <div className="meteo_data">
                    <img src={icons[0]} className='icon' alt=''/>
                    <h4 className='temp'>3°C</h4>
                </div>
            </div>
            <div className='tomorrow'>
                <h3 className='title'>Next days</h3>
                <div className="forecast">
                    <div className='tmr'>
                        <img src={icons[1]} className='icon' alt=''/>
                        <h4 className='temp'>5°C</h4>
                    </div>
                    <div className='tmr2'>
                        <img src={icons[2]} className='icon' alt=''/>
                        <h4 className='temp'>-2°C</h4>
                    </div>
                </div>
            </div>
        </section>
    );    
}

/* will be used after with the back end
                <h2 className='temp'>{data.list[0].temp.day}</h2>
*/