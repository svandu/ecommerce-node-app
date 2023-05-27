import { useState, useEffect } from "react";
// import { auth, signInWithGooglePopup, createUserDocumentFromAuth } from "../../firebase";
import { auth, provider } from "../../firebase"
import { signInWithPopup } from "firebase/auth";
import SignUp from "../SignUp";
import HomePage from "../HomePage"

export default function SignIn() {

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // }

  const [value, setValue] = useState('')
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email)
      localStorage.setItem("email",data.user.email)
    })
  }

  useEffect(() => {
    setValue(localStorage.getItem('email'))
  },[])

  return (
    <div>
      {/* <p>I am the Sign In page</p> */}
      {value?<HomePage />:
       <button onClick={handleClick}>Sign In with Google popup</button>
      }
      <SignUp/>
    </div>
  );
}
