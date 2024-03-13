import React, { useContext, useEffect, useState } from 'react'
import './Keyss.css'
import { CalculatorContext } from '../../Context/CalculatorContext'
const Keys = (props) => {
  // const { express } = useContext(CalculatorContext);
  // console.log(express + " is global right");
  return (
    <div className='keyss' >
      <span className='keysspan'>{props.value}</span></div>
  )
}

export default Keys