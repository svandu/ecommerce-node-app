// import { signInWithGooglePopup } from "../../Utils/Firebase/firebase"
import {UserAuth} from "../../Utils/Firebase/AuthContext"
export default function SignIn() {
    // const logGoogleUser = async () => {
    //     const response = await signInWithGooglePopup();
    //     console.log(response);
    // }

    const { googleSignIn } = UserAuth();

    const handleGoogleSignIn = async () => {
      try {
        await googleSignIn()
      } catch (error) { 
        console.log(error);
      }
    };

    
  return (
    <div>
        <p>I am the Sign In page</p>

        <button onClick={handleGoogleSignIn}>Sign In with Google popup</button>
    </div>
  )
}
