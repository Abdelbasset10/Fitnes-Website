import React from 'react'
import './hero.css'
import Figures from './Figures'
import Navbar from '../navbar/Navbar'
import heart from '../../img/heart.png'
import bg from '../../img/hero_image.png'
import bg2 from '../../img/hero_image_back.png'
import calories from '../../img/calories.png'

const Hero = () => {
  return (
    <div className='hero-section' id='home'>
      <div className='blur hero-blur' ></div>
      <div className='hero-setion-leftSide' >
        <Navbar />
        <div className='hero-section-fitness-div'>
          <div></div>
          <span>The best fitness club in the town</span>
        </div>
        <div>
          <span className='stroke-text' >SHAPE</span> <span>YOUR</span>
        </div>
        <div>
         <span>IDEAL BODY</span>
        </div>
        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>

        <div className='hero-section-leftSide-figures'>
          <Figures number="+ 140" text="EXPERT COACHES" />
          <Figures number="+ 978" text="MEMBERS JOINED" />
          <Figures number="+ 50" text="FITNESS PROGRAMS"/>
        </div>

        <div className='hero-section-letSide-buttons'>
          <button className='btn' >Get Started </button>
          <button className='btn' > Learn More</button>
        </div>   
      </div>

      
      <div className='hero-setion-rightSide' >
        <button  >Join Now</button>

        <div className='hero-section-rightSide-heart'>
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        <img src={bg} alt="" className='hero-image' />
        <img src={bg2} alt="" className='hero-image2' />

        <div className='hero-section-rightSide-calories'>
          <img src={calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span>220 Kcal</span>
          </div>
          


        </div>
      </div>

    </div>
  )
}

export default Hero