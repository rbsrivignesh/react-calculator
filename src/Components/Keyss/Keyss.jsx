import React, { useEffect, useState } from 'react'
import './Keyss.css'
const Keys = (props) => {
 
  return (
    <div className='keyss' >
      <span className='keysspan'>{props.value}</span></div>
  )
}

export default Keys