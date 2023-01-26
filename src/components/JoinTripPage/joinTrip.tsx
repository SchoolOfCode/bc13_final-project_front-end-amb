import React, { useState } from "react";
import "./joinTrip.css";
import { useAuth0 } from "@auth0/auth0-react";

//import Navbar from '../NavBar/NavBar';

const JoinTrip = (props: any) => {
  const [tripID, setTripID] = useState("");
  const { user } = useAuth0();

  async function insertMembers() {
    let obj = {
      trip_id: tripID,
      user_id: user?.sub,
    };
    console.log(obj);
    const response = await fetch("http://localhost:3001/api/member", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
    let data = await response.json();
    console.log(data.payload[0]);
    let userData = data.payload[0];
    return userData;
    console.log(userData);
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    console.log(tripID);

    props.pageSelect("dashboard");

    setTripID("");
  }

  return (
    <div className="join-form">
      <h1>join trip</h1>
      <div className="join-container">
        <h2 className="join-h2">
          ask your trip organiser for the ID of your trip to see details and add
          your votes
        </h2>

        <form className="join-form-item" onSubmit={handleSubmit}>
          <label className="label-id">
            Enter trip ID:
            <input
              className="input-field"
              type="text"
              onChange={(e) => {
                setTripID(e.target.value);
              }}
              value={tripID}
            ></input>
          </label>
          <input
            className="submit-button"
            onClick={() => {
              insertMembers();
            }}
            type="submit"
            value="submit"
          ></input>
        </form>
      </div>

      <button
        className="join-cancel-button cancel-button"
        onClick={() => {
          props.pageSelect("dashboard");
        }}
      >
        cancel
      </button>
    </div>
  );
};

export default JoinTrip;
