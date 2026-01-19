import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'
const Login = () => {

      const [username, setUsername] = useState ('');
        const [password, setPassword] = useState ('');

         const handleSubmit = ()=> {
             
         }
  return (
    <div>
      <h2>login </h2>
       <input type="text"placeholder='username' value={username} onChange={(e)=> setUsername (e.target.value)} />
       <br />
       <input type="password" placeholder='password' value={password} onChange={(e)=> setPassword (e.target.value)} />
       <br />
       <button onClick={handleSubmit}>Login</button>
       
    </div>
  )
}

export default Login    
