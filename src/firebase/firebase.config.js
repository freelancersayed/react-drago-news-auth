// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRwA4rzNuQEjqP6ZZ53IuTk4nFXUPcDzY",
  authDomain: "react-dragon-news-auth-42bbd.firebaseapp.com",
  projectId: "react-dragon-news-auth-42bbd",
  storageBucket: "react-dragon-news-auth-42bbd.appspot.com",
  messagingSenderId: "798063627957",
  appId: "1:798063627957:web:919470af0aa4b144da78fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;