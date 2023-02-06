import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Footers from './components/Footers'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'
import Detail from './pages/Detail'

function App() {
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((users) => console.log('console' + users))
  // }, [])
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='detail/:userId' element={<Detail />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

      <Footers />
    </Router>
  )
}

export default App
