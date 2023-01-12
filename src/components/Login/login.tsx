
import './login.css'


const Login = ({pageSelect}:any) => {

 

    return (
    <div className="login-page">

{/* <div className="login-item">
        <Navbar></Navbar>
    </div> */}
        
       {/* <div className="flex-item">
        <LoginButton/>
        </div> */}

        <button className="getStarted" onClick={() => {pageSelect("dashboard")}}>get started</button>

      
    </div>)
}

export default Login