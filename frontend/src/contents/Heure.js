import React from "react";
import "../contents/css/Heure.css";
import start from "../APIs/API_TimeZonedb";

export default class Heure extends React.Component{
    render(){
        return(
            <div className="Box4" onLoad={start}>
                <input id="city-input" type="text" placeholder="Paris"/>
                <button id="city-input-button" type="submit" onClick={start}>Actualiser</button>
                <p>Heure : <span id="heure"></span></p>
                <p>Minute : <span id="minute"></span></p>
            </div>
        )
    }

}
