import React , {useState} from 'react'

import logo from '../../img/logo.png'
import bars from '../../img/bars.png'
import './navbar.css'

const Navbar = () => {
  const [bar,setBar]=useState(false)
  const OpenBar = ()=>{
    setBar(!bar)
  }

  const CloseBar = () =>{
    setBar(false)
  }
  return (
    <div className='navbar'>
        <img src={logo} alt="" />

        <ul className='nav-links'>
            <li><a href="#home">Home</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#why">Why Us</a></li>
            <li><a href="#plans">plans</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
        </ul>

        <div className='mobile-version'>
          <img src={bars} alt="" onClick={OpenBar} />
          {bar &&(
            <ul className='nav-links-mobile'>
                <li onClick={CloseBar} ><a href="#home">Home</a></li>
                <li onClick={CloseBar}><a href="#programs">Programs</a></li>
                <li onClick={CloseBar}><a href="#why">Why Us</a></li>
                <li onClick={CloseBar}><a href="#plans">plans</a></li>
                <li onClick={CloseBar}><a href="#testimonials">Testimonials</a></li>
            </ul>
          )}

        </div>

    </div>
  )
}

export default Navbar