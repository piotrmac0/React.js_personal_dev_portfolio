import React, {useState } from 'react'
import './Contact.scss'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsTelephone } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { AppWrap, MotionWrap } from '../../wrapper';


const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ux5wd8h', 'template_mz42slp', form.current, '51m4TIRe4X1gZm8l7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }

    const [loading, setLoading] = useState(false);

const handleSubmit = () => {
  setLoading(true);
};

    return (
        <div className="container">

            <h5 className="subtitle">Let's talk</h5>
            <h2 className="title">Contact</h2>
          
            
        <div className="contactContainer">
            <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail  />
                        <h4>Email</h4>
                        <h5>mac.piotr0@gmail.com</h5>
                        <a href="mailto:mac.piotr0@gmail.com" target="_blank" rel="noopener noreferrer">Send email</a>
                    </article>

                    <article className="contact__option">
                        <RiMessengerLine  />
                        <h4>Messenger</h4>
                        <h5>Talk in Messengerze</h5>
                        <a href="https://m.me/piotr.macx.5" target="_blank" rel="noopener noreferrer">Messenger</a>
                    </article>

                    <article className="contact__option">
                        <BsTelephone  />
                        <h4>Phone</h4>
                        <h5>+48 535 377 518</h5>
                        <a href="https://wa.me/48535377518" target="_blank" rel="noopener noreferrer">Talk in Whatsapp</a>
                    </article>
                </div>

                <form className="formContact" ref={form} onSubmit={sendEmail}>

                    <input type="text" className="formInput"  name='name' placeholder='Your Name' required />
                    <input type="email" className="formInput" name='email' placeholder='Your email' required />
                    <textarea name="what" className="formInputMess" rows="2" placeholder='What do you need?' required />
                    <textarea name="message" className="formInputMess" rows="7" placeholder='Describe project details' />
                    <textarea name="links" className="formInputMess" rows="4" placeholder='Your inspirations or projects you like' />
                    <div className="check">
                    <input type="checkbox" className="formCheckbox" name='agree' required /><p className="checkP">
I consent to the processing of personal data necessary to handle the form and answer the inquiry</p>
                    </div>
                    <button type="submit" className="btnForm" onClick={handleSubmit} >{!loading ? 'Send' : 'Thanks for message!'}</button>

                </form>

            </div>
            </div>
      
    )
}

export default AppWrap(
    MotionWrap(Contact, 'container'),
    'contact',
    "app__whitebg"
    );