import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Aboutus from './components/Aboutus'
import Services from './components/Services'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
