import './tripDetailsPage.css'
import { useState } from 'react';
import VotingDropdown from './VotingDropdown/votingDropdown';
// import VoteWrapper from './VoteWrapper/VoteWrapper'




const TripDetails = ({fetchTripDetails, tripChoices}:any) => {

/*
Plan:
we need to record that they've voted for a particular category (eg. the budget)
we need to record how many times they've voted out of a possible three votes
we need to record the option they've picked so that we can send it to the backend, eg. one vote for 'hotel'
we need to hide the dropdown they've already voted on so they can't vote again
we need to hide the submit button once they've voted

user votes on budget, we disable dropdown and replace with 'your vote on this category has been registered'
has_voted should only be set when they click relevant submit button
this should trigger hide of the dropdown and the submit button - replace with a message saying thanks for voting

what they've voted for is handled onChange
if they've voted is handled onClick of submit button


*/   

    const [budgetVote, setBudgetVote] = useState('')
    const [accommodationVote, setAccommodationVote] = useState('')
    // const [restaurantVote, setRestaurantVote] = useState('')
    const [hasVotedBudget, setHasVotedBudget] = useState(false)
    const [hasVotedAccommodation, setHasVotedAccommodation] = useState(false)
    // const [hasVotedRestaurant, setHasVotedRestaurant] = useState(false)


    function handleChange(param:any) {
        console.log('legend for real', param.target.value)
        console.log(param.target.category, "what are we doing?!") 
       if (param.target.className === 'budget') {
           setBudgetVote(param.target.value)
           setHasVotedBudget(true)           
       } else if (param.target.className === 'accommodation') {
           setAccommodationVote(param.target.value)
           setHasVotedAccommodation(true)
       }
       // else if (param.target.className === 'restaurant') {
         //     setRestaurantVote(param.target.value)
            //     setHasVotedRestaurant(true)
            // }
    }


    return (
        <div className="trip-details-page">
        {tripChoices.success && <div className="nonVoteTripDetails">
             <h1>{tripChoices.payload[0].trip_name} </h1>
             <h3>destination: {tripChoices.payload[0].choice_name}</h3>
            <h3>dates: {tripChoices.payload[1].choice_name}</h3> 
        </div>}
        
        <div className="votingDropdown">
        <p>cast your vote for...</p>
        {tripChoices.success && 
        <VotingDropdown 
        handleChange={handleChange}
        tripChoices={tripChoices}
        category={'budget'}/>}
        
        {tripChoices.success && <VotingDropdown 
        tripChoices={tripChoices}
        handleChange={handleChange}
        category={'accommodation'}/>}

        {/* {tripChoices.success && <VotingDropdown 
        tripChoices={tripChoices}
        category={'restaurant'}/>} */}
        </div>
        </div>
    )
}


export default TripDetails;

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



// function handleAll() {
//             setDataVote(false)
//             setItineraryVote(false)}
    
//     function handleDate() {
//         setDataVote(current => !current)


// function registerVote(vote:any) {
//             console.log(vote.from, "has been voted on") // TODO: fetch request called here to add a vote to the corresponding choice
//             alert("your vote has been registered.")
//             handleAll()
//         }


// function registerItineraryItem(item:any) {
//             console.log(item.type)
//             alert("your vote has been registered")
//         }


// {/* <button className="button" onClick={handleDate}>vote on the dates!</button> :  */}
// {dateVote && <VoteWrapper title="vote on the dates">

// return <div onClick={() => {registerVote(d)}}>   
//<span className='clicked-event'>from: {d.to} to: {d.from}</span>
// </div>
//})}
//<button className="vote-form-button button" onClick={handleDate}>close</button>
//</VoteWrapper>}

                
                    
// <p>trip members:</p>
//{tripDetails.member.length > 1 ? tripDetails.member.map((mem:any) => {return <p>{mem.name}</p>}) : <p>{tripDetails.member[0].name}</p>}

// {tripDetails.event.length > 1 ? <button className="button" onClick={handleItinerary}>vote on itinerary!</button> : 
//<p>itinerary: {tripDetails.event[0].itinerary[0].type}</p>}
// {itinereryVote && <VoteWrapper title="vote on the itinerary">
// {tripDetails.event.map((events:any) => {
//  return <div>
//      <p>event</p>
//     { events.itinerary.map((event:any) => {
//       return <div>  
// <span  id='clicked-event' onClick={() => {registerItineraryItem(event)}}>{event.type} - {event.name} - {event.date_time}</span>
// </div>
// })}
// </div>
//})}
// <button className="vote-form-button" onClick={handleItinerary}>close</button>
//</VoteWrapper>}