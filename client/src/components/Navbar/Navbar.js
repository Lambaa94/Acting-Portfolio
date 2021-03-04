import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar} from 'react-bootstrap';
import "./Navbar.css";

function Navtop() {
    
  const location = useLocation();
    return (
        <>
        <Navbar expand="lg" sticky="top" className="navbar">
            <Navbar.Brand href="/" className="navbar-brand" id="nameTitle" >Hannah Ryen</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                
            <Nav id="navbarNav">
                
                    <Link className={location.pathname==="/" ? "mr-2 nav-item active": "mr-2 nav-item" } to="/">Home</Link>
                    
                   
                  
                    <Link className={location.pathname==="/about" ? "mr-2 nav-item active": "mr-2 nav-item"} to="/about">About Me</Link>
                    
                   
                    <Link className={location.pathname==="/resume" ? "mr-2 nav-item active": "mr-2 nav-item"} to="/resume">Resume</Link>
                    
                    <Link className={location.pathname==="/reel" ? "mr-2 nav-item active": "mr-2 nav-item"} to="/reel">Reel</Link>

                    
                   
                    <Link className={location.pathname==="/photos" ? "mr-2 nav-item active": "mr-2 nav-item"} to="/photos">Photos</Link>
                   
                    <Link className={location.pathname==="/contact" ? "mr-2 nav-item active contactMeNav": "mr-2 nav-item contactMeNav"} to="/contact">Contact Me</Link>
            
            </Nav>
           
            </Navbar.Collapse>
        </Navbar>


      
</>
    )
}

export default Navtop;  