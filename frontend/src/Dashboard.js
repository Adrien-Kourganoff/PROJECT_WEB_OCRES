import React from "react";
import "./Dashboard.css";
import Navbar from "./Navbar";
import InfoPays from "./InfosPays";
/*import { text } from "./stories/1-Button.stories";

const Text1 = text;*/   

export default class Dashboard extends React.Component{

    render(){
        return(
            <>
                <Navbar />
                <InfoPays />
            </>
        )
    }
}