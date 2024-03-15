import React, { useContext, useEffect } from 'react'
import { CalculatorContext } from '../../Context/CalculatorContext'
import './Testt.css';

const Testt = (props) => {
  // console.log(props)
  const { settest, result, setexpress, setequal, setcurrent, setstartzero, setprev, setmul, setresult, setprevexpress, setprevsafe, setclick } = useContext(CalculatorContext);
  const { sethist } = useContext(CalculatorContext);
  useEffect(() => {
    settest("true");
  }, [])

  const ans = eval(props.exp);
  // setclick("falsey");



  return (
    < div >
      <div className='history-individual'>
        <div title="click to copy" className='history-express' onClick={() => { setexpress(`${props.exp}`); sethist("true"); setequal(`${props.equal}`); setcurrent(`${props.current}`); setstartzero(`${props.startzero}`); setresult(`${props.result}`); setprev(`${props.prev}`); setmul(`${props.mul}`); setprevexpress(`${props.prevexpress}`); setprevsafe(`${props.prevsafe}`); setclick("true") }}>{props.exp}</div>
     
        <div className='history-result'>={props.result}</div>
        </div>
    </div>
  )
}

export default Testt