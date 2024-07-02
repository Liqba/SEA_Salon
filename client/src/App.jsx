import { useState } from 'react'
import './App.css'
import {
  Route,
  Routes
} from "react-router-dom";

import Home from './pages/Home/Home.jsx'
import Service from './pages/Service.jsx'
import Branches from './pages/Branches.jsx'
import Reviews from './pages/Reviews/Reviews.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import Reservations from './pages/Reservation.jsx';

import ErrorPage from './error-page.jsx'
import Navbar from './component/Navbar/Navbar.jsx';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='App'>
      <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path='/' element={<Home setIsLoggedIn={setIsLoggedIn} />} errorElement={<ErrorPage/>}/>
        <Route path='/services' element={<Service />} errorElement={<ErrorPage/>}/>
        <Route path='/branches' element={<Branches />} errorElement={<ErrorPage/>}/>
        <Route path='/reviews' element={<Reviews setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>} errorElement={<ErrorPage/>}/>
        <Route path='/dashboard' element={<Dashboard />} errorElement={<ErrorPage/>}/>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} errorElement={<ErrorPage/>}/>
        <Route path='/register' element={<Register />} errorElement={<ErrorPage/>}/>
        <Route path='/reservations' element={<Reservations />} errorElement={<ErrorPage/>}/>
      </Routes>
    </ div>
  )
}

export default App
