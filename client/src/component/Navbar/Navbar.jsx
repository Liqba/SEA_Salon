import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './DropdownNav';

const Navbar = ({isLoggedIn, setIsLoggedIn}) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-brand">SEA Salon</Link>
      </div>
      <ul className="navbar-list">
      <li className="navbar-item">
          <Link to="/reviews" className="navbar-link">Reviews</Link>
        </li>
        <li className="navbar-item">
          <Link to="/services" className="navbar-link">Services</Link>
        </li>
        <li className="navbar-item">
          <Link to="/branches" className="navbar-link">Branches</Link>
        </li>
        {isLoggedIn && (
          <>
        <li className="navbar-item">
          <Link to="/reservations" className="navbar-link">Reservations</Link>
        </li>
        <li className="navbar-item">
          <Link to="/dashboard" className="navbar-link">Dashboard</Link>
        </li>
          
          </>
        )}
      </ul>
      <Dropdown setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
    </nav>
  );
};

export default Navbar;
