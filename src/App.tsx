import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavSite from './components/NavLink/NavLink'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Notes from './pages/Notes'
import CreateNoteN from './components/CreateNoteN/CreateNoteN'

function App() {
  return (
    <>
      <NavSite />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notes' element={<Notes />} />
        {Object.keys(localStorage).map((val, i) => <Route path={'/notes/' + val} element={<Notes key={i} />} />)}
        <Route path='/notes/create' element={<CreateNoteN />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
