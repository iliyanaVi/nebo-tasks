// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,   
  authDomain: "nebo-diary-app.firebaseapp.com",
  projectId: "nebo-diary-app",
  storageBucket: "nebo-diary-app.firebasestorage.app",
  messagingSenderId: "286358780998",
  appId: "1:286358780998:web:737be5ddab3c54f3935e47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);