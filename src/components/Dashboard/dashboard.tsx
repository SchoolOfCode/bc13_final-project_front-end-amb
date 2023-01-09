import React from 'react'
import CreateTrip from '../CreateTrip/createTrip'
import JoinTrip from '../JoinTripPage/joinTrip'
import ViewTrips from '../ViewTripsPage/viewTripsPage'
import TripDetails from '../TripDetailsPage/tripDetailsPage'


const Dashboard = () => {
    return <>
    <CreateTrip></CreateTrip>
    <JoinTrip></JoinTrip>
    <ViewTrips></ViewTrips>
    <TripDetails></TripDetails>
    </>
}

export default Dashboard