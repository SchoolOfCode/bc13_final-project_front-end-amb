import './TripCard.css'

const TripCard = ({tripObject, handlePage, getTripDetail}:any) => {
console.log(tripObject)
async function handleClick(id:any) {
    handlePage("details")
    // getTripDetail(tripObject.trip_id)
    const res = await fetch(`http://localhost:3001/api/trip/${id}`)
    const json = res.json
}

    return (
    <div className="trip-card" onClick={handleClick}>
        <h3>{tripObject?tripObject.trip_name:null}</h3> 
    </div>)
}
//, tripDetailsVisibility   
export default TripCard

