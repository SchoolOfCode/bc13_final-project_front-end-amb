import "./NavBar.css";
import AuthButtons from "../AuthButtons/AuthButtons";

import logo from "../../images/Logo.png";

const Navbar = ({ pageSelect }: any) => {
  return (
    <nav>
      <div id="nav-left">
        <img
          className="logo"
          src={logo}
          alt="camels walking off into distance"
        ></img>
        <h2 className="text">TRAVEL HERD</h2>
      </div>
      <div id="nav-right">
        <div
          onClick={() => {
            pageSelect("dashboard");
          }}
          id="dashboard-link-container"
        >
          <span className="dashboard-btn">dashboard</span>
          <span className="underline"></span>
        </div>

        <AuthButtons />
      </div>
      {/* <button className ="button-24">Log in</button> */}
    </nav>
  );
};

export default Navbar;
