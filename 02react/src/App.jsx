 import { useState } from 'react'

import './App.css'

function App() {
   
     let [counter, setCounter] = useState(15)
  
   
    const addValue = () => {

       if (counter  >= 20){
         return false;
        
       }
        else {
           console.log("clicked", counter);
       counter = counter+1;
        setCounter(counter)
        }
       

    }

     const removeValue = ()=> {
       if (counter == 0){
         return false;
         
       }
        else{
                   setCounter(counter  -1)

        }
     }
  return (
    <>
     

    <h1>!!!!!!!!!!!!!!!!

    </h1>
     <h2> counter value is : {counter}</h2>
      <button onClick={addValue}>  Add  Value {counter}</button>
       <br />
       <button onClick={removeValue}> Remove Value {counter}</button> 
       <br />
        <p>footer: {counter}</p>
    </>
  )
}

export default App
