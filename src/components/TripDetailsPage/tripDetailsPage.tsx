import './tripDetailsPage.css'
import { useState } from 'react';
import CategoryDropdown from './CategoryDropdown/categoryDropdown';

/**
 * user selects option from dropdown
 * write function that updates state
 * function gets called onchange (onchange of the dropdown input)
 * this state records the selected option
 * this state will be used to send a fetch (post) request
 * in the post request we are going to:
 * - update the vote count by 1
 * - add into the votes table the choice id (?)
 * -  */


const TripDetails = ({fetchTripDetails, tripChoices}:any) => {

    
    // const [budgetVote, setBudgetVote] = useState('')
    // const [accommodationVote, setAccommodationVote] = useState('')

    function handleChange(param:any) {
        console.log('legend for real', param.target.value)
    //can this live in category dropDown?
    //change name to VOTING FORM

         
        // setBudgetVote(e.target.value)
    }




    




   
 
    return (
        <div className="trip-details-page">
        {tripChoices.success && <div className="nonVoteTripDetails">
             <h1>{tripChoices.payload[0].trip_name} </h1>
             <h3>destination: {tripChoices.payload[0].choice_name}</h3>
            <h3>dates: {tripChoices.payload[1].choice_name}</h3> 
        </div>}
        
        <div className="categoryDropdown">
        {tripChoices.success && <CategoryDropdown 
        handleChange={handleChange}
        tripChoices={tripChoices}
        category={'budget'}/>}
        
        {tripChoices.success && <CategoryDropdown 
        tripChoices={tripChoices}
        handleChange={handleChange}
        category={'accommodation'}/>}

        {/* {tripChoices.success && <CategoryDropdown 
        tripChoices={tripChoices}
        category={'restaurant'}/>} */}
        </div>
        </div>
    )
}


export default TripDetails;



// import VoteWrapper from './VoteWrapper/VoteWrapper'



// const TripDetails = ({tripDetails1}:any) => {

//     const [dateVote, setDataVote] = useState(false)
//     const [itinereryVote, setItineraryVote] = useState(false)    
    
  
      

//     function handleDate() {
//         setDataVote(current => !current)
//     }

// // //css merge conflict
// //     function renderFields(fields:any) {  // TODO: figure out a way to conditionally render the component, then get it to disappear once a vote has been cast..
// //                                         // maybe have the functionality in a seperate component that we render instead of a div?
       
// //         return fields.map((field:any) => {
            
// //             return <div key={Math.random() * 100}>
// //                         <p>from: {field['from']}  to: {field['to']}</p>     
// //                         <button className="button" onClick={() => {closePopup()
// //                         }}>vote</button>
// //                     </div>
// //         })}
// // //development merge conflict
//     function handleItinerary() {
//         setItineraryVote(current => !current)
//     }

//     function handleAll() {
//         setDataVote(false)
//         setItineraryVote(false)
// //development merge conflict
//     }

//     function registerVote(vote:any) {
//         console.log(vote.from, "has been voted on") // TODO: fetch request called here to add a vote to the corresponding choice
//         alert("your vote has been registered.")
//         handleAll()
//     }

//     function registerItineraryItem(item:any) {
//         console.log(item.type)
//         alert("your vote has been registered")
//     }

    
  

//     return <div className="trip-details-page">

//             <div className="details-layout">  
//                 {tripDetails.group && <div className="details-layout">
//                 <h1>{tripDetails.group}</h1>

//                 <p>destination: {tripDetails.destination}</p>

//                 {tripDetails.date.length > 1 ?  <button className="button" onClick={handleDate}>vote on the dates!</button> : 
//                                                 <p>date from: {tripDetails.date[0].from} date to: {tripDetails.date[0].to}</p>}

//                 {dateVote && <VoteWrapper title="vote on the dates">
                    
//                      {tripDetails.date.map((d:any) => { 
//                           // TODO: will change to date id
//                          return <div onClick={() => {registerVote(d)}}>   
//                              <span className='clicked-event'>from: {d.to} to: {d.from}</span>
//                              </div>
//                      })}
//                      <button className="vote-form-button button" onClick={handleDate}>close</button>
//                      </VoteWrapper>}

                
                    
//                 <p>trip members:</p>
//                 {tripDetails.member.length > 1 ? tripDetails.member.map((mem:any) => {return <p>{mem.name}</p>}) : <p>{tripDetails.member[0].name}</p>}

//                 {tripDetails.event.length > 1 ? <button className="button" onClick={handleItinerary}>vote on itinerary!</button> : 
//                                                 <p>itinerary: {tripDetails.event[0].itinerary[0].type}</p>}

//                 {itinereryVote && <VoteWrapper title="vote on the itinerary">
//                         {tripDetails.event.map((events:any) => {
//                            return <div>
//                             <p>event</p>
//                             { events.itinerary.map((event:any) => {
//                                 return <div>  
                                                                    
//                                     <span  id='clicked-event' onClick={() => {registerItineraryItem(event)}}>{event.type} - {event.name} - {event.date_time}</span>
//                                 </div>
//                         })}
//                             </div>
//                         })}
//                         <button className="vote-form-button" onClick={handleItinerary}>close</button>
//                     </VoteWrapper>}

//                 </div>}
//             </div>
           
//        </div> 
// }

// export default TripDetails

