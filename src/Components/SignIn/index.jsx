import { signInWithGooglePopup } from "../../Utils/Firebase/firebase"

export default function SignIn() {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }

  return (
    <div>
        <p>I am the Sign In page</p>

        <button onClick={logGoogleUser}>Sign In with Google popup</button>
    </div>
  )
}
