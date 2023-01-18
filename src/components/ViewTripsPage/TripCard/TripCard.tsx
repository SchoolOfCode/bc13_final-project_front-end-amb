import './TripCard.css'

const TripCard = ({tripObject, handlePage, tripDetails,getTripDetail}:any) => {
console.log(tripObject)
function handleClick() {
    handlePage("details")
    tripDetails(tripObject)
    getTripDetail(tripObject.trip_id)
    
}

    return (
    <div className="trip-card" onClick={handleClick}>
        <h3>{tripObject?tripObject.trip_name:null}</h3> 
    </div>)
}
//, tripDetailsVisibility   
export default TripCard

