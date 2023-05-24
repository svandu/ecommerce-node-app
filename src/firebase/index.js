// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';  


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
export const auth = getAuth(app);

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot); 
  console.log(userSnapshot.exists()); 

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }

    return userDocRef;
  }
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await createUserDocumentFromAuth(auth, email, password)
}