import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBmWxRLTrKyxrDl9bqDeT8m_D2NDdKo3oQ",
    authDomain: "passion-db.firebaseapp.com",
    projectId: "passion-db",
    storageBucket: "passion-db.appspot.com",
    messagingSenderId: "689280462549",
    appId: "1:689280462549:web:21cc5ba969320a014c3c5c"
};

// Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);

// const provider = new GoogleAuthProvider();
// provider.setCustomParameters({
// prompt: "select_acount"
// });

export const auth = getAuth();
// export const signInWithGooglePopup = () => signInWithPopup(auth, provider);