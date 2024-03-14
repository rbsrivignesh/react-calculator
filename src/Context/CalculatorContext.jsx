import React, { useState } from 'react'
import { createContext } from 'react'
export const CalculatorContext = createContext(null);
const CalculatorContextProvider = (props)=>{
  const [express, setexpress] = useState("");
  const [arrayy,setarrayy]=useState([]);
  const [equal, setequal] = useState("");
  // const [express, setexpress] = useState("")
  const [current, setcurrent] = useState("")
  const [startzero, setstartzero] = useState("");
  const [prev, setprev] = useState("");
  const [mul, setmul] = useState("");
 const[hist,sethist]=useState("");
  const [result, setresult] = useState("");
  const [prevexpress, setprevexpress] = useState("");
  const [prevsafe, setprevsafe] = useState("");
  const contextValue = { express, setexpress,arrayy,setarrayy ,equal,setequal,current,setcurrent,setstartzero,startzero,prev,setprev,mul,setmul,result,setresult,prevexpress,setprevexpress,prevsafe,setprevsafe,sethist,hist};
  return (
    <CalculatorContext.Provider value={contextValue}>
      {props.children}
    </CalculatorContext.Provider>
    // equal} current={item.current} startzero={item.startzero} prev={item.prev} mul={item.mul} result={item.result} prevexpress={item.prevexpress} prevsafe={item.prevsafe} />);
  )

}
export default CalculatorContextProvider;
