import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";

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

// 4️⃣ Custom Hook
export const useFirebase = () => useContext(FirebaseContext);

// 5️⃣ Provider Component
export const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={{ firebaseApp }}>
      {children}
    </FirebaseContext.Provider>
  );
};
