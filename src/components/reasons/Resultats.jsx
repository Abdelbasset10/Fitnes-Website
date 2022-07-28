import React from 'react'
import tick from '../../img/tick.png'

const Resultats = ({text}) => {
  return (
    <div className='resultat-section' >
        <img src={tick} alt="" />
        <p>{text}</p>

    </div>
  )
}

export default Resultats