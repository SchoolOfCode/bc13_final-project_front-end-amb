import React, {useState} from 'react'
import LoginButton from "../LoginButton/LoginButton";
import './login.css'
import Navbar from '../NavBar/NavBar';

const Login = ({pageSelect}:any) => {

 

    return (
    <div className="login-page">

{/* <div className="login-item">
        <Navbar></Navbar>
    </div> */}
        
       {/* <div className="flex-item">
        <LoginButton/>
        </div> */}
        <button className="getStarted" onClick={() => {pageSelect("dashboard")}}>Get started</button>
      
    </div>)
}

export default Login