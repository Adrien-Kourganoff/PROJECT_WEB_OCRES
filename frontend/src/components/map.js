import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default class Map extends React.Component{
    
    render(){
        return(
            <div style={ {width: '100%',height: '100%' } } >
            <LoadScript googleMapsApiKey="AIzaSyBp3yj-pQJb3wB9RfdJ4VTKkjMhvDPxuBg"> 
                <GoogleMap
                    mapContainerStyle={ {height: '100%', width: '100%'} }
                    zoom={14}
                    center={ { lat: 48.851913, lng: 2.286672 } }>

                    <Marker 
                        position={{ lat: 48.851913, lng: 2.286672 }} 
                        label="18/12"/>

                </GoogleMap>
            </LoadScript>
            </div>
        );
    }
}