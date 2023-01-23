import './tripDetailsPage.css'

const TripDetails = ({fetchTripDetails}:any) => {
    return (
        <div className="trip-details-page">
        <div className="nonVoteTripDetails">
            <h1>name of trip taken from view trips prop of trip_id</h1>
            <h2>destination taken from trip details fetch request</h2>
            <h3>dates of trip taken from details of fetch request</h3>
        </div>
        <div className="voteTripDetailsSection">
            <div className="voteBudget">
            <select className='dropdowns' name="budget-category">
              <option  value="" disabled selected>vote on budget</option>
              <option value="option-1">option 1</option>
              <option value="option-2">option 2</option>
              <option value="option-3">option 3</option>
              <option value="option-4">option 4</option>
           </select>
           <button>submit button here</button>
            </div>
     
        <div className="voteAccommodation">
        <select className='dropdowns' name="accommodation-category">
              <option  value="" disabled selected>vote on accommodation</option>
              <option value="option-1">option 1</option>
              <option value="option-2">option 2</option>
              <option value="option-3">option 3</option>
              <option value="option-4">option 4</option>
           </select>
           <button>submit button here</button>

            </div>
        
        <div className="voteRestaurant">
        <select className='dropdowns' name="restaurant-category">
              <option  value="" disabled selected>vote on restaurant</option>
              <option value="option-1">option 1</option>
              <option value="option-2">option 2</option>
              <option value="option-3">option 3</option>
              <option value="option-4">option 4</option>
           </select>
           <button>submit button here</button>
            </div>
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

