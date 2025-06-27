import React from 'react';
import "./MobileNav.css";
import { Link } from "react-scroll";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div 
      className={`mobile-menu ${isOpen ? "active" : ""}`} 
      onClick={toggleMenu}
    >
      <div className="mobile-menu-container" onClick={(e) => e.stopPropagation()}>
        <p>Harstuti</p>
        <ul>
          <li>
            <Link
              className="menu-item"
              to="hero"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="menu-item"
              to="about"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="menu-item"
              to="projects"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="menu-item"
              to="contact"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
          <button className="contact-btn" onClick={() => {}}>
            Hire Me
          </button>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
