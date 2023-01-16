import './tripDetailsPage.css'
import {useState} from 'react'


const TripDetails = ({tripDetails}:any) => {

    const [dateVote, setDateVote] = useState(false)

    console.log(tripDetails)    // TODO: conditionally render the fields of the form depending on how many choices the trip creator has entered - if more than 1, map.

                                  // TODO: Create a vote box component that takes in all the options and renders a quiz type popup
  

    // TODO: figure out a way to conditionally render the component, then get it to disappear once a vote has been cast..
                                        // maybe have the functionality in a seperate component that we render instead of a div?
       
  

    return <div className="trip-details-page">

            <div className="trip-details">  
                {tripDetails.group && <div>
                <h1>{tripDetails.group}</h1>


                {tripDetails.date.length > 1 ?  <button>vote on the dates!</button> : 
                                                <p>date from: {tripDetails.date[0].from} date to: {tripDetails.date[0].to}</p>}

                <p>destination: {tripDetails.destination}</p>
                    
                <p>trip members:</p>
                {tripDetails.member.length > 1 ? tripDetails.member.map((mem:any) => {return <p>{mem.name}</p>}) : <p>{tripDetails.member[0].name}</p>}

                {tripDetails.event.length > 1 ? <button>vote on itinerary</button> : <p>itinerary: {tripDetails.event[0].type}</p>}

                </div>}
            </div>
       
        </div>
}

export default TripDetails


// date: Array [ {…} ]
// ​​
// 0: Object { from: "2023-01-20", to: "2023-01-23" }
// ​​​
// from: "2023-01-20"
// ​​​
// to: "2023-01-23"
// ​​​
// <prototype>: Object { … }
// ​​
// length: 1
// ​​
// <prototype>: Array []
// ​
// destination: "aaaaa"
// ​
// event: Array [ {…} ]
// ​​
// 0: Object { itinerary: (2) […] }
// ​​​
// itinerary: Array [ {…}, {…} ]
// ​​​​
// 0: Object { type: "Restaurant", name: "aaa", date_time: "2023-01-24T11:11" }
// ​​​​
// 1: Object { type: "Hotel", name: "bbb", date_time: "2023-01-22T22:22" }
// ​​​​
// length: 2
// ​​​​
// <prototype>: Array []
// ​​​
// <prototype>: Object { … }
// ​​
// length: 1
// ​​
// <prototype>: Array []
// ​
// group: "aaaaa"
// ​
// member: Array [ {…} ]
// ​​
// 0: Object { name: "aaaa", email: "aaaaa" }
// ​​​
// email: "aaaaa"
// ​​​
// name: "aaaa"
// ​​​
// <prototype>: Object { … }
// ​​
// length: 1