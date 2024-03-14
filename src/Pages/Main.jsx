import React from 'react'
import { Route,Routes } from 'react-router-dom';
import UI from './UI/UI';
import Test from './Test';
const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<UI/>}  />
      <Route path='/hist' element={<Test/>}/>
    </Routes>
  
  )
}

export default Main