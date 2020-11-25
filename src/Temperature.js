import './temperature.css'
import React, { useState } from 'react'

const Temperature = () => {
  const [Temp,setTemp] = useState(10);

  return (
    <div className="card">
      <div className="temp">
        {Temp} C
      </div>
      <div className="changeButtons">
        <div className="increase" onClick={e => {setTemp(Temp+1)}}>I</div>
        <div className="decrease" onClick={e => {setTemp(Temp-1)}}>D</div>
      </div>
    </div>
  )
}

export default Temperature
