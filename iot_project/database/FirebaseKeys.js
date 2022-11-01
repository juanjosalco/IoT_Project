// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy2qvLJ4oPsLjbmA_ZW2hfWSqTomr1a-I",
  authDomain: "iot-project-5e277.firebaseapp.com",
  projectId: "iot-project-5e277",
  storageBucket: "iot-project-5e277.appspot.com",
  messagingSenderId: "580050664539",
  appId: "1:580050664539:web:3f68fb73474f1364fc937e",
  measurementId: "G-BXTHJJ07FK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);