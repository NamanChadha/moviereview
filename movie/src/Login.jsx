import React, { useState } from 'react';
import './LoginPage.css'; // Import CSS file for styling

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Check if username and password match some dummy values
    const dummyUsername = 'username';
    const dummyPassword = 'password';
    if (username === dummyUsername && password === dummyPassword) {
      // Call the onLogin function passed from the parent component
      onLogin(true);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className='BABABUI'>
      <div className="login-container"> {/* Apply CSS class for styling */}
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className="login-button" onClick={handleLogin}>Login</button> {/* Apply CSS class for styling */}
      </div>
    </div>
  );
};

export default LoginPage;
