import "./viewTripsPage.css";
import fetchTripDetails from "../Dashboard/dashboard";
import TripCard from "./TripCard/TripCard";
import { AiOutlineConsoleSql } from "react-icons/ai";
import React, { useState, useRef } from "react";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";

let count = 0;
const ViewTrips = ({
  tripData,
  pageSelect,
  handlePage,
  fetchTripDetails,
}: any) => {
  const myRef = useRef<null | HTMLDivElement>(null);
  const [scroll, setScroll] = useState(580);
  // const [tripWidth, setWidth] = useState(0);

  function scrollRight() {
    console.log(count);
    if (scroll < (count / 2) * 290 - 1400) {
      myRef.current?.scrollTo({
        left: scroll + 580,
        behavior: "smooth",
      });
      setScroll(scroll + 580);
      count = 0;
    }
  }
  function scrollLeft() {
    if (scroll > 290) {
      myRef.current?.scrollTo({
        left: scroll - 580,
        behavior: "smooth",
      });
      setScroll(scroll - 580);
      count = 0;
    }
  }
  // function addWidth() {
  //   setWidth(tripWidth + 290);
  // }
  return (
    <div className="view-trips-div">
      <h1>your trips</h1>

      <div ref={myRef} className="view-trip-form-item">
        {tripData.map((trip: any) => {
          count++;
          return (
            <div key={Math.random() * 10000}>
              <TripCard
                fetchTripDetails={fetchTripDetails}
                className="trip-card"
                handlePage={pageSelect}
                trip={trip}
              ></TripCard>
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <BsArrowLeftSquareFill className="left" onClick={scrollLeft} />
        <BsArrowRightSquareFill className="right" onClick={scrollRight} />
      </div>
    </div>
  );
};

export default ViewTrips;
