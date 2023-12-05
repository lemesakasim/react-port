import React from 'react'
import './testimonials.css'

import AVATAR1 from 'C:/Users/lammi/Desktop/react-port/src/assets/avatar1.jpg'
import AVATAR2 from 'C:/Users/lammi/Desktop/react-port/src/assets/avatar2.jpg'
import AVATAR3 from 'C:/Users/lammi/Desktop/react-port/src/assets/kusa.jpeg'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [{
  id:1,
  name:"Haataatu Tolosa",
  image:AVATAR1,
  title:"Lorem ipsum dolor sit, amet consectetur adipisicing."
},
{
  id:2,
  name:"Kengitan Kabeto",
  image:AVATAR2,
  title:"Lorem ipsum dolor sit, amet consectetur adipisicing."
},
{
  id:3,
  name:"Yaduma Lachisa",
  image:AVATAR3,
  
}
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
       <h5>Review from clients</h5>
       <h2>Testimonials</h2>

       <Swiper className="container testimonial__container"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          >
       {
            data.map(({id,name,image,title}) =>{
              return(<SwiperSlide className="testimonial" key={id}>
              <div className="client__avater">
                <img src={image} alt={name}/>
              </div>
              <h3 className='client__name'>{name}</h3>
              <small className='client__review'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quidem recusandae ipsa nam, praesentium ratione?
              </small>
             </SwiperSlide>)
            })
           } 
       </Swiper>
    </section>
  )
}

export default Testimonials



          