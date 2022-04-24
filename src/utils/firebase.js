// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbJ3s7WagrFwOn32vJerBE3sV-mlRWGGU",
  authDomain: "fire-contact-proje.firebaseapp.com",
  databaseURL: "https://fire-contact-proje-default-rtdb.firebaseio.com",
  projectId: "fire-contact-proje",
  storageBucket: "fire-contact-proje.appspot.com",
  messagingSenderId: "1095484576702",
  appId: "1:1095484576702:web:614d78378994fd63765fef"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;