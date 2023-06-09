import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import './main.scss'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
