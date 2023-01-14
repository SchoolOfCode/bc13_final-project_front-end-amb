import "./viewTripsPage.css"

import TripCard from "./TripCard/TripCard";

const tripsArr = [


     {
        Admin: "newUser",
        group: "Minty Blobfish",
        destination: "aaaaa",
        date: [
                {
                    name: "2023-01-11"
                }
              ],
        event: [
                {
                    type: "Accomodation",
                    location: "location",
                    date: "2023-01-13T11:11"
                }
               ],
        member: [
                {
                    name: "aaa",
                    email: "aaa@aaaa.com"
                }
                ],
        
     },
     {
        Admin: "newUser",
        group: "Hen Do",
        destination: "aaaaa",
        date: [
                {
                    name: "2023-01-11"
                }
              ],
        event: [
                {
                    type: "Accomodation",
                    location: "location",
                    date: "2023-01-13T11:11"
                }
               ],
        member: [
                {
                    name: "aaa",
                    email: "aaa@aaaa.com"
                }
                ],
        
     },
     {
        Admin: "newUser",
        group: "Stag Weekend",
        destination: "aaaaa",
        date: [
                {
                    name: "2023-01-11"
                }
              ],
        event: [
                {
                    type: "Accomodation",
                    location: "location",
                    date: "2023-01-13T11:11"
                }
               ],
        member: [
                {
                    name: "aaa",
                    email: "aaa@aaaa.com"
                }
                ],
        
     }

]


const ViewTrips = (props:any) => {

  
    return (
        
       <div className='view-trips-div'>
        <h1>your trips</h1>
        
        <div className="view-trip-form-item">
       
            {tripsArr.map((trip) => {
                return (<div key={Math.random() * 10000}>

                    <TripCard className="trip-card" tripDetails={props.setTripDetails} handlePage={props.pageSelect} trip={trip}></TripCard>

                </div>)
            })}
        </div>
        <button className="view-trip-cancel-button cancel-button" onClick={() => {props.pageSelect("dashboard")}}>cancel</button>
        </div>
        
    )

}

export default ViewTrips;