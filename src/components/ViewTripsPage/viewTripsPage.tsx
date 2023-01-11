import "./viewTripsPage.css"
import Navbar from "../NavBar/NavBar";
import TripCard from "./TripCard/TripCard";

const tripsArr = [
    {
        tripName: 'Julia hen do',
        startDate: '2023/06/03',
        endDate: '2023/06/06',
        location: 'Paris'

    },

    {
        tripName: 'Work christmas meal',
        startDate: '2023/12/18',
        endDate: '2023/12/18',
        location: 'London'
    },
     {
        tripName: 'Girls trip',
        startDate: '2023/08/01',
        endDate: '2023/08/12',
        location: 'Ibiza'
     }

]

const ViewTrips = (props:any) => {
    return (
       <div className='view-trips-div'>

       <div className="view-trip-form-item">
            <Navbar />
       </div>
       
       <div className="view-trip-form-item">
       
            {tripsArr.map((trip) => {
                return (<div>
                    {/* <p>{trip.tripName}</p>
                    <p>{trip.startDate} {trip.endDate}</p>
                    <p>{trip.location}</p> */}
                    <TripCard handleTripDetailsVisibility={props.tripDetailsVisibility} trip={trip}></TripCard>
                </div>)
            })}
        </div>
        <button className="view-trip-cancel-button cancel-button" onClick={props.visibility}>cancel</button>
        </div>
        
    )

}

export default ViewTrips