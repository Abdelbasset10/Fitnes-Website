import React from 'react'

const Figures = ({number,text}) => {
  return (
    <div className='figures'>
        <span>{number}</span>
        <span>{text}</span>

    </div>
  )
}

export default Figures