import React from 'react'
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import './login.css'

const Login = ({visibility}:any) => {
    return (<div className="login-page">

 <LogoutButton></LogoutButton>
        <LoginButton prop={visibility}/>
       
    </div>)
}

export default Login