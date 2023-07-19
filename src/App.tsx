import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
// import WhatWeDo from './pages/WhatWeDo'
import { Routes, Route } from 'react-router-dom'
import './main.scss'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/what-we-do' element={<WhatWeDo />} /> */}
      </Routes>
    </>
  )
}

export default App
