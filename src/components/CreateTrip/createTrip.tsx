import React from 'react'
import {useForm} from 'react-hook-form'
import './createTrip.css'
import { useAuth0 } from '@auth0/auth0-react'
import MembersForm from './MembersForm/MembersForm'
import DateForm from './DateForm/DateForm'
import Itinerary from './Itinerary/Itinerary'

const CreateTrip = () => {

    const { user, isAuthenticated, getAccessTokenSilently} = useAuth0()

const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors }
} = useForm();

function onSubmit(data:any) {
    data.Admin = user?.sub
    console.log(data)
}



    return (<>
    
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="create-trip-form">
        <label>Group Name</label>
        <input
            type="text"       
            {...register("group", {
                required: true,
                minLength: 3,
            })}/>
            {errors.group && <p>This field needs to be completed</p>}

        <label>Destination</label>
        <input
            type="text"
            {...register("destination", {
                required: true,
                minLength: 3,
            })}/>
            {errors.destination && <p>This field needs to be completed</p>}

        <DateForm
            {...{ control, register, errors}}
        />
        <MembersForm
            {...{ control, register, errors}}
        />
        <Itinerary
            {...{ control, register, errors}}
        />
    

        {/* <label>Itinerary</label>
        <input
            type="text"
            {...register("itinerary", {
                required: true,
                minLength: 3,
            })}/>
            {errors.itinerary && <p>This field needs to be completed</p>} */}


        
            
        <input type="submit" value="submit"></input>
       


        
        </div>
    </form>
    
    </>)
}

export default CreateTrip  