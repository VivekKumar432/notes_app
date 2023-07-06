import React from "react";
import "../components/styleSheet/loginPage.css";
import { Button } from "@mui/material";
import { signInWithGoogle } from "../shared/services/Oauth";
const Login = () => {
  return (
    <div className="container">
      <h1>Notes Taking App</h1>
      <Button onClick={signInWithGoogle}>Sigh in with Google</Button>
      <input
        onClick={signInWithGoogle}
        type="submit"
        value="Sign in with Google"
      />
      <div className="signup">
        Don't have an account? <a href="registration.html">Sign up</a>
      </div>
    </div>
  );
};

export default Login;
