import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdHowToVote } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";
import "./login.css";

const Login = ({ pageSelect }: any) => {
  return (
    <div className="login-page">
      {/* <div className="login-item">
        <Navbar></Navbar>
    </div> */}

      {/* <div className="flex-item">
        <LoginButton/>
        </div> */}
      <div className="sloganBox">
        <div className="slogan">
          <p>Feeling decision-fatigue?</p>
          <p>Let everyone else decide, with a vote.</p>
          <MdHowToVote />
          <p>Don't want to be the one to bring up money?</p>
          <p>State your budget, anonymously.</p>
          <FaRegMoneyBillAlt />
          <p>Getting ignored in the group chat?</p>
          <p>Have your preferences heard, with Travel Herd.</p>
          <TbSpeakerphone/>
        </div>
      </div>

      <button
        className="getStarted"
        onClick={() => {
          pageSelect("dashboard");
        }}
      >
        get started
      </button>
    </div>
  );
};

export default Login;
