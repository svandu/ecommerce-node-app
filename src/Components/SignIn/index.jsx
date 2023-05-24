import { auth, signInWithGooglePopup, createUserDocumentFromAuth } from "../../firebase";
import SignUp from "../SignUp";

export default function SignIn() {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <p>I am the Sign In page</p>
      <button onClick={logGoogleUser}>Sign In with Google popup</button>
      <SignUp/>
    </div>
  );
}
