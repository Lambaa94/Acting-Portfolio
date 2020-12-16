import React from 'react';
import { Navbar, NavDropdown, Form, FormControl, Button, Nav, Row } from 'react-bootstrap';
import "./Navbar.css";


function Navtop() {



    return (
        <>
       
            <Navbar bg="light" expand="lg" id="navTop">
                <Navbar.Brand href="#home">Sample Dawg</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Anotha One</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Anotha action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Somethin Else</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">okokok</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        </>
    );
}

export default Navtop;