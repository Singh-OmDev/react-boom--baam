import { Route, Routes , Link} from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"


function App() {
  

  return (

    <>
     <Link to="/"> home</Link>

      <br />
   <Link to="/login"> Login</Link>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

</Routes>
/*


 pheley routes banao
 
*/


    </>
  )
}

export default App
