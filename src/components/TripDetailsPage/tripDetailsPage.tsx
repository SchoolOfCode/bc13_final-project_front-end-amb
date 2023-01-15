import './tripDetailsPage.css'


const TripDetails = ({tripDetails}:any) => {

    console.log(tripDetails)

    return <div className="trip-details-page">

            <div className="trip-details">
                {tripDetails.group && <div>
                <h1>{tripDetails.group}</h1>

                {tripDetails.date.length > 1 ? <button>vote on date</button> : <p>date: {tripDetails.date[0].name}</p>}

                <p>destination: {tripDetails.destination}</p>
                    
                <p>trip members:</p>
                {tripDetails.member.length > 1 ? tripDetails.member.map((mem:any) => {return <p>{mem.name}</p>}) : <p>Members: {tripDetails.member[0].name}</p>}

                {tripDetails.event.length > 1 ? <button>vote on itinerary</button> : <p>itinerary: {tripDetails.event[0].type}</p>}

                </div>}
            </div>
       
        </div>
}

export default TripDetails
