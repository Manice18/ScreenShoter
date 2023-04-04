import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Second from './components/pages/LandingPage/Landing'
// import Third from './components/pages/Third'


function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Second/>}/>
      {/* <Route path="/details" element={<Third/>}/> */}
    </Routes>
  )
}

export default App
