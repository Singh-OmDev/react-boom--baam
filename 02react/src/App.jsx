 import { useState } from 'react'

import './App.css'

function App() {
   
     let [counter, setCounter] = useState(15)
  
   
    const addValue = () => {
       console.log("clicked", counter);
       counter = counter+1;
        setCounter(counter)

    }

  return (
    <>
     

    <h1>!!!!!!!!!!!!!!!!11

    </h1>
     <h2> counter value is : {counter}</h2>
      <button onClick={addValue}>  Add  Value {counter}</button>
       <br />
       <button> Remove Value {counter}</button> 
       <br />
        <p>footer: {counter}</p>
    </>
  )
}

export default App
