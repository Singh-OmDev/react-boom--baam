import React from 'react'
 import {Routes, Route} from "react-router-dom";

  import "bootstrap/dist/css/bootstrap.min.css";

   import Homepage from './pages/Home'



const App = () => {
  return (
    <div className='App'>
       <h1> meme generator</h1>

      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
