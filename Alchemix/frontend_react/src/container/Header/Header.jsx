import React from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';
import {  BsInstagram } from 'react-icons/bs';
import { FaBehance, FaFacebook } from 'react-icons/fa';


const scaleVariants = {
  whileInView: {
    scale:[0,1],
    opacity:[0,1],
    transition: {
      duration:1,
      ease: 'easeInOut',
    },
  },
};


const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <div>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Web specialist</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Web Dev & UX/UI Designer</p>
          <p className="p-text">with marketing knowledge</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.dapp, images.social, images.mobil].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');

/*

const Header = () => (

  <div id="home" className="app__header app__flex">

    <motion.div
      whileInView={{x:[-100, 0], opacity:[0,1]}}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
                  <h1 className="head-text">Piotr Mac</h1>

          </div>

          <div className="mobileSocial">
          <div>
              <a href="https://www.behance.net/piotrmac1" target="_blank" rel="noreferrer">
                <FaBehance /></a>
            </div>
            <div>
              <a href="https://www.instagram.com/alchemix_digital/" target="_blank" rel="noreferrer">
                  <BsInstagram /></a>
            </div>

            <div>
                <a href="https://www.facebook.com/Alchemixdigital-110553738364187/" target="_blank" rel="noreferrer">
                  <FaFacebook /></a>
            </div>
                       
          </div>

          <div className="tag-cmp app__flex">
              <p className="p-text">Wykorzystując możliwości internetu</p>
              <p className="p-text">kreatywnie rozwijamy firmy </p>
          </div>
        </div>
    </motion.div>


    <motion.div 
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
        {[images.social, images.dapp, images.mobil].map((circle, index) =>(
          <div className="circle-cmp app__flex" key={`circle-${index}`} >
              <img src={circle} alt="profile_bg" />
          </div>
        ))}
     </motion.div>   


    

  </div>
);

export default AppWrap(Header, 'home');

*/



/*

import React from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';


const scaleVariants = {
  whileInView: {
    scale:[0,1],
    opacity:[0,1],
    transition: {
      duration:1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (

  <div id="home" className="app__header app__flex">

    <motion.div
      whileInView={{x:[-100, 0], opacity:[0,1]}}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
              <span>👋</span>
              <div style={{marginLeft:20}}>
                  <p className="p-text">Cześć, jesteśmy</p>
                  <h1 className="head-text">Alchemix.digital</h1>
              </div>
          </div>

          <div className="tag-cmp app__flex">
              <p className="p-text">Pomagamy rozwijąć firmy</p>
              <p className="p-text">i pozyskiwać dla nich klientów</p>
          </div>
        </div>
    </motion.div>


    <motion.div
      whileInView={{ opacity:[0,1]}}
      transition={{duration:0.5, delayChildren:0.5}}
      className="app__header-img"
    >
        <img src={images.Headr1} alt="profile_bg" />
        <motion.img
          whileInView={{scale:[0,1]}}
          transition={{duration:1, ease:'easeInOut'}}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
    </motion.div>


    <motion.div 
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
        {[images.graphicdesign, images.socialm, images.programming].map((circle, index) =>(
          <div className="circle-cmp app__flex" key={`circle-${index}`} >
              <img src={circle} alt="profile_bg" />
          </div>
        ))}
     </motion.div>   


    

  </div>
);

export default AppWrap(Header, 'home');

       < */
