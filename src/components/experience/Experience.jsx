import React from 'react'
import './experience.css'
import { FaHandPointRight } from "react-icons/fa";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skils I have</h5>
      <h2>My Experinece</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
             <h3>Fronted Development</h3>
             <div className="experience__content">
                <article className='experience__details'>
                <FaHandPointRight className='icon'/>
                <div>
                <h5>HTML</h5>
                <small>Experienced</small>
                </div>
                </article>
                <article className="experience__details">
                <FaHandPointRight className='icon'/>
                <div>
                <h5>CSS</h5>
                <small>Intermidiate</small>
                </div>
                </article>
                <article className="experience__details">
                <FaHandPointRight className='icon'/>
                <div>
                <h5>Javascript</h5>
                <small>Experienced</small>
                </div>
                </article>
                <article className="experience__details">
                <FaHandPointRight className='icon'/>
                <div>
                <h5>React</h5>
                <small>Basic</small>
                </div>
                </article>
             </div>
        </div>
        <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
            <article className='experience__details'>
                <FaHandPointRight className='icon'/>
                <div>
                <h5>PHP</h5>
                <small>Intermediate</small>
                </div>
                </article>
                <article className="experience__details">
                <FaHandPointRight className='icon'/>
                <div>
                <h5>Node js</h5>
                <small>Intermidiate</small>
                </div>
                </article>
                <article className="experience__details">
                <FaHandPointRight className='icon'/>
                <div>
                <h5>Mysql</h5>
                <small>Intermidainte</small>
                </div>
                </article>
                <article className="experience__details">
                <FaHandPointRight className='icon'/>
                <div>
                <h5>Python</h5>
                <small>Basic</small>
                </div>
                </article>
             </div>
        </div>
      </div>
    </section>
  )
}

export default Experience