// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbFPxN6k3dX1M31GCrI5FId5IyNpoR3SU",
  authDomain: "kasir-expo.firebaseapp.com",
  projectId: "kasir-expo",
  storageBucket: "kasir-expo.appspot.com",
  messagingSenderId: "1094679576938",
  appId: "1:1094679576938:web:d204553c15f9fa7e0fe513",
  measurementId: "G-WZ0BHDRH04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};


