import './tripDetailsPage.css'

const TripDetails = ({tripDetails}:any) => {

    console.log(tripDetails)
    return <div className="trip-details-page">
        {tripDetails.group && <div>
        <h1>{tripDetails.group}</h1>
        <p>Date: {tripDetails.date.name}</p>
        <p>Destination: {tripDetails.destination}</p>
        <p>Members: {tripDetails.member.name}</p>
        <p>Itinerary: {tripDetails.event.type}</p>
        </div>}
      
       
        </div>
}

export default TripDetails


  /*  type: "Restearant", location: "aaaaa", date: 
        <p>Destination: {tripDetails.destination}</p>
        {/* {/* <p>Members: {tripDetails.member}</p> */
        /* <p>Itinerary: {tripDetails.event}</p> */  