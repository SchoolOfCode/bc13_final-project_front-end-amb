import React, {useState} from 'react'
import './joinTrip.css'

const JoinTrip = (props:any) => {

const [tripID, setTripID] = useState("")


function handleSubmit(e:any) {
     e.preventDefault();

    console.log(tripID)

    props.visibility()

    setTripID("")
}

    return <div className="join-form">
        <form onSubmit={handleSubmit}>
            <label>Trip ID
                <input type="text" placeholder='enter trip ID here...' onChange={(e) => {setTripID(e.target.value)}} value={tripID}></input>
            </label>
            <input type="submit" value="Submit"></input>
        </form>
    </div>
}

export default JoinTrip