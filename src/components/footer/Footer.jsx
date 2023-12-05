import React from 'react'
import './footer.css'
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="" className="footer__logo">LAMMI</a>

      <ul className='permalinks'>
        <li><a href='#header'>Header</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Projects</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/lemesa-kasim-b4b8a3235/"><FaLinkedinIn/></a>
        <a href="https://t.me/@lammii99/"><FaTelegram/></a>
        <a href="https://facebook.com"><FaFacebookF/></a>  
      </div> 
      <div className="footer__copyright">
        <small>&copy; Lemesa Kasim, All right resived</small>
        </div>    
    </footer>
  )
}

export default Footer