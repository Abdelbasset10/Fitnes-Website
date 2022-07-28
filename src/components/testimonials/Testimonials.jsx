import React , {useState} from 'react'
import './testimonials.css'
import {testData} from '../../data/testData'
import leftarrow from '../../img/leftArrow.png'
import rightarrow from '../../img/rightArrow.png'

const Testimonials = () => {
    const[index,setIndex]=useState(0)
    const RightHandle = ()=>{
        if(index === testData.length -1){
           return setIndex(0)
        }
        setIndex(index +1)
    }
    const LeftHandle = ()=>{
        if(index ===0){
           return setIndex(testData.length -1)
        }
        setIndex(index -1)
    }
  return (
    <div className='testimonials-section' id='testimonials'>
        
        
            <div className='testimonials-section-flex-leftSide'>
                <p className='p1' >TESTIMONIALS</p>
                <span   className='stroke-text size' >WHAT THEY</span>
                <span className='size' style={{  color:"white",fontWeight:"bold"}}>SAY ABOUT US</span>
                <p className='p2'>{testData[index].text}</p>
                <div className='flex'>
                    <span className='p2' style={{color:"var(--orange)"}} >{testData[index].name}</span> <span style={{color:"white"}} > -{testData[index].job}</span> 
                </div>
            </div>
            
            <div className='testimonials-section-flex-rightSide'>
                
                    <img src={testData[index].img} alt="" />
                
                
                <div className='arrows' >
                    <img style={{cursor: "pointer",width: "2rem",height:"2rem"}} src={leftarrow} onClick={LeftHandle}  alt="" />
                    <img style={{cursor: "pointer",width: "2rem",height:"2rem"}}src={rightarrow} onClick={RightHandle}  alt="" />
                </div>

            </div>

        


    </div>
  )
}

export default Testimonials