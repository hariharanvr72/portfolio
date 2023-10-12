import React, { useRef } from 'react'
import './contact.css'
import FbIcon from '../../assets/facebook-icon.png'
import InstaIcon from '../../assets/instagram.png'
import YoutubeIcon from '../../assets/youtube.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_7rltrsj', 'template_s4906sn', form.current, 'o-Vr•••••••••••••••••')
          .then((result) => {
               console.log(result.text);
               e.target.reset();
               alert('Email Sent');
          }, (error) => {
               console.log(error.text);
          });
        };
  return (
   <section id='contactPage'>
    <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='name' name='your_name' />
            <input type="email" className="email" placeholder='your email' name='your_email' />
            <textarea name="message" className="msg" rows={5} placeholder='your message'></textarea>
            <button type="submit" value="send" className="submitBtn">Submit</button>
            <div className="links">
                <img src={FbIcon} alt="Facebook" className="link" />
                <img src={InstaIcon} alt="Instagram" className="link" />
                <img src={YoutubeIcon} alt="Youtube" className="link" />
            </div>

        </form>
    </div>
   </section> 
  )
}

export default Contact
