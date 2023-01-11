import './TripCard.css'

const TripCard = ({trip, handleTripDetailsVisibility, tripDetails}:any) => {

function handleClick() {
    handleTripDetailsVisibility()
    tripDetails(trip)
    
}

    return (
    <div className="trip-card" onClick={handleClick}>
        <h3>{trip.group}</h3> 
    </div>)
}
//, tripDetailsVisibility   
export default TripCard

