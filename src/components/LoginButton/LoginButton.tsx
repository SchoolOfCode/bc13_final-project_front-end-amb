import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();



  return <button className ="button-24" onClick={() => loginWithRedirect()}>log in</button>;
};

export default LoginButton;