// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD52bIu-RxcsUiaxiL349YbBmYpri_xaos",
  authDomain: "react-cursos-e9112.firebaseapp.com",
  projectId: "react-cursos-e9112",
  storageBucket: "react-cursos-e9112.appspot.com",
  messagingSenderId: "1050113289072",
  appId: "1:1050113289072:web:d0b6051e9aef44eeb8fdb5",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

