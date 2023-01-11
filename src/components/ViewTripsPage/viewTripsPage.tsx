import "./viewTripsPage.css"
import Navbar from "../NavBar/NavBar";
import TripCard from "./TripCard/TripCard";

const tripsArr = [
    {
        group: 'Julia hen do',
        date: '2023/06/03',
        // endDate: '2023/06/06',
        destination: 'Paris'

    },

    {
        group: 'Work christmas meal',
        date: '2023/12/18',
        // endDate: '2023/12/18',
        destination: 'London'
    },
     {
        group: 'Girls trip',
        date: '2023/08/01',
        // endDate: '2023/08/12',
        destination: 'Ibiza'
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

                    <TripCard tripDetails={props.setTripDetails} handleTripDetailsVisibility={props.tripDetailsVisibility} trip={trip}></TripCard>
                </div>)
            })}
        </div>
        <button className="view-trip-cancel-button cancel-button" onClick={props.visibility}>cancel</button>
        </div>
        
    )

}

export default ViewTrips