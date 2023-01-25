import "./tripDetailsPage.css";
import { useState } from "react";
import VotingDropdown from "./VotingDropdown/votingDropdown";
// import { set } from 'react-hook-form';
// import VoteWrapper from './VoteWrapper/VoteWrapper'

const TripDetails = ({ fetchTripDetails, tripChoices }: any) => {
  /*
Plan:
we need to record that they've voted for a particular category (eg. the budget)
we need to record the option they've picked so that we can send it to the backend, eg. one vote for 'hotel'

what they've voted for is handled onChange
if they've voted is handled onClick of submit button

 POST REQUEST:
 * in the post request we are going to:
 * - update the vote count by 1
 * - add into the votes table the choice id (?)
 * - 


*/
  const [budgetVote, setBudgetVote] = useState("");
  const [accommodationVote, setAccommodationVote] = useState("");
  const [restaurantVote, setRestaurantVote] = useState("");
  const [hasVotedBudget, setHasVotedBudget] = useState(false);
  const [hasVotedAccommodation, setHasVotedAccommodation] = useState(false);
  const [hasVotedRestaurant, setHasVotedRestaurant] = useState(false);

  function handleChange(e: any) {
    console.log("lolllllll");
    // setBudgetVote(e.target.value)
    console.log(e.target.value, "this is e.target");
  }
  //  console.log(budgetVote, 'this is the budget vote')

  // user selects option from dropdown
  // write function that updates state for budget
  // update function to apply to accom and restaurant
  // function gets called onchange (onchange of the dropdown input)
  // this state records the selected option
  // this state will be used to send a fetch (post) request

  function handleSubmits(params: any) {
    if (params === "budget") {
      setHasVotedBudget(true);
    } else if (params === "accommodation") {
      setHasVotedAccommodation(true);
    } else if (params === "restaurant") {
      setHasVotedRestaurant(true);
    }
    console.log(params);
  }

  // setHasVotedBudget(true)
  // console.log(hasVotedBudget, "are we still legends?")

  return (
    <div className="trip-details-page">
      <div className="trip-details-container">
        {tripChoices.success && (
          <div className="nonVoteTripDetails">
            <h1>{tripChoices.payload[0].trip_name} </h1>
            <h3>destination: {tripChoices.payload[0].choice_name}</h3>
            <h3>dates: {tripChoices.payload[1].choice_name}</h3>
          </div>
        )}

        <div className="votingDropdown">
          <p>cast your vote for...</p>
          {tripChoices.success && !hasVotedBudget && (
            <VotingDropdown
              handleChange={handleChange}
              handleSubmits={handleSubmits}
              tripChoices={tripChoices}
              category={"budget"}
            />
          )}
          {tripChoices.success && hasVotedBudget && (
            <p>your vote on the budget has been registered</p>
          )}

          {tripChoices.success && !hasVotedAccommodation && (
            <VotingDropdown
              tripChoices={tripChoices}
              handleChange={handleChange}
              handleSubmits={handleSubmits}
              category={"accommodation"}
            />
          )}
          {tripChoices.success && hasVotedAccommodation && (
            <p>your vote on the accommodation has been registered</p>
          )}

          {tripChoices.success && !hasVotedRestaurant && (
            <VotingDropdown
              tripChoices={tripChoices}
              handleChange={handleChange}
              handleSubmits={handleSubmits}
              category={"restaurant"}
            />
          )}
          {tripChoices.success && hasVotedRestaurant && (
            <p>your vote on the restaurant has been registered</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TripDetails;

// function handleAll() {
//             setDataVote(false)
//             setItineraryVote(false)}

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
