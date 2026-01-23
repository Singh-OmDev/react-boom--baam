import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// 1️⃣ Create Context
const FirebaseContext = createContext(null);

// 2️⃣ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyADReR-CkdlPIvQN9kpXONBfWdmq7rQsgw",
  authDomain: "bookify-6f91d.firebaseapp.com",
  projectId: "bookify-6f91d",
  storageBucket: "bookify-6f91d.firebasestorage.app",
  messagingSenderId: "679540603190",
  appId: "1:679540603190:web:adacba010dfdd747531b97",
};

// 3️⃣ Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// 4️⃣ Firebase Auth
const firebaseAuth = getAuth(firebaseApp);

// 5️⃣ Custom Hook
export const useFirebase = () => useContext(FirebaseContext);

// 6️⃣ Provider Component
export const FirebaseProvider = ({ children }) => {

  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  return (
    <FirebaseContext.Provider value={{ signupUserWithEmailAndPassword }}>
      {children}
    </FirebaseContext.Provider>
  );
};
