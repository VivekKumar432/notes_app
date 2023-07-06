// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//   import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClheR8WDMlwyoAdqInULZjTq7qqKGyZIM",
  authDomain: "notes-taking-app-51b68.firebaseapp.com",
  projectId: "notes-taking-app-51b68",
  storageBucket: "notes-taking-app-51b68.appspot.com",
  messagingSenderId: "1043950233435",
  appId: "1:1043950233435:web:bde9811897a2a885669c7e",
  measurementId: "G-9SJDH3FSNJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//   const analytics = getAnalytics(app);
