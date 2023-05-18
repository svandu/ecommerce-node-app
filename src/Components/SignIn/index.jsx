import { signInWithGoogle } from "../../firebase";

export default function SignIn() {
  const googleSignIn = async () => {
    const result = await signInWithGoogle();
    console.log(result.user);
  };
  return (
    <div>
      <p>I am the Sign In page</p>
      <button onClick={googleSignIn}>Sign In with Google popup</button>
    </div>
  );
}
