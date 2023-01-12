import React from 'react'
import {useForm} from 'react-hook-form'
import './createTrip.css'
import { useAuth0 } from '@auth0/auth0-react'
import MembersForm from './MembersForm/MembersForm'
import DateForm from './DateForm/DateForm'
import ItineraryForm from './ItineraryForm/ItineraryForm'
// import Navbar from '../NavBar/NavBar';

const CreateTrip = ({setTripcancelButton, setTripDetails, tripDetailsVisibility, pageSelect}:any) => {

    const { user} = useAuth0() //, isAuthenticated, getAccessTokenSilently

const {
    register,
    control,
    handleSubmit,
    //reset,
    formState: { errors }
} = useForm();

function onSubmit(data:any) {
    data.Admin = user?.sub  // TODO: Create a fetch request to retrieve the trip ID and save the trip to a database.
    console.log(data) // TODO: Create a function that changes state in the dashboard component to 'data'.
    setTripDetails(data)
    pageSelect("details")
}


    return (<>
    <div className="createTripContainer">
{/* 
    <div className="create-trip-item">
        <Navbar></Navbar>
    </div> */}

    <h1>Create Trip </h1>

    <form className="create-trip-item" onSubmit={handleSubmit(onSubmit)}>
    <div className="create-trip-form">
        <label>Trip name</label>
        <input
            type="text"       
            {...register("group", {
                required: true,
                minLength: 3,
            })}/>
            {errors.group && <p>This field needs to be completed.</p>}

        <label>destination</label>
        <input
            type="text"
            {...register("destination", {
                required: true,
                minLength: 3,
            })}/>
            {errors.destination && <p>This field needs to be completed.</p>}

        <DateForm
            {...{ control, register, errors}}
        />
        <MembersForm
            {...{ control, register, errors}}
        />
        <ItineraryForm
            {...{ control, register, errors}}
        />
            
        <input className= "submit-button" type="submit" value="submit"></input>

        
        
        </div>
    </form>

    <button className="create-cancel-button cancel-button" onClick={() => {pageSelect("dashboard")}}>cancel</button>

    </div>
    </>)
}

export default CreateTrip  