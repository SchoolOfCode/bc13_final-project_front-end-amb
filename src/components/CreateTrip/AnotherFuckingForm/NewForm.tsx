import {useState} from 'react'
import { useAuth0 } from "@auth0/auth0-react";

type trip_data = {
    trip_id: number
    trip_name: string
    admin_id: string
    user_id: string
}

const url = 'http://localhost:3001/api'

const NewForm = ({ActualObj, CreatingObj}:any) => {

    const { user } = useAuth0();
    const [tripName, setTripName] = useState("")
    const [destination, setDestination] = useState("")
    const [object, setObject] = useState({})
    const [date, setDate] = useState("")

async function fetchall() {

    let ob = {
        "trip_name": tripName,
        "admin_id": user?.sub
    }
    console.log(ob)
    const response = await fetch(`${url}/trip`, {
        method:"POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify(ob)
    })

    let data = await response.json();
    console.log(data.payload[0])
    const tripData = data.payload[0]
    setObject({...tripData})
    const userData = await memberTable(tripData);
    const destinationData = await destinationTable(tripData)
    
    const dateData = await dateTable(tripData)

    const choicesData = await choicesDestinationTable(destinationData)

    const dateChoicesData = await choicesDateTable(dateData)

    CreatingObj(tripData)
    console.log(object)
}

async function memberTable(objectData:any) {
    let ob = {
        "trip_id": objectData.trip_id,
        "user_id": objectData.admin_id,
    }
    const response = await fetch(`${url}/member`, {
        method:"POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify(ob)
    })

    let data = await response.json();
    console.log(data.payload[0])
    let userData = data.payload[0]
    setObject({...object, userData})
    return userData;
}

async function destinationTable(objectData:any) {
    let ob = {
        "trip_id": objectData.trip_id,
        "category": "destination",
        "selected_choice": destination
    }
    const response = await fetch(`${url}/poll`, {
        method:"POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify(ob)
    })
    let data = await response.json();
    console.log(data.payload[0])
    let destinationData = data.payload[0]
    setObject({...object, destinationData})
    return destinationData;
}

async function dateTable(objectData:any) {
    let ob = {
        "trip_id": objectData.trip_id,
        "category": "date",
        "selected_choice": date
    }
    const response = await fetch(`${url}/poll`, {
        method:"POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify(ob)
    })
    let data = await response.json();
    console.log(data.payload[0])
    let dateData = data.payload[0]
    setObject({...object, dateData})
    return dateData;
}

async function choicesDestinationTable(destinationData:any) {
    let ob = {
        "category": "destination",
        "choice_name": destination,
        "poll_id": destinationData.poll_id
    }
    const response = await fetch(`${url}/choices`, {
        method:"POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify(ob)
    })
    let data = await response.json();
    let choiceData = data.payload[0]
    console.log(choiceData)
    setObject({...object, choiceData})
    return choiceData;
}

async function choicesDateTable(dateData:any) {
    let ob = {
        "category": "date",
        "choice_name": date,
        "poll_id": dateData.poll_id
    }
    const response = await fetch(`${url}/choices`, {
        method:"POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify(ob)
    })
    let data = await response.json();
    let choiceData = data.payload[0]
    console.log(choiceData)
    setObject({...object, choiceData})
    return choiceData;
}





    return (
      <>
        <div className="form-page">
          <label className="form-page-label">
            {" "}
            enter trip name
            <input
              className="form-page-input-field"
              type="text"
              name="trip_name"
              value={tripName}
              onChange={(e) => {
                setTripName(e.target.value);
              }}
            ></input>
          </label>
          <label className="form-page-label">
            {" "}
            enter destination
            <input
              
              className="form-page-input-field"
              type="text"
              name="destination"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
            ></input>
          </label>
          <label className="form-page-label">
            {" "}
            enter date
            <input
              className="form-page-input-field"
              type="text"
              name="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            ></input>
          </label>
        </div>

        <button className='submit-button'
          onClick={() => {
            fetchall();
          }}
        >
          submit
        </button>
      </>
    );
}

export default NewForm


