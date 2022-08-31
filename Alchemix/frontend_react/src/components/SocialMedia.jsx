import React from 'react'
import {  BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaBehance } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
            <div>
              <a href="https://github.com/piotrmac0" target="_blank" rel="noreferrer">
                  <BsGithub />
                </a>
            </div>

            <div>
              <a href="https://www.behance.net/piotrmac1" target="_blank" rel="noreferrer">
                <FaBehance />
              </a>
            </div>

            <div>
              <a href="https://www.linkedin.com/in/piotrmac0/" target="_blank" rel="noreferrer">
                <BsLinkedin />
              </a>
            </div>
                       
            <div>
              <a href="https://twitter.com/PiotrMac0" target="_blank" rel="noreferrer">
                <BsTwitter />
              </a>
            </div>
    </div>
  )
}

export default SocialMedia