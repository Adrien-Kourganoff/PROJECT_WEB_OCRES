import React from "react";
import "../contents/css/PaysPlusVisites.css";
import API_MapsJavascript from "../APIs/API_MapsJavascript";
import start from "../APIs/API_MapsJavascript";

export default class PaysPlusVisites extends React.Component{
    render(){
        return(
            <div className="Box2">
                <div id="map_area">
                    <API_MapsJavascript/>
                    <div className="Input">
                        <input id="input" type="text" placeholder="Paris"/>
                        <button id="input-button" type="submit" onClick={start}>Actualiser</button>
                    </div>
                    
                </div>
            </div>
        )
    }

}
