import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Login from '../Login/login'
import Dashboard from '../Dashboard/dashboard'
import Navbar from '../NavBar/NavBar';
import ViewTripsPage from "../ViewTripsPage/viewTripsPage";

function App() {
  return (<>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/viewTripsPage" element={<ViewTripsPage />} />
      </Routes>
        <Login></Login>

    </Router>
    </>
  );
}

export default App;
