import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      <h1  className='bg-amber-600 text-align-center'> heloo</h1>

       <Card  username = "om singh" btntext="visit site"/>
        <Card  username=" stark" btntext = "read me"/>
    </div>
  )
}

export default App
