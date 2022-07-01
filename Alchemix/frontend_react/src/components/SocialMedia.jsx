import React from 'react'
import {  BsInstagram } from 'react-icons/bs';
import { FaBehance, FaFacebook } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
            <div>
              <a href="https://www.instagram.com/alchemix_digital/" target="_blank" rel="noreferrer">
                  <BsInstagram />
                </a>
            </div>

            <div>
                <a href="https://www.facebook.com/Alchemixdigital-110553738364187/" target="_blank" rel="noreferrer">
                  <FaFacebook />
                </a>
            </div>
                       
            <div>
              <a href="https://www.behance.net/piotrmac1" target="_blank" rel="noreferrer">
                <FaBehance />
              </a>
            </div>
    </div>
  )
}

export default SocialMedia