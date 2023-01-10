import React, {useState} from 'react'
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import './login.css'

const Login = ({getStarted}:any) => {

 

    return (
    <div className="login-page">
        
       <div className="flex-item">
        <LoginButton/>
        </div>
        <button className="getStarted" onClick={getStarted}>Get started</button>
        
        <LogoutButton></LogoutButton>
    </div>)
}

export default Login