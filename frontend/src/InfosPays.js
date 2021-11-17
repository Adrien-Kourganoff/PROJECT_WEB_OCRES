import React from "react";
import "./InfosPays.css";
import "./APIs/API_RestCountries";

export default class InfoPays extends React.Component{
    render(){
        return(
            <div className="Box">
                <div className="Drapeau">
                    <img src="" alt=""></img>
                </div>
                <div className="Info_box">
                    <select id="listePays"></select>
                    <p id="capitale">Capitale : </p>
                    <p id="langue">Langue : </p>
                    <p id="population">Population : </p>
                    <p id="monnaie">Monnaie : </p>
                    <p id="continent">Continent : </p>
                    <p id="sous-continent">Sous-continent : </p>
                </div>
            </div>
        )
    }
}
