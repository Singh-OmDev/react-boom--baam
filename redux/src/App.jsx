import React from 'react'
import { fetchPhotos } from './api/mediaApi'

const App = () => {
  return (
    <div className='h-screen text-white bg-gray-950'>
      <button
        onClick={async () => {
          const data = await fetchPhotos('cat')
          console.log(data)
        }}
      >
        get data
      </button>
    </div>
  )
}

export default App
