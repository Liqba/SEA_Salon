import React, { useState } from 'react';
import './Login.css'; 
import { Link, useNavigate } from 'react-router-dom'; 
import { login } from '../../services/auth';

export default function Login({ setIsLoggedIn }) {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
      event.preventDefault();
      
      try {
          const userData = await login(email, password);
          
          setIsLoggedIn(true);
          navigate('/');
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
    <div className="login-container">
      <div className="left-panel">
        <h1>SEA Salon</h1>
        <p>Selamat Datang kembali</p>
        <div className="social-icons">
          <span className="icon">&#9422;</span>
          <span className="icon">&#9418;</span>
          <span className="icon">f</span>
        </div>
      </div>
      <div className="right-panel">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" required onChange={(e) => setUsername(e.target.value)}/>
          <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit">Login</button>
        </form>
        <p className="signup-link">
          Belum punya akun? <Link to="/register">Sign up!</Link>
        </p>
      </div>
    </div>
  );
}