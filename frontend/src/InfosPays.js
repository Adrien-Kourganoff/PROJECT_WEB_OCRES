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
                    <p>Capitale : <span id="capitale"></span></p>
                    <p>Langue : <span  id="langue"></span></p>
                    <p>Population : <span id="population"></span></p>
                    <p>Monnaie : <span id="monnaie"></span> <span id="symbole"></span></p>
                    <p>Continent : <span id="continent"></span></p>
                    <p>Sous-continent : <span id="sous-continent"></span></p>
                </div>
            </div>
        )
    }
}
