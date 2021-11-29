import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const { default: axios } = require('axios');


export default function Map(){
    
    const [pins ,setPins] = useState([]);

    const fecthPins = async () => {
        await axios.get("http://localhost:9000/events").then( all => setPins(all.data));
    }

    useEffect(() => {
        fecthPins();
        console.log( {pins} );
    }, []);

    return(
        <div style={ {width: '100%',height: '100%' } } >
            <LoadScript googleMapsApiKey="AIzaSyBp3yj-pQJb3wB9RfdJ4VTKkjMhvDPxuBg"> 
                <GoogleMap
                    mapContainerStyle={ {height: '100%', width: '100%'} }
                    zoom={12}
                    center={ { lat: 48.851913, lng: 2.286672 } }>
                    
                    <Marker position={ { lat: 48.851913, lng: 2.286672 } } 
                        label={ "ECE" }/>

                    <MarkerMaker pins={pins}/>

                    {pins.map( pin =>{
                        <Marker position={pin.position.coord} 
                            label={pin.date}/>
                    })}
                </GoogleMap>
            </LoadScript>
        </div>
    );
    
}

//return pin array
function MarkerMaker(props){

    var pinss = [<Pin i={1} pins={props.pins}/>,<Pin i={0} pins={props.pins}/>];

    for (let j = 0; j < props.pins.length; j++) {
        pinss.push(<Pin i={j} pins={props.pins}/>)
    }

    return (
        <div>
            {pinss}
        </div>
    );
}

//One single pin
function Pin(props){

    const pins = props.pins;

    var i = props.i;

    return(
        <>
            <Marker position={pins[i].position.coord} label={pins[i].date}/>
        </>
    );
}

/*
<Marker position={ { lat: 48.851913, lng: 2.286672 } } 
                            label={ "dazda" }/>
*/