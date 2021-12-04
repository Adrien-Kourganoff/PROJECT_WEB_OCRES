import React, { Component } from "react";
import { Route, Routes } from "react-router";
import Home from './pages/Home.js';
import Parametres from "./pages/Parametres.js";

class Routs extends Component{
    render(){
        return(
            <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/param" element = {<Parametres/>}/>
            </Routes>
        );
    }
}

export default Routs;