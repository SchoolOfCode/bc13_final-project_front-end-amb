import LoginButton from "../LoginButton/LoginButton"
import LogoutButton from "../LogoutButton/LogoutButton"
import { useAuth0 } from '@auth0/auth0-react'



const AuthButtons = () => {

    const { isAuthenticated} = useAuth0() //user, , getAccessTokenSilently


    return <>
    {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
    </>
}

export default AuthButtons