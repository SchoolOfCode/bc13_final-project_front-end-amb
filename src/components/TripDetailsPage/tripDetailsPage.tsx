import './tripDetailsPage.css'
import Navbar from '../NavBar/NavBar'

const TripDetails = ({tripDetails}:any) => {

    console.log(tripDetails)
    return <div className="trip-details-page">

        <div className="view-trip-form-item">
            <Navbar />
       </div>



        {tripDetails.group && <div>
        <h1>{tripDetails.group}</h1>
        <p>Date: {tripDetails.date[0].name}</p>
        <p>Destination: {tripDetails.destination}</p>
        <p>Members: {tripDetails.member[0].name}</p>
        <p>Itinerary: {tripDetails.event[0].type}</p>
        </div>}
      
       
        </div>
}

export default TripDetails


  /*  type: "Restearant", location: "aaaaa", date: 
        <p>Destination: {tripDetails.destination}</p>
        {/* {/* <p>Members: {tripDetails.member}</p> */
        /* <p>Itinerary: {tripDetails.event}</p> */  