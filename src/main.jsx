
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SeguridadApp from './App'
import Videos from './pages/Videos'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SeguridadApp />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
