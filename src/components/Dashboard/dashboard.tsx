import "./dashboard.css";
import React, { useState } from "react";
import CreateTrip from "../CreateTrip/createTrip";
import JoinTrip from "../JoinTripPage/joinTrip";
import ViewTrips from "../ViewTripsPage/viewTripsPage";
import TripDetails from "../TripDetailsPage/tripDetailsPage";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../Login/login";
//import LogoutButton from "../LogoutButton/LogoutButton";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/footer";

import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoMdCreate } from "react-icons/io";
import { ImBinoculars } from "react-icons/im";

const Dashboard = () => {

  const [currentTrip, setCurrentTrip] = useState({});

  const [page, setPage] = useState("dashboard")

  const { isAuthenticated } = useAuth0(); // user, , getAccessTokenSilently

  function handlePage(page:string) {
    console.log(page)
    setPage(page)
  }

  return (
    <div id="dashboard-container">
      <section id="dashboard">
        
          <Navbar pageSelect={handlePage}></Navbar>
        

        <h1>Where are we going?</h1>

        <div id="dashboard-btn-container">
          <div
            className="dashboard-container"
            onClick={() => {
              handlePage("create");
            }}
          >
            <IoMdCreate className="icon" />
            <p>create</p>
            <p>trip</p>
          </div>

          <div
            className="dashboard-container"
            onClick={() => {
              handlePage("join");
            }}
          >
            <AiOutlineUsergroupAdd className="icon" />
            <p>join</p>
            <p>trip</p>
          </div>

          <div
            className="dashboard-container"
            onClick={() => {
              handlePage("view");
            }}
          >
            <ImBinoculars className="icon" />
            <p>view</p>
            <p>trips</p>
          </div>
        </div>
        <Footer></Footer>
      </section>

      <div className={ page === "login" ? "open" : "closed" }>
        {!isAuthenticated && <Login pageSelect={handlePage}></Login>}
      </div>

      <div className={ page === "create" ? "open" : "closed" }>
        <CreateTrip
          setTripDetails={setCurrentTrip}
          pageSelect={handlePage}
        ></CreateTrip>
      </div>

      <div className={ page === "view" ? "open" : "closed"}>
        <ViewTrips
          setTripDetails={setCurrentTrip}
          pageSelect={handlePage}
        ></ViewTrips>
      </div>

      {currentTrip && (
        <div
          className={ page === "details" ? "open" : "closed" }
        >
          <TripDetails tripDetails={currentTrip}></TripDetails>
        </div>
      )}

      <div className={ page === "join" ? "open" : "closed"}>
        <JoinTrip pageSelect={handlePage}></JoinTrip>
      </div>
    </div>
  );
};

export default Dashboard;
