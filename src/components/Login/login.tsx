import React, {useState} from 'react'
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import './login.css'

const Login = () => {

 

    return (<div className="login-page">

        <LogoutButton></LogoutButton>
        <LoginButton/>
       
    </div>)
}

export default Login