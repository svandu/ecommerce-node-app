import SignIn from "../SignIn";
import SignUp from "../SignUp";
import "./authentication.scss"

export default function Authentication() {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
}
