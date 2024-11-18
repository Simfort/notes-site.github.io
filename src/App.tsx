import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavSite from './components/NavLink/NavLink'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <NavSite />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
