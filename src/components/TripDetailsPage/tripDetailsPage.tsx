import './tripDetailsPage.css'
import {useState} from 'react'


const TripDetails = ({tripDetails}:any) => {

    const [dateVote, setDataVote] = useState(false)
    const [itinereryVote, setItineraryVote] = useState(false)

    console.log(tripDetails)    // TODO: conditionally render the fields of the form depending on how many choices the trip creator has entered - if more than 1, map.

                                  // TODO: Create a vote box component that takes in all the options and renders a quiz type popup
  

    // TODO: figure out a way to conditionally render the component, then get it to disappear once a vote has been cast..
                                        // maybe have the functionality in a seperate component that we render instead of a div?
       

    function handleDate() {
        setDataVote(current => !current)
    }

    function registerVote(vote:any) {
        console.log(vote.from, "has been voted on") // TODO: fetch request called here to add a vote to the corresponding choice
        alert("your vote has been registered.")
        handleDate()
    }

    function handleItinerary() {
        setItineraryVote(current => !current)
    }
  

    return <div className="trip-details-page">

            <div className="trip-details">  
                {tripDetails.group && <div>
                <h1>{tripDetails.group}</h1>

                <p>destination: {tripDetails.destination}</p>

                {tripDetails.date.length > 1 ?  <button onClick={handleDate}>vote on the dates!</button> : 
                                                <p>date from: {tripDetails.date[0].from} date to: {tripDetails.date[0].to}</p>}

                {dateVote && <div style={{position: 'fixed', width: 'auto', margin: 'auto', height: 'auto', background: 'white', padding: '20px'}}>
                    
                    {tripDetails.date.map((d:any) => {
                        // TODO: will change to date id
                        return <div onClick={() => {registerVote(d)}}>   
                            <span>from: {d.to} to: {d.from}</span>
                            </div>
                    })}
                    <button onClick={handleDate}>close</button>
                    </div>}

                
                    
                <p>trip members:</p>
                {tripDetails.member.length > 1 ? tripDetails.member.map((mem:any) => {return <p>{mem.name}</p>}) : <p>{tripDetails.member[0].name}</p>}

                {tripDetails.event.length > 1 ? <button onClick={handleItinerary}>vote on itinerary</button> : 
                                                <p>itinerary: {tripDetails.event[0].type}</p>}

                {itinereryVote && <div style={{position: 'fixed', width: 'auto', margin: 'auto', top: '10%', height: 'auto', background: 'white', padding: '20px'}}>
                        {tripDetails.event.map((events:any) => {
                            return events.itinerary.map((event:any) => {
                                return <div>
                                    <h6>event</h6>
                                    <span>{event.type}-{event.name} - {event.date_time}</span>
                                </div>
                            })
                        })}
                    </div>}

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