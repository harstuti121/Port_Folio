// import React, { useState } from 'react'
// import './Navbar.css'
// import MobileNav from './MobileNav/MobileNav';

// const Navbar=()=> {
//     const [openMenu,setOpenMenu]=useState(false);
//     const toggleMenu=()=>{
//         setOpenMenu(!openMenu);
//     }

//   return (
//     <>
//         <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
//         <nav className='nav-wrapper'>
//             <div className='nav-content'>
//             <img className="logo" src="" alt="" />
//             <ul>
//                 <li>
//                     <a className="menu-item" href="">Home</a>
//                 </li>
//                 <li>
//                     <a className="menu-item" href="">Skills</a>
//                 </li>
//                 <li>
//                     <a className="menu-item" href="">Work Experience</a>
//                 </li>
//                 <li>
//                     <a className="menu-item" href="">Contact Me</a>
//                 </li>
//                 <button className='contact-btn' onClick={()=>{}}>Hire Me</button>
//             </ul>

//             <button class="menu-btn" onClick={toggleMenu}>
//                 <span
//                 class={"material-symbols-outlined"}
//                 style={{fontSize:"1.8rem"}}
//                 >{openMenu ?"close":"Menu"}</span>
//             </button>
//             </div>
//         </nav>
//     </>
//   )
// }

// export default Navbar
import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from '../Navbar/MobileNav/MobileNav'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <img className="logo" src="" alt="" />
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
                to="skills"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="menu-item"
                to="work-exp"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Work Experience
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
                Contact Me
              </Link>
            </li>
            <button className='contact-btn' onClick={() => {}}>
              Resume
            </button>
          </ul>
          <button className='menu-btn' onClick={toggleMenu}>
            <span className={"material-symbols-outlined"} style={{ fontSize: "1.8rem" }}>
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
