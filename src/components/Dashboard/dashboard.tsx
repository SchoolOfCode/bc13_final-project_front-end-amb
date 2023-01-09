import React, {useState} from 'react'
import CreateTrip from '../CreateTrip/createTrip'
import JoinTrip from '../JoinTripPage/joinTrip'
import ViewTrips from '../ViewTripsPage/viewTripsPage'
import TripDetails from '../TripDetailsPage/tripDetailsPage'


const Dashboard = () => {

    const [createTripVisibility, setCreateTripVisibility] = useState(false)
    const [joinTripVisibility, setJoinTripVisibility] = useState(false)
    const [viewTripVisibility, setViewTripVisibility] = useState(false)

    function handleCreateTripVisibility() {
        setCreateTripVisibility((current) => !current)
    }

    function handleJoinTripVisibility() {
        setJoinTripVisibility((current) => !current)
    }

    function handleViewTripVisibility() {
        setViewTripVisibility((current) => !current)
    }

    return (<>

    <h1>Where are we going?</h1>

    <button onClick={() => {handleCreateTripVisibility()}}>Create Trip</button>

    <div style={{visibility: createTripVisibility ? 'visible' : 'hidden'}}>
        <CreateTrip></CreateTrip>
    </div>

    <button onClick={() => {handleJoinTripVisibility()}}>Join Trip</button>

    <div style={{visibility: joinTripVisibility ? 'visible' : 'hidden'}}>
        <JoinTrip visibility={handleJoinTripVisibility}></JoinTrip>
    </div>

    <button onClick={() => {handleViewTripVisibility()}}>View Trip</button>

    <div style={{visibility: viewTripVisibility ? 'visible' : 'hidden'}}>
        <ViewTrips></ViewTrips>
    </div>

    <div>
        <TripDetails></TripDetails>
    </div>
    </>
)}

export default Dashboard