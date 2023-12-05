import React from 'react'
import './nav.css'
import { IoHomeSharp } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { FaServicestack } from "react-icons/fa";
import { MdContactEmergency } from "react-icons/md";
import { useState } from 'react';

const Nav = () => {

  let [activeNav,setActiveNav] = useState("#")

  return (
    <nav id='container'>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#'? 'active': ''} ><IoHomeSharp/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about'? 'active': ''}><FcAbout/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience'? 'active': ''}><GiGiftOfKnowledge/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services'? 'active': ''}><FaServicestack/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact'? 'active': ''}><MdContactEmergency/></a>
    </nav>
  )
}

export default Nav