import React from "react";
import "../contents/css/Heure.css";
import start from "../APIs/API_TimeZonedb";

export default class Heure extends React.Component{
    render(){
        return(
            <div className="Box4">
                <div className="Input">
                    <input id="city-input" type="text" placeholder="Paris"/>
                    <button id="city-input-button" type="submit" onClick={start}>Actualiser</button>
                </div>
                <div className="HorlogeBox">
                    <div className="Horloge">
                        <p className="Douze">12</p>
                        <div className="Center">
                            <p className="Neuf">9</p>
                            <p className="Trois">3</p>
                        </div>
                        <p className="Six">6</p>
                        <div className="Wrap">
                            <span id="heure"></span>
                            <span id="minute"></span>
                            <span id="dot"></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
