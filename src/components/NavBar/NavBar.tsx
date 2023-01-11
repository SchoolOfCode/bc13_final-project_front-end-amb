// import react from "react";
//import {  Link } from "react-router-dom";
import './NavBar.css';
import AuthButtons from '../AuthButtons/AuthButtons';
import logo from '../../images/Logo.png';


const Navbar= () =>{
	return (
		<nav>
			<img className="logo" src={logo} alt="camels walking off into distance"></img>
			<text>TRAVEL HERD</text>
			<li className="menu-item">
				{/* <Link to="/">Dashboard</Link> */}
			</li>
			<li className="menu-item">
				{/* <Link to="/viewTripsPage">View Trips</Link> */}
			</li>
			<div>
			<AuthButtons/>
			</div>
			{/* <button className ="button-24">Log in</button> */}
		</nav>
	 );
	 };
	
	 export default Navbar;
	






































// import React from "react";
// import { Nav, NavLink, NavMenu }
//  	from "./NavBarElements.js"

// const Navbar = () => {
// return (
// 	<>
// 	<Nav>
// 		<NavMenu>
// 		<NavLink to="/Dashboard" activeStyle>
// 			About
// 		</NavLink>
// 		<NavLink to="/contact" activeStyle>
// 			Contact Us
// 		</NavLink>
// 		<NavLink to="/blogs" activeStyle>
// 			Blogs
// 		</NavLink>
// 		<NavLink to="/sign-up" activeStyle>
// 			Sign Up
// 		</NavLink>
// 		</NavMenu>
// 	</Nav>
// 	</>
// );
// };

// export default Navbar;
