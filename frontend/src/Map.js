import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const google = window.google;

function MyMap() {

    const containerStyle = {
        width: '400px',
        height: '400px'
    };

    const myLatlng = {
        lat: -3.745,
        lng: -38.523
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyB9b_bCGhJEV309mZh4xNm5WFjYW1IY8Is"
    })


    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    window.onload = () => {
        // Create the initial InfoWindow.
        /*let infoWindow = new google.maps.InfoWindow({
            content: "Click the map to get Lat/Lng!",
            position: myLatlng,
        });

        infoWindow.open(map);

        map.addListener('click', (mapsMouseEvent) => {

            alert("Latitude: " + mapsMouseEvent.latLng.lat() + " " + ", longitude: " + mapsMouseEvent.latLng.lng());
        });

    }

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={myLatlng}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { }
            <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(MyMap)