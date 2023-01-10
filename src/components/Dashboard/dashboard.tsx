import React, { useState } from "react";
import './dashboard.css'
import CreateTrip from "../CreateTrip/createTrip";
import JoinTrip from "../JoinTripPage/joinTrip";
import ViewTrips from "../ViewTripsPage/viewTripsPage";
import TripDetails from "../TripDetailsPage/tripDetailsPage";

import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoMdCreate } from "react-icons/io";
import { ImBinoculars } from "react-icons/im";

const Dashboard = () => {
  const [createTripVisibility, setCreateTripVisibility] = useState(false);
  const [joinTripVisibility, setJoinTripVisibility] = useState(false);
  const [viewTripVisibility, setViewTripVisibility] = useState(false);

  function handleCreateTripVisibility() {
    setCreateTripVisibility((current) => !current);
  }

  function handleJoinTripVisibility() {
    setJoinTripVisibility((current) => !current);
  }

  function handleViewTripVisibility() {
    setViewTripVisibility((current) => !current);
  }

  return (
    <section id="dashboard">
      <h1>Where are we going?</h1>
      <div id="dashboard-btn-container">
        <div
          onClick={() => {
            handleCreateTripVisibility();
          }}
        >
          <IoMdCreate className="icon" />
          <p>create</p>
          <p>trip</p>
        </div>

        <div style={{ display: createTripVisibility ? "block" : "none" }}>
          <CreateTrip></CreateTrip>
        </div>

        <div
          onClick={() => {
            handleJoinTripVisibility();
          }}
        >
          <AiOutlineUsergroupAdd className="icon"/>
          <p>join</p>
          <p>trip</p>
        </div>

        <div style={{ display: joinTripVisibility ? "block" : "none" }}>
          <JoinTrip visibility={handleJoinTripVisibility}></JoinTrip>
        </div>

        <div
          onClick={() => {
            handleViewTripVisibility();
          }}
        >
         <ImBinoculars className="icon"/>
          <p>view</p>
          <p>trips</p>
        </div>

        <div style={{ display: viewTripVisibility ? "block" : "none" }}>
          <ViewTrips></ViewTrips>
        </div>
      </div>
      <div>
        <TripDetails></TripDetails>
      </div>
    </section>
  );
};

export default Dashboard;
