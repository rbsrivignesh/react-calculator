import React, { useEffect, useState } from 'react'
import './Keys.css'
const Keys = (props) => {
 
  return (
    <div className='keys' >
      <span className='keyspan'>{props.value}</span></div>
  )
}

export default Keys