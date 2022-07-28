import React from 'react'
import {plans} from '../../data/plans'
import whitetick from '../../img/whiteTick.png'
import arrowright from '../../img/rightArrow.png'
import './plans.css'


const Plans = () => {
  return (
    <div className='plans-section' id='plans'>
        <div className='blur plan-blur-left' ></div>
        <div className='blur plan-blur-right' ></div>
        <p className='p-head' > <span className='stroke-text' >READY TO START </span>YOUR JOURNEY <span className='stroke-text' >NOW WITHUS</span> </p>
        <div  className='cards-plans'>
            {plans.map((plan)=>{
                return(
                    <div className='inside-cardplans' >
                        <img src={plan.img} alt="" />
                        <p style={{color:"white" , fontWeight:"bold"}} >{plan.title}</p>
                        <p style={{fontSize : "3rem", fontWeight:"bold",color:"white", marginBottom:"0rem"}} > {plan.price} </p>

                        <div className='flex'>
                            <img src={whitetick} alt="" />
                            <p style={{color:"white"}} > {plan.text1} </p>
                        </div>
                        <div className='flex'>
                            <img src={whitetick} alt="" />
                            <p style={{color:"white"}}> {plan.text2} </p>
                        </div>
                        <div className='flex'>
                            <img src={whitetick} alt="" />
                            <p style={{color:"white"}}> {plan.text3} </p>
                        </div>

                        <div className='flex'>
                            <p style={{color:"white"}}> See more benefits </p>
                            <img src={arrowright} alt="" />
                        </div>
                        <button>Join now</button>
                       
                    </div>
                )
            })}
           

        </div>
    </div>
  )
}

export default Plans