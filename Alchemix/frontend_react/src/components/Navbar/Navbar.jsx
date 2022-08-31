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
          <a href="#about">Services</a>
          </li>
          <li className="app__flex p-text">
          <a href="#work">Portfolio</a>
          </li>
          <li className="app__flex p-text">
          <a href="#team">About</a>
          </li>
          <li className="app__flex p-text">
          <a href="#skills">Skills</a>
          </li>
          <li className="app__flex p-text">
          <a href="#contact">Contact</a>
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
          <a href="#about" onClick={() => setToggle(false)}>services</a>
          </li>
          <li className="app__flex p-text">
          <a href="#work" onClick={() => setToggle(false)}>Portoflio</a>
          </li>
          <li className="app__flex p-text">
          <a href="#team" onClick={() => setToggle(false)}>About</a>
          </li>
          <li className="app__flex p-text">
          <a href="#skills" onClick={() => setToggle(false)}>Skills</a>
          </li>
          <li className="app__flex p-text">
          <a href="#contact" onClick={() => setToggle(false)}>Contact</a>
          </li>
      </ul>
            
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;