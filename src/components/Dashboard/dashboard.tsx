import React, {useState} from 'react'
import CreateTrip from '../CreateTrip/createTrip'
import JoinTrip from '../JoinTripPage/joinTrip'
import ViewTrips from '../ViewTripsPage/viewTripsPage'
import TripDetails from '../TripDetailsPage/tripDetailsPage'
import { useAuth0 } from '@auth0/auth0-react'
import Login from '../Login/login'
import LogoutButton from '../LogoutButton/LogoutButton'


const Dashboard = () => {

    const { user, isAuthenticated, getAccessTokenSilently} = useAuth0()

    const [createTripVisibility, setCreateTripVisibility] = useState(false)
    const [joinTripVisibility, setJoinTripVisibility] = useState(false)
    const [viewTripVisibility, setViewTripVisibility] = useState(false)
    const [loginVisibility, setLoginVisibility] = useState(true)

    function handleCreateTripVisibility() {
        setCreateTripVisibility((current) => !current)
    }

    function handleJoinTripVisibility() {
        setJoinTripVisibility((current) => !current)
    }

    function handleViewTripVisibility() {
        setViewTripVisibility((current) => !current)

    }

    function handleLoginVisibility() {
setLoginVisibility(current => !current)
    }
    


    return (<>

    <h1>Where are we going?</h1>
    <LogoutButton></LogoutButton>

    <button onClick={() => {handleCreateTripVisibility()}}>Create Trip</button>

    <div style={{visibility: createTripVisibility ? 'visible' : 'hidden'}}>
        <CreateTrip></CreateTrip>
    </div>
<div style={{visibility: loginVisibility ? 'visible' : 'hidden'}}>

    {!isAuthenticated && <Login getStarted={handleLoginVisibility}></Login>}
</div>
    {isAuthenticated ? <button onClick={() => {handleJoinTripVisibility()}}>Join Trip</button> : <p>You need to be logged in to view this</p>}

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