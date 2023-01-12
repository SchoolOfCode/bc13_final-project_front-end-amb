import "./dashboard.css";
import React, { useState } from "react";
import CreateTrip from "../CreateTrip/createTrip";
import JoinTrip from "../JoinTripPage/joinTrip";
import ViewTrips from "../ViewTripsPage/viewTripsPage";
import TripDetails from "../TripDetailsPage/tripDetailsPage";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../Login/login";
import LogoutButton from "../LogoutButton/LogoutButton";
import Navbar from "../NavBar/NavBar";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoMdCreate } from "react-icons/io";
import { ImBinoculars } from "react-icons/im";

const Dashboard = () => {
  const [createTripVisibility, setCreateTripVisibility] = useState(false);
  const [joinTripVisibility, setJoinTripVisibility] = useState(false);
  const [viewTripVisibility, setViewTripVisibility] = useState(false);
  const [loginVisibility, setLoginVisibility] = useState(true);
  const [tripDetailsVisibility, setTripDetailsVisibility] = useState(false);

  const [currentTrip, setCurrentTrip] = useState({});

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  function handleCreateTripVisibility() {
    setCreateTripVisibility((current) => !current);
  }

  function handleJoinTripVisibility() {
    setJoinTripVisibility((current) => !current);
  }

  function handleViewTripsVisibility() {
    setViewTripVisibility((current) => !current);
  }

  function handleLoginVisibility() {
    setLoginVisibility((current) => !current);
  }

  function handleTripDetailsVisibility() {
    setTripDetailsVisibility((current) => !current);
  }

  function handleResetVisibility() {
    console.log("hola");
    setCreateTripVisibility(false);
    setJoinTripVisibility(false);
    setViewTripVisibility(false);
    setLoginVisibility(false);
    setTripDetailsVisibility(false);
  }

  return (
    <div>
      <section id="dashboard">
        <div className="navbar-dashboard">
          <Navbar visibility={joinTripVisibility}></Navbar>
        </div>

        <h1>Where are we going?</h1>

        <div id="dashboard-btn-container">
          <div
            className="dashboard-container"
            onClick={() => {
              handleCreateTripVisibility();
            }}
          >
            <IoMdCreate className="icon" />
            <p>create</p>
            <p>trip</p>
          </div>

          <div
            className="dashboard-container"
            onClick={() => {
              handleJoinTripVisibility();
            }}
          >
            <AiOutlineUsergroupAdd className="icon" />
            <p>join</p>
            <p>trip</p>
          </div>

          <div
            className="dashboard-container"
            onClick={() => {
              handleViewTripsVisibility();
            }}
          >
            <ImBinoculars className="icon" />
            <p>view</p>
            <p>trips</p>
          </div>
        </div>
      </section>

      <div style={{ visibility: loginVisibility ? "visible" : "hidden" }}>
        {!isAuthenticated && <Login getStarted={handleLoginVisibility}></Login>}
      </div>

      <div style={{ visibility: createTripVisibility ? "visible" : "hidden" }}>
        <CreateTrip
          tripDetailsVisibility={handleTripDetailsVisibility}
          setTripDetails={setCurrentTrip}
          setTripcancelButton={handleCreateTripVisibility}
        ></CreateTrip>
      </div>

      <div style={{ visibility: viewTripVisibility ? "visible" : "hidden" }}>
        <ViewTrips
          setTripDetails={setCurrentTrip}
          tripDetailsVisibility={handleTripDetailsVisibility}
          visibility={handleViewTripsVisibility}
        ></ViewTrips>
      </div>

      {currentTrip && (
        <div
          style={{ visibility: tripDetailsVisibility ? "visible" : "hidden" }}
        >
          <TripDetails tripDetails={currentTrip}></TripDetails>
        </div>
      )}

      <div style={{ visibility: joinTripVisibility ? "visible" : "hidden" }}>
        <JoinTrip visibility={handleJoinTripVisibility}></JoinTrip>
      </div>
    </div>
  );
};

export default Dashboard;
