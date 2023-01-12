
import "./NavBar.css";
import AuthButtons from "../AuthButtons/AuthButtons";

import logo from '../../images/Logo.png';

const Navbar = ({ pageSelect }: any) => {
  return (
    <nav>
      <img className="logo" src={logo} alt="camels walking off into distance"></img>
			<span className="text">TRAVEL HERD</span>
      <li className="menu-item">
        <button onClick={() => {pageSelect("dashboard")}}>dashboard</button>
      </li>
      <li className="menu-item">
      <button onClick={() => {pageSelect("join")}}>join</button>
      </li>
      <li>
      <button onClick={() => {pageSelect("view")}}>view</button>
      </li>
      <li>
      <button onClick={() => {pageSelect("create")}}>create</button>
      </li>
      <div>
        <AuthButtons />
      </div>
      {/* <button className ="button-24">Log in</button> */}
    </nav>
  );
};

export default Navbar;


