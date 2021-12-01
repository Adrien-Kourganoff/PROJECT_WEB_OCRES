import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import "../styles/settings.css";

var autoTheme = true;

//To automaticaly change the theme
const autoThemeo = async () => {
    //Get the date
    const time = new Date(Date.now());
    var dark=false;
    const body = document.body;

    if(autoTheme==true){
        //Check the time to set the darkmode depending on the date
        if(time.getMonth()<3 || time.getMonth()>9){
            if(time.getHours()<8 || time.getHours()>=18){
                dark=true;
            }
        }
        else{
            if(time.getHours()<6 || time.getHours()>=21){
                dark=true;
            }
        }
        //If the dark mode is activated we change the theme to dark
        if(dark==true){
            if(!body.classList.contains('light') && !body.classList.contains('dark')) 
                body.classList.add('dark');
            else if (!body.classList.contains('dark'))
                body.classList.replace('light','dark');
        }
        //Otherwise we change the theme to light
        else{
            if(!body.classList.contains('light') && !body.classList.contains('dark')) 
                body.classList.add('light');
            else if (!body.classList.contains('light'))
                body.classList.replace('dark','light');
        }
    }
}

//When you click the theme button
function toggleTheme() {
    const body = document.body;

    //Change the theme depending on the current theme
    if(!body.classList.contains('light') && !body.classList.contains('dark')) 
        body.classList.add('light'); 
    else if (body.classList.contains('light')) 
        body.classList.replace('light','dark'); 
    else 
        body.classList.replace('dark','light');

    //Turn of the autoTheme
    autoTheme=false;
}

function Navigation() {
    
    //Change the theme automaticaly 
    useEffect(() => {
        autoThemeo();
    }, []);

    return (
      <div className="navigation">
        {/*<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap" rel="stylesheet"/>*/}

        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="logo">
                    <a href="/"  className="nav-link">
                    <div className="link-text logo-text">JBTV</div>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fad"
                        data-icon="angle-double-right"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
                    >
                        <g className="fa-group">
                        <path
                            fill="currentColor"
                            d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                            className="fa-secondary"
                        ></path>
                        <path
                            fill="currentColor"
                            d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                            className="fa-primary"
                        ></path>
                        </g>
                    </svg>
                    </a>
                </li>

                <NavLink exact to='/' className="nav-item nav-link" >
                    <span className="material-icons md-36">&#xe9b2;</span>
            
                    <span className="link-text">Home</span> 

                </NavLink>
                <NavLink exact to='/galerie' className="nav-item nav-link">  
                    <span className="material-icons md-36">&#xe412;</span>
                        
                    <span className="link-text">Galerie</span>            
                </NavLink>
                <NavLink exact to='/event' className="nav-item nav-link">
                    <span className="material-icons md-36">&#xe878;</span>
                        
                    <span className="link-text">Events</span>  
                </NavLink>
                <NavLink exact to='/games' className="nav-item nav-link">
                    <span className="material-icons md-36">&#xea23;</span>
                        
                    <span className="link-text">Games</span>  
                </NavLink>
                <NavLink exact to='/contact' className="nav-item nav-link">
                    <span className="material-icons md-36">&#xe158;</span>
                        
                    <span className="link-text">Contacts</span>  
                </NavLink>

                <li class="nav-item" id="themeButton">
                    <a href="#" class="nav-link" onClick={toggleTheme}>
                    <svg
                        class="theme-icon"
                        id="solarIcon"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fad"
                        data-icon="sun"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        class="svg-inline--fa fa-sun fa-w-16 fa-7x"
                    >
                        <g class="fa-group">
                        <path
                            fill="currentColor"
                            d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z"
                            class="fa-secondary"
                        ></path>
                        <path
                            fill="currentColor"
                            d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z"
                            class="fa-primary"
                        ></path>
                        </g>
                    </svg>
                    <span class="link-text">Theme</span>
                    </a>
                </li>
            </ul>
        </nav>
      </div>
    );
}
  
export default Navigation;