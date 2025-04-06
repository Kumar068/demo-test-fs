import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

function Login() {
  const [loginType, setLoginType] = useState('user'); // 'user' or 'admin'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (loginType === 'user') {
      if (username === '1234' && password === '1234') {
        if (login(username, password)) {
          navigate('/dashboard');
        }
      } else {
        setError('Invalid user credentials. Try username: 1234, password: 1234');
      }
    } else {
      // Admin login
      if (username === '123' && password === '123') {
        navigate('/admin');
      } else {
        setError('Invalid admin credentials. Try username: 123, password: 123');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-type-selector">
          <button
            className={`selector-button ${loginType === 'user' ? 'active' : ''}`}
            onClick={() => setLoginType('user')}
          >
            User Login
          </button>
          <button
            className={`selector-button ${loginType === 'admin' ? 'active' : ''}`}
            onClick={() => setLoginType('admin')}
          >
            Admin Login
          </button>
        </div>

        <h1>{loginType === 'user' ? 'User Login' : 'Admin Login'}</h1>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <div className="demo-credentials">
          <p>Demo Credentials:</p>
          {loginType === 'user' ? (
            <>
              <p>User Login:</p>
              <p>Username: 1234</p>
              <p>Password: 1234</p>
            </>
          ) : (
            <>
              <p>Admin Login:</p>
              <p>Username: 123</p>
              <p>Password: 123</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login; 