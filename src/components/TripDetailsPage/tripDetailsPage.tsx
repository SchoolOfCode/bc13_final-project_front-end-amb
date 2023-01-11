import './tripDetailsPage.css'

const TripDetails = ({tripDetails}:any) => {

    console.log(tripDetails)
    return <div className="trip-details-page">
        {tripDetails && <div>
        <h1>{tripDetails.group}</h1>
        <p>Date: {tripDetails.date}</p>
        </div>}
      
       
        </div>
}

export default TripDetails


  /* 
        <p>Destination: {tripDetails.destination}</p>
        {/* {/* <p>Members: {tripDetails.member}</p> */
        /* <p>Itinerary: {tripDetails.event}</p> */  