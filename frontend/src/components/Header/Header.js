import React from 'react'
import './Header.css';
import  {Navbar,Container} from 'react-bootstrap';

import Logo from '../../imgs/logo.png';
console.log(Logo);

function Header() {
  return (

<header>
    
        <Navbar className="Header">
            <Container>
            <Navbar.Brand href="#home" >
                <img src={Logo}  alt="Logo" width="30"  height="30" className="d-inline-block align-top"/> <span className="TextColor">INVESTORS DASHBOARD</span>
            </Navbar.Brand>
            </Container>
        </Navbar>
</header>  
  );
}

export default Header;
