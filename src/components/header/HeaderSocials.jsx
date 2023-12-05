import React from 'react'
import  {FaGithub}  from "react-icons/fa";
import  {FaFacebookF}  from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://facebook.com" target='_blank'><FaFacebookF/></a>
        <a href="https://github.com" target='_blank'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials