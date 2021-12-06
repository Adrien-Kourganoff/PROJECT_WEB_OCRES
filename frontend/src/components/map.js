import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';


export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(2.32);
  const [lat] = useState(48.88);
  const [zoom] = useState(11);

  var _names= []
  const _Layers = [
    { 
      "id": "heatmap.DVF",
      "source": "sales",
      "layertype": "heatmap",
      "data": "sales.heatmap.geo.json",
      "type": "geojson",
      "paint": {},
      "minzoom": 4,
      "maxzoom": 15
    },
    {
      "id": "departement",
      "source": "departement",
      "layertype": "line",
      "data": "departement.geo.json",
      "type": "geojson",
      "layout": {},
      "paint": {
        "line-color": "violet",
        "line-width": 1.5
      },
      "minzoom": 4,
      "maxzoom": 15
    }
    ];

    //  Layers.forEach(function (layer, index) {console.log(layer, index);});
  useEffect(() => {
    if (map.current) return; //stops map from intializing more than once
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
      center: [lng, lat],
      zoom: zoom
    });
    map.current.on("load", () => {
      map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
          
     _Layers.forEach(function (layer, index) {
        var geojson = process.env.PUBLIC_URL +'data/'+layer.data
        _names.push(layer.id) // fill array for ToggleButtons
        console.log(geojson, layer)
        map.current.addSource(layer.source, {
        type: layer.type,
        data: geojson,
        });

        map.current.addLayer({
          id: layer.id,
          type: layer.layertype,
          source: layer.source,
          paint: layer.paint,
          minzoom: layer.minzoom,
          maxzoom: layer.maxzoom        
        });
     });

  });

  map.current.on('idle', () => {
// If these two layers were not added to the map, abort
//if (!map.getLayer('cad') || !map.getLayer('museums')) {
//return;}
 
 
// Set up the corresponding toggle button for each layer.
    for (const id of _names) {
// Skip layers that already have a button set up.
    if (document.getElementById(id)) {
        continue;
        }
 
    // Create a link.
    const link = document.createElement('a');
    link.id = id;
    link.href = '#';
    link.textContent = id;
    link.className = 'active';
     
    // Show or hide layer when the toggle is clicked.
    link.onclick = function (e) {
    const clickedLayer = this.textContent;
    e.preventDefault();
    e.stopPropagation();
     
    const visibility = map.current.getLayoutProperty(
    clickedLayer,
    'visibility'
    );
     
    // Toggle layer visibility by changing the layout object's visibility property.
    if (visibility === 'visible') {
    map.current.setLayoutProperty(clickedLayer, 'visibility', 'none');
    this.className = '';
    } else {
    this.className = 'active';
    map.current.setLayoutProperty(
    clickedLayer,
    'visibility',
    'visible'
    );
    }
    };
    const layers = document.getElementById('menu');
    layers.appendChild(link);

    }
  });    
});


 // maplibre.accessToken ="pk.eyJ1Ijoib3ZlcmZsbyIsImEiOiJja2t6YTU0ZWYxN3hiMnJvNDVqeWFjMWN2In0.OuD8KejcXgb_J7TD7QWALQ";
 // console.log(map)  
 //
  return (
    
    <div className="maplibre">   
      <div ref={mapContainer} className="map" />
      <div id="menu"></div>
    </div>
  );
}