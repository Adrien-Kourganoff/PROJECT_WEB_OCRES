import React, { useEffect, useState } from 'react';
const { default: axios } = require('axios');

// A card used to contain all data from api
export default function CardWeather(){

    const [data, setData] = useState([]);
    var [icons, setIcons] = useState([]);

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
        <section className='container'>
            <div className='today'>
                <h1 className='title'>Today</h1>
                <img  className='icon'/>
                <h2 className='temp'>19°C</h2>
            </div>
            <div className='tmr'>
                <h1 className='title'>Today</h1>
                <img  className='icon'/>
                <h2 className='temp'>19°C</h2>
            </div>
            <div className='tmr2'>
                <h1 className='title'>Today</h1>
                <img  className='icon'/>
                <h2 className='temp'>19°C</h2>
            </div>
        </section>
    );    
}

/*

<img src={icons[0]} className='icon'/>
                <h2 className='temp'>{data.list[0].temp.day}</h2>
*/