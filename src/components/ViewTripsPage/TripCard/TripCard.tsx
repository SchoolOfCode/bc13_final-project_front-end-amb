import './TripCard.css'

const TripCard = ({trip, handlePage, tripDetails}:any) => {
console.log(trip)
function handleClick() {
    handlePage("details")
    tripDetails(trip)
    
}

    return (
    <div className="trip-card" onClick={handleClick}>
        <h3>{trip?trip.trip_name:null}</h3> 
    </div>)
}
//, tripDetailsVisibility   
export default TripCard

