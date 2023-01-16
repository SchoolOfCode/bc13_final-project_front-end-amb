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
                },
                {
                    name: "2050-01-11"
                }
              ],
        event: [
                {
                    type: "Accomodation",
                    location: "salisbury",
                    date: "2023-01-13T11:11"
                },
                {
                    type: "Accomodation",
                    location: "london",
                    date: "2023-01-13T11:11"
                },
                {
                    type: "Accomodation",
                    location: "devon",
                    date: "2023-01-13T11:11"
                }
               ],
        member: [
                {
                    name: "aaa",
                    email: "aaa@aaaa.com"
                },
                {
                    name: "bbb",
                    email: "aaa@aaaa.com"
                },
                {
                    name: "ccc",
                    email: "aaa@aaaa.com"
                }
                ],
        
     }

]


const ViewTrips = ({setTripDetails, pageSelect, trip}:any) => { 

  
    return (
        
       <div className='view-trips-div'>
        <h1>your trips</h1>
        
        <div className="view-trip-form-item">
       
            {tripsArr.map((trip) => {
                return (<div key={Math.random() * 10000}>


                    <TripCard className="trip-card" tripDetails={setTripDetails} handlePage={pageSelect} trip={trip}></TripCard>

                   


                </div>)
            })}
        </div>
        <button className="view-trip-cancel-button cancel-button" onClick={() => {pageSelect("dashboard")}}>cancel</button>
        </div>
        
    )

}

export default ViewTrips;