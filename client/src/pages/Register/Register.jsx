
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './Register.css'; 
import { register } from '../../services/auth';

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
        const userData = await register(fullName, email, phoneNumber, password);

        navigate('/login');
    } catch (error) {
        if (error.response) {
            if (error.response.status === 500) {
                setErrorMessage('Server error. Please try again later.');
            } else {
                setErrorMessage('Email or password is incorrect.');
            }
        } else {
            setErrorMessage('An unexpected error occurred. Please try again.');
        }
        console.error('Login error:', error);
    }
}
    return (
      <div className="register-container">
      <div className="left-panel">
        <h1>SEA Salon</h1>
        <p>Selamat Datang</p>
        <div className="social-icons">
          <span className="icon">&#9422;</span>
          <span className="icon">&#9418;</span>
          <span className="icon">f</span>
        </div>
      </div>
      <div className="right-panel">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required onChange={(e) => setFullName(e.target.value)}/>
          <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
          <input type="text" placeholder="Phone Number" required onChange={(e) => setPhoneNumber(e.target.value)}/>
          <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit">Register</button>
        </form>
        <p className="login-link">
          Sudah punya akun? <Link to="/login">Login!</Link>
        </p>
      </div>
    </div>
    );
  }

  