// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASqKSypkSsCSmAx63OlZlSTmFIhvdbIhI",
  authDomain: "ema-john-simple-3a0bf.firebaseapp.com",
  projectId: "ema-john-simple-3a0bf",
  storageBucket: "ema-john-simple-3a0bf.appspot.com",
  messagingSenderId: "405089446796",
  appId: "1:405089446796:web:a3db656110a29873d904a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;