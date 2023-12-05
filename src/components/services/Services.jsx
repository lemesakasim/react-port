import React from 'react'
import './services.css'
import { FaCheck } from "react-icons/fa";

const services = () => {
  return (
    <section id='services'>
        <h5>What i offer</h5>
        <h2>Services</h2>
        <div className="container service__container">
         <article className="service">
          <div className="service_head">
            <h3>UI/UX design</h3>  
          </div>  
          <ul>
            <li>
               <FaCheck className='icon'/>
              <p>work on individual pages, buttons, and interactions.</p>
            </li>
            <li>
               <FaCheck className='icon'/>
              <p>making sure they are polished and functional.</p>
            </li>
            <li>
               <FaCheck className='icon'/>
              <p>ensuring the collective user flow of a site, service, or app is fully realized and consistent.</p>
            </li>

          </ul>
         </article>
         <article className="service">
         <div className="service_head">
            <h3>Web Development</h3>  
          </div>  
          <ul>
            <li>
               <FaCheck className='icon'/>
              <p>design, maintain, and optimize websites and other web-based applications for consumer use.</p>
            </li>
            <li>
               <FaCheck className='icon'/>
              <p> build websites and ensure they perform reliably and efficiently.</p>
            </li>
            <li>
               <FaCheck className='icon'/>
              <p>responsible for the website’s performance and capacity.</p>
            </li>
            
          </ul>
         </article>
         <article className="service">
         <div className="service_head">
            <h3>Mobile Application Development</h3>  
          </div>  
          <ul>
            <li>
               <FaCheck className='icon'/>
              <p>create software for phones and tablets.</p>
            </li>
            <li>
               <FaCheck className='icon'/>
              <p>aware of how to deal with device fragmentation, often working closely with a designer to achieve the best user experience (UX) results.</p>
            </li>
            <li>
               <FaCheck className='icon'/>
              <p>I develop mobile application by using flutter.</p>
            </li>
            
          </ul>
         </article>
        </div>   
    </section>
  )
}

export default services