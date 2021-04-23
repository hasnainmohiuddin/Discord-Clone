import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import logo from "./discord-logo.png";

function Login() {
  const SignIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src={logo} alt="" />
      </div>
      <Button onClick={SignIn}>Sign In</Button>
    </div>
  );
}

export default Login;
