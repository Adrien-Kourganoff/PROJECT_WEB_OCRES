import React from 'react';
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
      <div className="navigation">
        <NavLink exact to='/'>
            Home
        </NavLink>
        <NavLink exact to='/galerie'>
            Galerie
        </NavLink>
        <NavLink exact to='/event'>
            Events
        </NavLink>
        <NavLink exact to='/games'>
            Games
        </NavLink>
        <NavLink exact to='/contact'>
            Contacts
        </NavLink>
      </div>
    );
}
  
export default Navigation;