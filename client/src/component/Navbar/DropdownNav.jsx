import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DropdownNav.css';
import { logout } from '../../services/auth.js';

const Dropdown = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsOpen(false);
      setIsLoggedIn(false);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="profile-icon" onClick={toggleDropdown}>
        &#x1F464;
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <Link to="/dashboard" className="dropdown-item" onClick={() => setIsOpen(false)}>Dashboard</Link>
          {isLoggedIn ? (
            <Link to="/login" className="dropdown-item" onClick={handleLogout}>Logout</Link>
          ) : (
            <Link to="/login" className="dropdown-item" onClick={() => setIsOpen(false)}>Login</Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;