import React from 'react';
import './App.css';
import Login from '../Login/login'
import Dashboard from '../Dashboard/dashboard'
import Navbar from '../NavBar/NavBar';
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";

function App() {
  return (
      <>
       <Auth0Provider 
      //  domain="dev-l6bnebnlo0sm3iul.uk.auth0.com" 
      //  scope="read:current_user update:current_user_metadata" 
      //  clientId="iu5ZM51QPbpIVQdwYw43MqvSk2htHc51"
      //  redirectUri={window.location.origin}
      //  useRefreshTokens={true} >
          domain="dev-otxf3y3m35xq561z.uk.auth0.com"
          clientId="FYGE0Lx0PPU5t9yUHOMakD0NK33AjMqE"
          redirectUri={window.location.origin}
          audience="https://dev-otxf3y3m35xq561z.uk.auth0.com/api/v2/"
          scope="read:current_user update:current_user_metadata"
          useRefreshTokens={true}
        >
           <LoginButton/>
           <LogoutButton/>
        <Navbar></Navbar>
        <Login></Login>
        <Dashboard></Dashboard>
      </Auth0Provider>
    </>

  );
}

export default App;
