import React from "react";
import "./Navbar.css";

export default class Navbar extends React.Component{

    render(){
        return(
            <header>
                <div className="logo">
                    Logo
                </div>
                <div className="navigation">
                    <button className="active">
                        Mon dashboard
                    </button>
                    <button>
                        Mon API
                    </button>
                </div>
            </header>
            
        );
    }

}