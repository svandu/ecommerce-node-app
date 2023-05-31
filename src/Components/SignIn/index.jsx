import { auth, signInWithGooglePopup, createUserDocumentFromAuth } from "../../firebase";
import SignUp from "../SignUp";

export default function SignIn() {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
       <button onClick={logGoogleUser}>Sign In with Google popup</button>
      <SignUp/>
    </div>
  );
}
