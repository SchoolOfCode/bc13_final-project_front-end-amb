import React from 'react'
import {useForm} from 'react-hook-form'
import './createTrip.css'
import { useAuth0 } from '@auth0/auth0-react'
import MembersForm from './MembersForm/MembersForm'
import DateForm from './DateForm/DateForm'
import GroupForm from './GroupForm/GroupForm'
import MultipleEventForm from './MultipleEventForm/MultipleEventForm'
import useMultistepForm from './Hooks/useMultistepForm'


// import Navbar from '../NavBar/NavBar';


const CreateTrip = ({setTripDetails, pageSelect}:any) => {

    const {
        register,
        control,
        handleSubmit,
        getValues,
        setValue,
        //reset,
        formState: { errors }
    } = useForm();

    const {steps, 
        currentStepIndex, 
        step,
        isFirstStep,
        isLastStep,
        back,
        next
    } = useMultistepForm([ 
    <GroupForm {...{register, errors}}/>, 
    <DateForm {...{ control, register, errors}}/>, 
    <MembersForm {...{ control, register, errors}}/>, 
    <MultipleEventForm {...{ control, register, errors, getValues, setValue}}/>
])

    const { user} = useAuth0() //, isAuthenticated, getAccessTokenSilently



function onSubmit(data: any) {
    if(user?.sub){
    data.Admin = user?.sub  // TODO: Create a fetch request to retrieve the trip ID and save the trip to a database.
                            // TODO: Create a function that changes state in the dashboard component to 'data'.
    }
    console.log(data)
    next()

    if(isLastStep){
        setTripDetails(data)
        pageSelect("details")
    }
  
    
}


    return (<>
    <div className="createTripContainer">

    <h1 className='create-trip-h1'>create trip </h1>

        <div className="create-trip-form">
              
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='page-counter'>
                    {currentStepIndex + 1} / {steps.length}
                </div>

                {step}

                <div className='change-page-buttons'>               
                    {!isFirstStep && <button className="button" type="button" onClick={back}>back</button>}
                    <button className="button" type="submit">
                        {isLastStep ? "finish" : "next"}
                    </button>
                </div>

            </form>

{/* 
    <div className="create-trip-item">
        <Navbar></Navbar>
    </div> 

    <h1>create trip </h1>

    <form className="create-trip-item" onSubmit={handleSubmit(onSubmit)}>
    <div className="create-trip-form">
        <label>Trip name</label>
        <input
            placeholder='Trip name'
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

        */}        
        </div>

    <button className="create-cancel-button cancel-button" onClick={() => {pageSelect("dashboard")}}>cancel</button>

    </div>
    </>)
}

export default CreateTrip  



