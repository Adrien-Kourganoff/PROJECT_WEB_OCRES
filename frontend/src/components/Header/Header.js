import React from 'react'
import './Header.css';
import  {Navbar,Container} from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

import Logo from '../../imgs/logo.png';
console.log(Logo);

function Header() {
  return (

<header>
    
        <Navbar className="Header">
            <Container >
                  <Navbar.Brand className="mr-auto p-2" href="" >
                    <span className="TextColor">INVESTORS DASHBOARD</span>
                  </Navbar.Brand>


                  <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                              <button style={{marginRight:"20px"}} className="btn navbar-right float-right" type="submit">
                                    Widgets
                              </button>
                         
                              <button className="float-right btn navbar-right" type="submit" >
                                    Admin
                              </button>

                </div>
                          
                  
                  
                  
                  
                



            </Container>
        </Navbar>
</header>  
  );
}

export default Header;
