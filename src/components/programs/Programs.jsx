import React from 'react'
import './programs.css'
import {programs} from '../../data/programs'
import arrowright from '../../img/rightArrow.png'

const Programs = () => {
  return (
    <div className='programs' id='programs'>
        <div className='programs-head' >
            <span className='stroke-text' >EXPLORE OUR</span>
            <span>PROGRAMS</span>
            <span className='stroke-text' >TP SHAPE YOU</span>
        </div>
        <div className='programs-cards'>
            {programs.map((program)=>{
                return(
                    <div className='program-map-div' >
                        <img src={program.img} alt="" />
                        <h2>{program.title}</h2>
                        <p>{program.text}</p>
                        <div className='join' >
                            <p>Join Now</p>
                            <img src={arrowright} alt="" className='in' />

                        </div>
                    </div>
                )

            })}

        </div>
       
    </div>
  )
}

export default Programs