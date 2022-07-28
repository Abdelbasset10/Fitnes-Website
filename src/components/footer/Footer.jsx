import React from 'react'
import instagram from '../../img/instagram.png'
import github from '../../img/github.png'
import linkedIn from '../../img/linkedin.png'
import logo from '../../img/logo.png'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-section'>
        <div className='content' >
            <div className='social-media' >
                <img src={github} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedIn} alt="" />
            </div>
            <img style={{width:"20%"}} src={logo} alt="" />
        </div>
        <div className='blur footer-blur-1' ></div>
        <div className='blur footer-blur-2' ></div>

    </div>
  )
}

export default Footer