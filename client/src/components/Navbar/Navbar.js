import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import "./Navbar.css";

function Navtop() {
    
  const location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top sticky-top">
            <a href="/" className="navbar-brand" id="nameTitle">Hannah Ryen</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="">=</span>
            </button>
            <div className="collapse navbar-collapse nav justify-content-end" id="navbarNav">
                
                    <Link className={location.pathname==="/" ? "mr-2 navbarLink active": "mr-2 navbarLink" } to="/">Home</Link>
                    
                    
                  
                    <Link className={location.pathname==="/about" ? "mr-2 navbarLink active": "mr-2 navbarLink"} to="/about">About Me</Link>
                    
                   
                    <Link className={location.pathname==="/resume" ? "mr-2 navbarLink active": "mr-2 navbarLink"} to="/resume">Resume</Link>
                    
                   
                    <Link className={location.pathname==="/reel" ? "mr-2 navbarLink active": "mr-2 navbarLink"} to="/reel">Reel</Link>

                    
                    <Link className={location.pathname==="/photos" ? "mr-2 navbarLink active": "mr-2 navbarLink"} to="/photos">Photos</Link>
                    <Link className={location.pathname==="/contact" ? "mr-2 navbarLink active": "mr-2 navbarLink"} to="/contact">Contact Me</Link>
            
            </div>
        </nav>

    )
}

export default Navtop;  