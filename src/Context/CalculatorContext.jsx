import React, { useState } from 'react'
import { createContext } from 'react'
export const CalculatorContext = createContext(null);
const CalculatorContextProvider = (props)=>{
  const [express, setexpress] = useState("");
  const contextValue = { express, setexpress };
  return (
    <CalculatorContext.Provider value={contextValue}>
      {props.children}
    </CalculatorContext.Provider>
  )

}
export default CalculatorContextProvider;
