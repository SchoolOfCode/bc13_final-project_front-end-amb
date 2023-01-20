import "./viewTripsPage.css"

import TripCard from "./TripCard/TripCard";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { useState } from "react";




const ViewTrips = ({tripData, pageSelect, handlePage}:any) => { 

    const [tripChoices, setTripChoices] = useState({})

async function fetchTripDetails(id:any) {
    
    
        const res = await fetch(`http://localhost:3001/api/choices/${id}`)
        const json = await res.json()
        
        setTripChoices(json)
        console.log(json, "fetch has worked")
        

       
      }




    return (
        
       <div className='view-trips-div'>
        <h1>your trips</h1>
        
        <div className="view-trip-form-item">
       
            {tripData.map((trip:any) => {
               
                return (<div key={Math.random() * 10000}>

        
                    <TripCard fetchTripDetails={fetchTripDetails} className="trip-card" handlePage={pageSelect} trip={trip}></TripCard>

                   


                </div>)
            })}
        </div>
        <button className="view-trip-cancel-button cancel-button" onClick={() => {pageSelect("dashboard")}}>cancel</button>
        </div>
        
    )

        }

export default ViewTrips;