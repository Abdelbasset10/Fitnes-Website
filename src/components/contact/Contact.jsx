import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='contact-section'>
      <div className='contact-section-leftSide'>
        <div className='orange' >

        </div>
        <p  className='p1' > <span className='stroke-text' >READY TO</span> LEVEL UP </p>
        <p className='p1'>YOUR BODY <span className='stroke-text'>WITH US ?</span></p>
        
      </div>

      <div className='contact-section-rightSide'>
        <form action="">
          <input type="email" placeholder='Enter Your Email' />
          <button>Join now</button>
        </form>

      </div>

    </div>
  )
}

export default Contact