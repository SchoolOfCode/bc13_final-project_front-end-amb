import React, {useState, useEffect} from 'react';
import './App.css';
import Dashboard from '../Dashboard/dashboard'
import Navbar from '../NavBar/NavBar';
import { Auth0Provider } from "@auth0/auth0-react";
import { useAuth0 } from '@auth0/auth0-react'

let counter = 1;

function App() {

  const { user, isAuthenticated, getAccessTokenSilently} = useAuth0()



  return (
      <>
       <Auth0Provider 
    
          domain="dev-otxf3y3m35xq561z.uk.auth0.com"
          clientId="FYGE0Lx0PPU5t9yUHOMakD0NK33AjMqE"
          redirectUri={window.location.origin}
          audience="https://dev-otxf3y3m35xq561z.uk.auth0.com/api/v2/"
          scope="read:current_user update:current_user_metadata"
          useRefreshTokens={true}
        >
      
        <Navbar></Navbar>
        <Dashboard></Dashboard>
        
      </Auth0Provider>

    </>

  );
}

export default App;
//


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import './App.css';
// import Login from '../Login/login'
// import Dashboard from '../Dashboard/dashboard'
// import Navbar from '../NavBar/NavBar';
// import ViewTripsPage from "../ViewTripsPage/viewTripsPage";

// function App() {
//   return (<>
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/viewTripsPage" element={<ViewTripsPage />} />
//       </Routes>
//         <Login></Login>

//     </Router>
//     </>
//   );
// }

// export default App;