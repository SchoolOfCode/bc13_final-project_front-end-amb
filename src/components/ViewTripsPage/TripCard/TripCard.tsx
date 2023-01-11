import './TripCard.css'

const TripCard = ({trip, handleTripDetailsVisibility}:any) => {

function handleClick() {
    handleTripDetailsVisibility()
    
}

    return (
    <div className="trip-card" onClick={handleClick}>
        <h3>{trip.tripName}</h3> 
        <p></p>
    </div>)
}
//, tripDetailsVisibility   
export default TripCard

