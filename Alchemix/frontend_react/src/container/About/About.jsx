import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './About.scss';

/*
const abouts = [
  { title: 'Pozyskiwanie nowych klientów', description: 'wykorzystując możliwości internetu', imgUrl: images.about01 },
  { title: 'Identyfikacja wizualna', description: 'tworząc wszelakie grafiki - logo, plakaty, wizytówki', imgUrl: images.about02},
  { title: 'Strony internetowe', description: 'nowoczesne i funkcjonalne', imgUrl: images.about03 }
];
*/


const About = () => {
  
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);
  

  return (
 <>
          <h2 className="head-text"><span>My Services</span> and <span>specializations</span></h2>
          <div className="app__profiles">
              {abouts.map((about, index) => (
                <motion.div
                    whileInView={{ opacity:1}}
                    whileHover={{scale:1.1}}
                    transition={{duration:0.5, type: 'tween'}}
                    className="app__profile-item"
                    key={about.title + index}
                >
                       <img src={urlFor(about.imgUrl)} alt={about.title} />
                    <h2 className="bold-text" style={{marginTop:20}}>{about.title}</h2>
                    <p className="p-text" style={{marginTop:10}}>{about.description}</p>
                    
                </motion.div>
              ))}
          </div>
 
 </>
) 
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  "app__whitebg"
  );