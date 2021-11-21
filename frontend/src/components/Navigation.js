import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return(
        <div className="navigation">
            <ul>
                <NavLink to="/" exact className="hover" activeClassName="nav-active">

                </NavLink>
            </ul>
        </div>
    );
};
export default Navigation;