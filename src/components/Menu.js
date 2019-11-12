
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logoNav from '../assets/images/Logo_principal.png'
import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from 'react-bootstrap';

class Menu extends Component {
    render() {
        return (
            <Navbar inverse fixedTop expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        src={logoNav}
                        width="130"
                        height="50"
                        className="justify-content-center"
                        alt="Hiir logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

                    <Nav>
                        <Nav.Link href="#deets">Acceso a clientes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }

}
export default Menu