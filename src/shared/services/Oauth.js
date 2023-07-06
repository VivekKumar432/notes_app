import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../config/firebaseConfiguration";
// const auth = authFB;
const provider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  await signInWithPopup(auth, provider)
    .then((res) => {
      localStorage.setItem("user", res.user);
      console.log("response", res);
    })
    .catch((err) => {
      throw Error(`Sign in with google failed ${JSON.stringify(err)}`);
    });
};
