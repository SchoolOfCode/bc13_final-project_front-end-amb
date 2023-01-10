import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = ({prop}:any) => {
  const { loginWithRedirect } = useAuth0();

  function DoWork() {
    loginWithRedirect()
    prop()
  }

  return <button onClick={() => DoWork()}>Log In</button>;
};

export default LoginButton;