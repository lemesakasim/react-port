import React from 'react'
import './portfolio.css'
import IMG1 from 'C:/Users/lammi/Desktop/react-port/src/assets/portfolio1.jpg'
import IMG2 from 'C:/Users/lammi/Desktop/react-port/src/assets/portfolio2.jpg'
import IMG3 from 'C:/Users/lammi/Desktop/react-port/src/assets/portfolio3.jpg'

const data = [
  {
      id:1,
      image:IMG1,
      title: "Restorant Management",
      github: "https://github.com/lemesakasim",
      demo: "https://dribbble.com/"
  },
  {
    id:2,
    image:IMG2,
    title: "E-Commmerse",
    github: "https://github.com/lemesakasim",
    demo: "https://dribbble.com/"
},
{
  
  id:3,
  image:IMG3,
  title: "Calculator",
  github: "https://github.com/lemesakasim",
  demo: "https://dribbble.com/"
}

]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
      
      {
        data.map(({id,image,title,github,demo})=>{
          return(
      <article className="portfolio__item" key={id}>
        <div className="portfolio__item__image">
           <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
        <div className="portfolio__item-cta">
        <a href={github} className="btn" target='_blank'>Github</a>
        <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
        </div>
      </article>
          )
        })
      }
      
      </div>
    </section>
  )
}

export default portfolio