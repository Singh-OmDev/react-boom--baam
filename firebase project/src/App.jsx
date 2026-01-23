import React from 'react'
import { Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Register from './pages/Register'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<h1>home</h1>} />
        <Route path='/login' element={<h1>login</h1>} />

         <Route path='/register' element={<Register />}  />
      </Routes>
    </div>
  )
}

export default App
