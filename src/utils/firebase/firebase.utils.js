// Import the functions you need from the SDKs you need

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCks4upHc9hCEMMut-ZAZScOP8uiaJff9E",
  authDomain: "ecommerce-f4770.firebaseapp.com",
  projectId: "ecommerce-f4770",
  storageBucket: "ecommerce-f4770.appspot.com",
  messagingSenderId: "574199213559",
  appId: "1:574199213559:web:64aa78b50eff33d3c5d2f2"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
})


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)