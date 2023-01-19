import './TripCard.css'

const TripCard = ({tripObject, handlePage, getTripDetail}:any) => {
console.log(tripObject)


    return (
    <div className="trip-card">
        <h3>{tripObject?tripObject.trip_name:null}</h3> 
    </div>)
}
//, tripDetailsVisibility   
export default TripCard

