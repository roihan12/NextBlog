// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "nextblog-422710.firebaseapp.com",
  projectId: "nextblog-422710",
  storageBucket: "nextblog-422710.appspot.com",
  messagingSenderId: "853182566064",
  appId: "1:853182566064:web:853359d5093f46a699f575"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);