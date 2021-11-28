import React from 'react';
import { NavLink } from "react-router-dom";
import "../styles/settings.css";

function Navigation() {
    return (
      <div className="navigation">
        {/*<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap" rel="stylesheet"/>*/}

        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        
        <nav class="navbar">
            <ul class="navbar-nav">
                <li class="logo">
                    <a href="/"  class="nav-link">
                    <div class="link-text logo-text">JBTV</div>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fad"
                        data-icon="angle-double-right"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
                    >
                        <g class="fa-group">
                        <path
                            fill="currentColor"
                            d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                            class="fa-secondary"
                        ></path>
                        <path
                            fill="currentColor"
                            d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                            class="fa-primary"
                        ></path>
                        </g>
                    </svg>
                    </a>
                </li>

                <NavLink exact to='/' class="nav-item nav-link" >
                    <span class="material-icons md-36">&#xe9b2;</span>
            
                    <span class="link-text">Home</span> 

                </NavLink>
                <NavLink exact to='/galerie' class="nav-item nav-link">  
                    <span class="material-icons md-36">&#xe412;</span>
                        
                    <span class="link-text">Galerie</span>            
                </NavLink>
                <NavLink exact to='/event' class="nav-item">
                    <span class="material-icons md-36">&#xe878;</span>
                        
                    <span class="link-text">Events</span>  
                </NavLink>
                <NavLink exact to='/games' class="nav-item">
                    <span class="material-icons md-36">&#xea23;</span>
                        
                    <span class="link-text">Games</span>  
                </NavLink>
                <NavLink exact to='/contact' class="nav-item">
                    <span class="material-icons md-36">&#xe158;</span>
                        
                    <span class="link-text">Contacts</span>  
                </NavLink>

            </ul>
        </nav>
      </div>
    );
}
  
export default Navigation;