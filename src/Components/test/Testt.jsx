import React, { useContext } from 'react'
import { CalculatorContext } from '../../Context/CalculatorContext'

const Testt = (props) => {
    // console.log(props)
    const {setexpress,setequal,setcurrent,setstartzero,setprev,setmul,setresult,setprevexpress,setprevsafe}=useContext(CalculatorContext);
    const {sethist}=useContext(CalculatorContext);

  return (
    <div onClick={()=>{setexpress(`${props.exp}`);sethist("true");setequal(`${props.equal}`);setcurrent(`${props.current}`);setstartzero(`${props.startzero}`);setresult(`${props.result}`);setprev(`${props.prev}`);setmul(`${props.mul}`);setprevexpress(`${props.prevexpress}`);setprevsafe(`${props.prevsafe}`)}}>{props.exp}</div>
  )
}

export default Testt