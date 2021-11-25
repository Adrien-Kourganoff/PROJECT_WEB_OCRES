import React from "react";
import "../contents/css/Heure.css";
import "../APIs/API_TimeZonedb";

export default class Heure extends React.Component{
    render(){
        return(
            <div className="Box4" onLoad={this.start()}>
                <input id="city-input" type="text" placeholder="Paris"/>
                <button id="city-input-button" type="submit" onclick={start()}>Actualiser</button>
                <p>Latitude : <span id="lat"></span></p>
                <p>Longitude : <span id="lng"></span></p>
                <p>Heure : <span id="heure"></span></p>
            </div>
        )
    }

}
