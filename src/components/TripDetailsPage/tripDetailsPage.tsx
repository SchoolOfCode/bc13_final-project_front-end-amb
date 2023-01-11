import './tripDetailsPage.css'

const TripDetails = ({tripDetails}:any) => {

    console.log(tripDetails)
    return <div className="trip-details-page">
        {tripDetails && <h1>{tripDetails.group}</h1>}
        {/* <p>{trip.startDate}</p><p>{trip.endDate}</p>
        <p>{trip.location}</p> */}
    </div>
}

export default TripDetails