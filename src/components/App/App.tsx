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
       <Auth0Provider domain= "dev-l6bnebnlo0sm3iul.uk.auth0.com" scope="read:current_user update:current_user_metadata" clientId="iu5ZM51QPbpIVQdwYw43MqvSk2htHc51" >
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
