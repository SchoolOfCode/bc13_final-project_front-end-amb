import React from 'react'
import {useForm} from 'react-hook-form'
import './createTrip.css'

const CreateTrip = () => {

const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
} = useForm();

function onSubmit(data:any) {
    console.log(data)
}



    return (<>
    <div className="create-trip-form">
    <form onSubmit={handleSubmit(onSubmit)}>
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

        <label>Date</label>
        <input
            type="date"
            {...register("date", {
                required: true,
                minLength: 3,
            })}/>
            {errors.date && <p>This field needs to be completed</p>}

        <label>Itinerary</label>
        <input
            type="text"
            {...register("itinerary", {
                required: true,
                minLength: 3,
            })}/>
            {errors.itinerary && <p>This field needs to be completed</p>}

            
        <input type="submit" value="submit"></input>
       


        

    </form>
    </div>
    </>)
}

export default CreateTrip