import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>

      <ul className="app__navbar-links">
          <li className="app__flex p-text">
          <a href="#home">Home</a>
          </li >
          <li className="app__flex p-text">
          <a href="#about">O Nas</a>
          </li>
          <li className="app__flex p-text">
          <a href="#work">Portoflio</a>
          </li>
          <li className="app__flex p-text">
          <a href="#skills">Skille</a>
          </li>
          <li className="app__flex p-text">
          <a href="#footer">Kontakt</a>
          </li>
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className="app__navbar-links">
          <li className="app__flex p-text">
          <a href="#home" onClick={() => setToggle(false)}>Home</a>
          </li >
          <li className="app__flex p-text">
          <a href="#about" onClick={() => setToggle(false)}>O Nas</a>
          </li>
          <li className="app__flex p-text">
          <a href="#work" onClick={() => setToggle(false)}>Portoflio</a>
          </li>
          <li className="app__flex p-text">
          <a href="#skills" onClick={() => setToggle(false)}>Skille</a>
          </li>
          <li className="app__flex p-text">
          <a href="#footer" onClick={() => setToggle(false)}>Kontakt</a>
          </li>
      </ul>
            
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;