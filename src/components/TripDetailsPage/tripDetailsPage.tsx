import './tripDetailsPage.css'
import {useState} from 'react'
import VoteWrapper from './VoteWrapper/VoteWrapper'



const TripDetails = ({tripDetails1}:any) => {

    const [dateVote, setDataVote] = useState(false)
    const [itinereryVote, setItineraryVote] = useState(false)

        // TODO: conditionally render the fields of the form depending on how many choices the trip creator has entered - if more than 1, map.

                                  // TODO: Create a vote box component that takes in all the options and renders a quiz type popup
  

    // TODO: figure out a way to conditionally render the component, then get it to disappear once a vote has been cast..
                                        // maybe have the functionality in a seperate component that we render instead of a div?
       





    const tripDetails = {
        group: 'holiday',
        date: [
                {
                    from: '2023-01-01',
                    to: '2023-01-02'
                },
                {
                    from: '2023-02-02',
                    to: '2023-02-03'
                }
              ],
        destination: 'jamaica',
        member: [
                    {
                        name: 'celia',
                        email: 'celia@gmail.com'
                    },
                    {
                        name: 'lewis',
                        email: 'lewis@gmail.com'
                    },
                    {
                        name: 'Atyib',
                        email: 'atyib@gmail.com'
                    },
                    {
                        name: 'Kylie',
                        email: 'kylie@gmail.com'
                    },
                    {
                        name: 'Dionne',
                        email: 'dionne@gmail.com'
                    },
                    {
                        name: 'Natasha',
                        email: 'natasha@gmail.com'
                    }
                ],
        event: [
                   {
                       itinerary: [ 
                                    {
                                        type: 'hotel',
                                        name: 'big place',
                                        date_time: "2023-11-11T11:11"
                                    },
                                    {
                                        type: 'hotel',
                                        name: 'big place',
                                        date_time: "2023-11-11T11:11"
                                    }
                                  ]
                    },
                    {
                        itinerary: [
                                    {
                                        type: 'restaurant',
                                        name: 'vegan',
                                        date_time: "2023-11-11T11:11"
                                    },
                                    {
                                        type: 'restaurant',
                                        name: 'fish',
                                        date_time: "2022-11-11T11:11"
                                    }

                                    ]
                    }
                    
            ]    
        }
        console.log(tripDetails)

    function handleDate() {
        setDataVote(current => !current)
    }

    function handleItinerary() {
        setItineraryVote(current => !current)
    }

    function handleAll() {
        setDataVote(false)
        setItineraryVote(false)
    }

    function registerVote(vote:any) {
        console.log(vote.from, "has been voted on") // TODO: fetch request called here to add a vote to the corresponding choice
        alert("your vote has been registered.")
        handleAll()
    }

    function registerItineraryItem(item:any) {
        console.log(item.type)
        alert("your vote has been registered")
    }

    
  

    return <div className="trip-details-page">

            <div className="details-layout">  
                {tripDetails.group && <div className="details-layout">
                <h1>{tripDetails.group}</h1>

                <p>destination: {tripDetails.destination}</p>

                {tripDetails.date.length > 1 ?  <button onClick={handleDate}>vote on the dates!</button> : 
                                                <p>date from: {tripDetails.date[0].from} date to: {tripDetails.date[0].to}</p>}

                {dateVote && <VoteWrapper title="vote on the dates">
                    
                     {tripDetails.date.map((d:any) => { 
                          // TODO: will change to date id
                         return <div onClick={() => {registerVote(d)}}>   
                             <span className='clicked-event'>from: {d.to} to: {d.from}</span>
                             </div>
                     })}
                     <button className="vote-form-button" onClick={handleDate}>close</button>
                     </VoteWrapper>}

                
                    
                <p>trip members:</p>
                {tripDetails.member.length > 1 ? tripDetails.member.map((mem:any) => {return <p>{mem.name}</p>}) : <p>{tripDetails.member[0].name}</p>}

                {tripDetails.event.length > 1 ? <button onClick={handleItinerary}>vote on itinerary!</button> : 
                                                <p>itinerary: {tripDetails.event[0].itinerary[0].type}</p>}

                {itinereryVote && <VoteWrapper title="vote on the itinerary">
                        {tripDetails.event.map((events:any) => {
                           return <div>
                            <p>event</p>
                            { events.itinerary.map((event:any) => {
                                return <div>  
                                                                    
                                    <span  id='clicked-event' onClick={() => {registerItineraryItem(event)}}>{event.type} - {event.name} - {event.date_time}</span>
                                </div>
                        })}
                            </div>
                        })}
                        <button className="vote-form-button" onClick={handleItinerary}>close</button>
                    </VoteWrapper>}

                </div>}
            </div>
           
       </div> 
}

export default TripDetails

