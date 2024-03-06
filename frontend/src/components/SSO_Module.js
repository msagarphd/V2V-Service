import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const SSO_Module = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      // Make API call to authenticate user
      const response = await axios.post('http://localhost:3001/api/login', { username, password });
      // If login successful, set isLoggedIn to true
      setIsLoggedIn(true);
      // Clear username and password fields
      setUsername('');
      setPassword('');
    } catch (error) {
      // If login fails, display error message
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    // Set isLoggedIn to false
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h2>Single Sign-On (SSO) Module</h2>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please login to continue</p>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
          {error && <p>{error}</p>}
        </div>
      )}
    </div>
  );
};

export default SSO_Module;
