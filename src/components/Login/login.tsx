
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
<div className='sloganBox'>
        
        <h1 className='slogan'>

Feeling decision-fatigued? <b></b> Let everyone else decide, with a vote. <br></br> <li></li>

Don’t want to be the one to bring up money? <b></b> State your budget, anonymously. <br></br> <li></li> Getting ignored in the group chat? <b></b> Have your preferences heard, with Travel Herd. </h1>
 </div>

        <button className="getStarted" onClick={() => {pageSelect("dashboard")}}>get started</button>

      
    </div>)
}

export default Login