import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar} from 'react-bootstrap';
import "./Navbar.css";

function Navtop() {
    
  const location = useLocation();
    return (
        <>
        <Navbar expand="lg" sticky="top" className="navbar">
            <Navbar.Brand href="Acting-Portfolio/" className="navbar-brand" id="nameTitle" >Hannah Ryen</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                
            <Nav id="navbarNav">
                
                    <Link className={location.pathname==="Acting-Portfolio/" ? "mr-2 nav-item active": "mr-2 nav-item" } to="Acting-Portfolio/">Home</Link>
                    
                   
                  
                    <Link className={location.pathname==="Acting-Portfolio/about" ? "mr-2 nav-item active": "mr-2 nav-item"} to="Acting-Portfolio/about">About Me</Link>
                    
                   
                    <Link className={location.pathname==="Acting-Portfolio/resume" ? "mr-2 nav-item active": "mr-2 nav-item"} to="Acting-Portfolio/resume">Resume</Link>
                    
                    <Link className={location.pathname==="Acting-Portfolio/reel" ? "mr-2 nav-item active": "mr-2 nav-item"} to="Acting-Portfolio/reel">Reel</Link>

                    
                   
                    <Link className={location.pathname==="Acting-Portfolio/photos" ? "mr-2 nav-item active": "mr-2 nav-item"} to="/photos">Photos</Link>
                   
                    <Link className={location.pathname==="Acting-Portfolio/contact" ? "mr-2 nav-item active contactMeNav": "mr-2 nav-item contactMeNav"} to="Acting-Portfolio/contact">Contact Me</Link>
            
            </Nav>
           
            </Navbar.Collapse>
        </Navbar>


      
</>
    )
}

export default Navtop;  