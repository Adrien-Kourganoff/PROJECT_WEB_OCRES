import React from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";

//import { formatRelative } from "date-fns";

import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";

import {
    Combobox,
    ComboboxInput,
    ComboboPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";

const librairies = ["places"];

const mapContainerStyle = {
    width: '100vw',
    height: '100vh',
}

const center = {
    lat: 48.856613,
    lng: 2.352222,
}

const options = {
    disableDefaultUI: true,
    zoomControl: true,
}

export default function Map() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        librairies,
    });

    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);

    const onMapClick = React.useCallback((event) => {
        setMarkers(current => [
            ...current,
            {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
                time: new Date(),
            },
        ]);
    }, []);

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    return (
        <div>
            <h1>Villes disponibles</h1>

            <Search />

            <GoogleMap mapContainerStyle={mapContainerStyle}
                zoom={8}
                center={center}
                options={options}
                onClick={onMapClick}
                onLoad={onMapLoad}
            >
                {markers.map((marker) => (
                    <Marker
                        key={marker.time.toISOString()}
                        position={{ lat: marker.lat, lng: marker.lng }}
                        onClick={() => {
                            setSelected(marker);
                        }}
                    />

                ))}

                {selected ? (
                    <InfoWindow position={{ lat: selected.lat, lng: selected.lng }}
                        onCloseClick={() => {
                            setSelected(null);
                        }}
                    >
                        <div>
                            <h2>Ville disponible</h2>
                        </div>
                    </InfoWindow>) : null}
            </GoogleMap>
        </div>
    );

}

function Search() {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestion,
    } = usePlacesAutocomplete({
        requestOptions: {
            location: {
                lat: () => 48.856613,
                lng: () => 2.352222,
            },
            radius: 200 * 1000,
        },
    });
    return (
    <Combobox
        onSelect={(adress) => {
            console.log(adress);

        }}
    >
        <ComboboxInput
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
            }} 
            disabled={!ready}
            placeholder= "Entrer une adresse"
        />
    </Combobox>
    );
}