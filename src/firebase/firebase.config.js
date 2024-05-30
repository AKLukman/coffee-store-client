// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_uMBPW3oSoE5v7eRWJ4wE2uzFnO3Xsn4",
  authDomain: "coffee-store-fec2c.firebaseapp.com",
  projectId: "coffee-store-fec2c",
  storageBucket: "coffee-store-fec2c.appspot.com",
  messagingSenderId: "547739618575",
  appId: "1:547739618575:web:1804e6e92ed7650d15427a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
