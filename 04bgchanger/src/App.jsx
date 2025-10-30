import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >

       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-t-3xl">

           <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "red"}}
            > red</button>

             <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "green"}}
            > green</button>


            <button  onClick={() => setColor("blue")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "blue"}}
            > blue</button>


            <button  onClick={() => setColor("yellow")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "yellow"}}
            > yellow</button>

         </div>
       </div>
      {/* You can add buttons to change colors */}
    </div>
  );
}

export default App;
