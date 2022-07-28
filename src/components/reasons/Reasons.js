import React from 'react'
import './reasons.css'
import Resultats from './Resultats'
import img1 from '../../img/image1.png'
import img2 from '../../img/image2.png'
import img3 from '../../img/image3.png'
import img4 from '../../img/image4.png'
import NB from '../../img/nb.png'
import adidas from '../../img/adidas.png'
import nike from '../../img/nike.png'

const Reasons = () => {
  return (
    <div className='reasons-sections' id='why'>
        <div className='reasons-sections-leftSide'>
          <div className='left-side'>
            <img src={img1} alt="" />
          </div>

          <div className='right-side' >
            <div>
              <img src={img2} alt="" />
            </div>
            <div className='rightright-side' >
              <img src={img3} alt="" />
              <img src={img4} alt="" />
            </div>
          </div>
        </div>

        <div className='reasons-sections-rightSide'>
            <h3> Some Reasons</h3>
            <p> <span className='stroke-text' >WHY</span> CHOOSE US? </p>
            <div className='imgs' >
              <Resultats text="OVER 140+ EXPERT COACHS" />
              <Resultats text="TRAIN SMARTER AND FASTER THAN BEFORE" />
              <Resultats text="1 FREE PROGRAM FOR NEW MEMBER" />
              <Resultats text="RELIABLE PARTNERS" />
            </div>

            <span style={{ fontSize:"1rem" , color: "var(--gray)" }} >OUR PARTNERS</span>
            <div className='sponsors' >
              <img src={NB} alt="" />
              <img src={nike} alt="" />
              <img src={adidas} alt="" />
            </div>
          
            
            

        </div>

    </div>
  )
}

export default Reasons