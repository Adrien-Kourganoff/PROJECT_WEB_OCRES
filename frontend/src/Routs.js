import React, { Component } from "react";
import { Route, Routes } from "react-router";
import Home from './pages/Home.js';
import Parametres from "./pages/Parametres.js";

class Routs extends Component{
    constructor (props){
        super(props);
        this.state = {
            city: null,
            nasa_parameters: null,
            rates_parameters: null,
            makeup_parameters: null,
        };
    }

    callbackMeteo = (childCity) => {
        this.setState({
            city: childCity,
        });
    }

    callbackNasa = (childDate) => {
        this.setState({
            nasa_parameters: childDate,
        });
    }

    callbackRates = (childCurrencies) => {
        this.setState({
            rates_parameters: childCurrencies,
        });
    }

    callbackFilms = () => {
        
    }

    callbackShopping = (childMakeupParameters) => {
        this.setState({
            makeup_parameters: childMakeupParameters,
        });
    }

    render(){
        return(
            <Routes>
                <Route path = "/" element = {<Home 
                    city = {this.state.city}
                    nasa_parameters = {this.state.nasa_parameters}
                    rates_parameters = {this.state.rates_parameters}
                    makeup_parameters = {this.state.makeup_parameters}
                />}/>

                <Route path = "/settings" element = {<Parametres
                    updateMeteo = {this.callbackMeteo}
                    updateNasa = {this.callbackNasa}
                    updateRates = {this.callbackRates}
                    updateFilms = {this.callbackFilms}
                    updateShopping = {this.callbackShopping}
                />}/>
            </Routes>
        );
    }
}

export default Routs;
