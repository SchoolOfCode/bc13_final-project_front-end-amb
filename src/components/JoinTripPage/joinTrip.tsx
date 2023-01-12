import React, {useState} from 'react'
import './joinTrip.css'
import Navbar from '../NavBar/NavBar';

const JoinTrip = (props:any) => {

const [tripID, setTripID] = useState("")


function handleSubmit(e:any) {
     e.preventDefault();

    console.log(tripID)

    props.visibility()

    setTripID("")
}

    return <div className="join-form">
        <div className="join-form-item join-nav">
        <Navbar />
        </div>
        <h2>join trip</h2>
        <form className="join-form-item" onSubmit={handleSubmit}>
            <label>Enter trip ID:
                <input className="input-field" type="text" onChange={(e) => {setTripID(e.target.value)}} value={tripID}></input>
            </label>
            <input className = "submit-button" type="submit" value="submit"></input>
        </form>
        <button className="join-cancel-button cancel-button" onClick={props.visibility}>cancel</button>
    </div>
}

export default JoinTrip
 