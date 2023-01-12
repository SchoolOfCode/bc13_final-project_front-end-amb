import "./viewTripsPage.css"
import Navbar from "../NavBar/NavBar";
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
        group: "Natasha's Group",
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
        group: "Kylie's Group",
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

    function handleChange() {
        
    }
    return (
       <div className='view-trips-div'>

       <div className="view-trip-form-item">
            <Navbar />
       </div>
       
       <div className="view-trip-form-item">
       
            {tripsArr.map((trip) => {
                return (<div>

                    <TripCard tripDetails={props.setTripDetails} handlePage={props.pageSelect} trip={trip}></TripCard>
                </div>)
            })}
        </div>
        <button className="view-trip-cancel-button cancel-button" onClick={() => {props.pageSelect("dashboard")}}>cancel</button>
        </div>
        
    )

}

export default ViewTrips