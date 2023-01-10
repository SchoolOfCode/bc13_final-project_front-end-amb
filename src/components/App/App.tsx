import React, {useState, useEffect} from 'react';
import './App.css';
import Login from '../Login/login'
import Dashboard from '../Dashboard/dashboard'
import Navbar from '../NavBar/NavBar';
import { Auth0Provider } from "@auth0/auth0-react";
import { useAuth0 } from '@auth0/auth0-react'

let counter = 1;

function App() {

  const { user, isAuthenticated, getAccessTokenSilently} = useAuth0()

  const [loginVisibility, setLoginVisibility] = useState(true)


  function handleLoginVisibility() {

    if(isAuthenticated)
    setLoginVisibility(false)
  }

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

        <div style={{visibility: loginVisibility ? 'visible' : 'hidden'}}>
         <Login visibility={handleLoginVisibility}></Login>
         </div>

        <Navbar></Navbar>
        
        <Dashboard></Dashboard>
      </Auth0Provider>
    </>

  );
}

export default App;
