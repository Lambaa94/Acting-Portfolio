import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";

function Navbar() {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top sticky-top">
            <a className="navbar-brand">Your Name</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="fas fa-hamburger fa-2x"></span>
            </button>
            <div className="collapse navbar-collapse nav justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        Skills
                      </Link>
                    
                    </li>
                    <li className="nav-item">
                    <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About Me
              </Link>
                    
                    </li>
                    <li className="nav-item">
                    <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Portfolio
              </Link>
                    
                    </li>
                    <li className="nav-item">
                    <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact Me
              </Link>

                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;  