// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnlaVoFXnqATHU3LNk4jFj1K_JR6ITAnI",
  authDomain: "netshow-794dd.firebaseapp.com",
  projectId: "netshow-794dd",
  storageBucket: "netshow-794dd.appspot.com",
  messagingSenderId: "63382823707",
  appId: "1:63382823707:web:fd0d3bfb9c8238be54a9be",
  measurementId: "G-G603894E5M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();