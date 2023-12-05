import React from 'react'
import './contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tmvuhys', 'template_e5lfr5c', form.current, '2cVaT2dH2y69m_GOP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
       <h5>Get in Touch</h5>
       <h3>Contact Me</h3>

       <div className="container contact__container">
        <div className="contact__option">
          <article className="contact__options">
          <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>lemesakasim32
            </h5>
            <a href="mailto:lemesakasim32@gmail.com" target='__blank'>Send a messege</a>
          </article>
          <article className="contact__options">
            <BsLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Mylinkedin</h5>
            <a href="mailto:lemesakasim32@gmail.com" target='__blank'>Send a messege</a>
          </article>
          <article className="contact__options">
          <FaWhatsappSquare className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+251994931530</h5>
            <a href="https://api.whatsapp.com/send?phone+251994931532" target='__blank'>Send a messege</a>
          </article>
        </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" id="" placeholder='Enter your name' required/>
            <input type="text" name="email" id="" placeholder='Your Email' required />
            <textarea name="message" id="" cols="30" rows="10" required placeholder='Your Passege'></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
          </form>
       </div>
    </section >
  )
}

export default Contact