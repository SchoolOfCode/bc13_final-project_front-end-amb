import React, {useState} from 'react'
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import './login.css'

const Login = ({getStarted}:any) => {

 

    return (<div className="login-page">

        <LogoutButton></LogoutButton>
        <LoginButton/>
        <button onClick={getStarted}>Get started</button>
       
    </div>)
}

export default Login