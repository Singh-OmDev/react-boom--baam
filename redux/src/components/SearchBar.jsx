import React, { useState } from 'react'

const SearchBar = () => {

const  [text, setText] = useState ();



 const submitHandler = (e)=> {
   e.preventDefault()
    
 }


  return (
    <div>
    <form  onSubmit={(e)=> {
       submitHandler(e)
    }} className='flex  bg-gray-900 py-10 px-14'>
       <input 
        value={text}
         onChange={(e)=> {
          setText(e.target.value);
          
         }}
        className='w-full border-2 px-6 py-3 text-xl rounded outline-none'
         type='text' placeholder='search anything ....'></input>

        <button> search </button>
    </form>
    </div>
  )
}

export default SearchBar
