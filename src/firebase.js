// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCmQEI9W-gKbn7pTAWBPw_FWTl9Ej-AC0",
  authDomain: "getfit-2024-nadman.firebaseapp.com",
  projectId: "getfit-2024-nadman",
  storageBucket: "getfit-2024-nadman.firebasestorage.app",
  messagingSenderId: "989348723935",
  appId: "1:989348723935:web:b96cdb9dc4fdd1f0c6fd6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore database

export { auth, db }; // Export both auth and db
