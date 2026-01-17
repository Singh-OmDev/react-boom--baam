import { useState, useEffect } from "react";
import { RandomUser } from "./api/index";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [userData, setUserData] = useState(null); // FIX: consistent state name

  useEffect(() => {
    RandomUser().then((user) => setUserData(user.results[0]));
  }, []); // FIX: dependency array added

   const  refresh =  () => {
         RandomUser().then((user) => setUserData(user.results[0]));

      
   }
  return (
    <>
      {userData && <UserCard data={userData} />}
       <button onClick={refresh}> refresh user  </button>
    </>
  );
}

export default App;
