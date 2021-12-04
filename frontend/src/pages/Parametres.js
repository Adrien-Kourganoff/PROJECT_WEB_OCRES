import React, {Component} from "react";

class Parametres extends Component {

    setMeteo = () => {
        this.props.updateMeteo("Marseille");
    }

    setNasa = () => {
        this.props.updateNasa({
            day: "20",
            month: "12",
            year: "2020",
        });
    }

    setRates = () => {
        this.props.updateRates({
            base: "EUR",
            change: "KRW",
        });
    }

    setFilms = () => {
        
    }

    setShopping = () => {
        this.props.updateShopping({
            brand: "nyx",
        });
    }

    render(){
        return(
            <div className="Parametres">
                <div className="parametres_meteo">
                    <button onClick = {this.setMeteo}>Meteo</button>
                </div>
                <div className="parametres_nasa">
                </div>
                <div className="parametres_rates">
                </div>
                <div className="parametres_suggestion">
                </div>
                <div className="parametres_films">
                </div>
                <div className="parametres_shopping">
                </div>
            </div>
        );
    }    
}

export default Parametres;