// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6APqUn7_rX7623rKk4EB5atH9gejFRfE",
  authDomain: "passion-db-ab672.firebaseapp.com",
  projectId: "passion-db-ab672",
  storageBucket: "passion-db-ab672.appspot.com",
  messagingSenderId: "604538443328",
  appId: "1:604538443328:web:c2b34d0d6924929cbaf1a5",
};

const provider = new GoogleAuthProvider();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);
