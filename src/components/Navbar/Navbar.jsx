import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from '../Navbar/MobileNav/MobileNav';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <p></p>
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
              Resume
            </button>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span className="material-symbols-outlined" style={{ fontSize: "1.8rem" }}>
              {openMenu ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
