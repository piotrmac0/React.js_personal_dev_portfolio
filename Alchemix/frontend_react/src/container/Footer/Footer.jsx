
import React, {useState} from 'react';
import { useRef } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

import emailjs from 'emailjs-com'

import './Footer.scss';

const Footer = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4etu7cu', 'template_335cndr', form.current, '51m4TIRe4X1gZm8l7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();

       

    }
    // eslint-disable-next-line
    {/*
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
{/*
  const { username, email, message } = formData;
 
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    

    
  };
*/}

const [isFormSubmitted, setIsFormSubmitted] = useState(false);
const [loading, setLoading] = useState(false);

const handleSubmit = () => {
  setLoading(true);

 

   
};

  return (
    <>
      <h2 className="head-text">Kontakt</h2>
      <p className="p-text">Zrób sobie przerwę i porozmawiajmy</p>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:mac.piotr0@gmail.com" className="p-text">Email: mac.piotr0@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+48 535 377 518" className="p-text">Telefon: +48 535 377 518</a>
        </div>
      </div>
      
      {!isFormSubmitted ? (
         <div className="app__footer-form app__flex">
        <form ref={form} className="app__footer-form app__flex" onSubmit={sendEmail}>
        <div className="app__flex">
            <input type="text" name='name' className="p-text" placeholder='Twoje imię i nazwisko' required />
         </div>   
         <div className="app__flex">
            <input type="email" name='email' className="p-text" placeholder='Twój email' required />
         </div>
            <div className="app__flex">
            <textarea name="message" rows="7" className="p-text" placeholder='Twoja wiadomość' required />
            </div>
            <button type="submit"  className="p-text" onClick={handleSubmit} >{!loading ? 'Wyślij' : 'Dziękujemy za wiadomość!'}</button>
  

        </form>
        </div>
          ) : (
            <div>
            <h3 className="head-text">
              Dziękujemy za kontakt!
            </h3>
          </div>
        )}
       
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'footer',
  'app__whitebg',
);