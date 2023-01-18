
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
        
        <div className='slogan'>

<p>Feeling decision-fatigued?</p> <p>Let everyone else decide, with a vote.</p> <br></br> <li></li>

<p>Not sure how to bring up money?</p> <b></b> <p>State your budget, anonymously.</p> <br></br> <li></li> <p>Getting ignored in the group chat?</p> <b></b> <p>Have your preferences heard, with Travel Herd.</p> </div>
 </div>

        <button className="getStarted" onClick={() => {pageSelect("dashboard")}}>get started</button>

      
    </div>)
}

export default Login