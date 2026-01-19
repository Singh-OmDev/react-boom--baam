import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import "./App.css";
import Signup from "./pages/Signup";





const auth = getAuth(app);

function App() {
  const signupUser = () => {
    createUserWithEmailAndPassword(
      auth,
      "omsingh8400@gmail.com",
      "om123456"
    )
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <h1>Firebase React App</h1>
      <button onClick={signupUser}>Create User</button>

       <Signup />
    </div>
  );
}

export default App;
