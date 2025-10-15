import React from 'react'

import { Bookmark } from 'lucide-react'

const App = () => {
  return (
    <div className='parent'>
       <div className="card">
        <div className="top">
          <img src="data:image/png;base64,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" alt="" />
           <button>Save <Bookmark /></button>
        </div>

        <div className="center">

          <h3> Amazon <span> 5 days ago</span></h3>

           <h2> Senior UI/UX Designer</h2>
            <div>
               <h4> Part time </h4>
                <h4> Senior Level</h4>
            </div>



        </div>
         <div className="bottom"></div>
         
           <div> 
             <h3> $120/hr</h3>
              <p> Mumbai , India</p>
           </div>
         
                      <button> Apply Now</button>




       </div>
       
      
    </div>
  )
}

export default App
