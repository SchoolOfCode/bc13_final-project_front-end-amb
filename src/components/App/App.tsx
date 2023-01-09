import React from 'react';
import './App.css';
import Login from '../Login/login'
import Dashboard from '../Dashboard/dashboard'
import Navbar from '../NavBar/NavBar';

function App() {
  return (<>


    <Navbar></Navbar>
    <Login></Login>
    <Dashboard></Dashboard>
    </>
  );
}

export default App;
