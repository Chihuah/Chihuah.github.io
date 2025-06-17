import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// ?�面組件
import Home from './pages/Home'
import About from './pages/About'
import Research from './pages/Research'
import Publications from './pages/Publications'
import Teaching from './pages/Teaching'
import Members from './pages/Members'
import Activities from './pages/Activities'

// 布�?組件
import Layout from './components/layout/Layout'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/members" element={<Members />} />
          <Route path="/activities" element={<Activities />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

