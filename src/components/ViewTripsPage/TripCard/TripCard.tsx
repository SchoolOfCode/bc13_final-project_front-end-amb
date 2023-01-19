import './TripCard.css'



const TripCard = ({trip, handlePage, fetchTripDetails}:any) => {
    console.log(trip)
    function handleClick() {
        handlePage("details")
        
        fetchTripDetails(trip.trip_id)
        
    }

    return (
    <div className="trip-card" onClick={handleClick}>
        <h3>{trip?trip.trip_name:null}</h3> 
    </div>)
}
//, tripDetailsVisibility   
export default TripCard

//put back tripDetails and test if it works?
//ask lewis why it is there



//user clicks on a card, this needs to trigger a get by trip id fetch request.
//it also needs to trigger the handlePage rendering.
//trip details (voting choices etc) need to be returned from the fetch request.

//async function that takes in trip id 
//returns categories and choices 
//put this data object in piece of state
//render data on trips details page
