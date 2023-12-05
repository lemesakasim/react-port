import React from 'react'
import './about.css'
import Me2 from '../../assets/me_about2.jpg'
import { FaAward } from "react-icons/fa6";
import { FaUsersLine } from "react-icons/fa6";
import { FaFolder } from "react-icons/fa";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={Me2} alt="About Image" />
            </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className='about__icon'/>
                 <h5>Experience</h5>
                 <small>1 Years Working</small>
              </article>
              <article className="about__card">
                <FaUsersLine className='about__icon'/>
                 <h5>Clients</h5>
                 <small>5 Clients</small>
              </article>
              <article className="about__card">
                <FaFolder className='about__icon'/>
                 <h5>Projects</h5>
                 <small>5 Projects</small>
              </article>              
            </div>
            <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident odio dolores sint, architecto doloribus libero quo rem fugit quibusdam enim perferendis nesciunt omnis necessitat
                  ibus accusantium similique eum reiciendis beatae aut.
                </p>
                <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
