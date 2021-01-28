import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav, Dropdown } from 'react-bootstrap';
import "./Navbar.css";

function Navtop() {
    
  const location = useLocation();
    return (
        <Nav className="navbar navbar-expand-lg fixed-top sticky-top">
            <a href="/" className="navbar-brand" id="nameTitle">Hannah Ryen</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="">=</span>
            </button>
            <div className="collapse navbar-collapse nav justify-content-end" id="navbarNav">
                
                    <Link className={location.pathname==="/" ? "mr-2 active": "mr-2 nav-item" } to="/">Home</Link>
                    
                   
                  
                    <Link className={location.pathname==="/about" ? "mr-2 nav-item active": "mr-2 nav-item"} to="/about">About Me</Link>
                    
                   
                    <Link className={location.pathname==="/resume" ? "mr-2 nav-item active": "mr-2 nav-item"} to="/resume">Resume</Link>
                    
                    <Link className={location.pathname==="/reel" ? "mr-2 nav-item active": "mr-2 nav-item"} to="/reel">Reel</Link>

                    
                   <Dropdown>
                    <Link className={location.pathname==="/photos" ? "mr-2 nav-item active": "mr-2 nav-item"} to="/photos">Photos</Link>
                </Dropdown>
                    <Link className={location.pathname==="/contact" ? "mr-2 nav-item active": "mr-2 nav-item"} to="/contact">Contact Me</Link>
            
            </div>
        </Nav>

    )
}

export default Navtop;  