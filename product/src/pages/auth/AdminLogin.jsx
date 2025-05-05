import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { validatePassword } from '../../utils/validation';
import './Auth.css';

function AdminLogin() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [passwordErrors, setPasswordErrors] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    if (e.target.name === 'password') {
      const { errors } = validatePassword(e.target.value);
      setPasswordErrors(errors);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const { isValid, errors } = validatePassword(formData.password);
    if (!isValid) {
      setPasswordErrors(errors);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          role: 'admin'
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Authentication failed');
      }

      if (data.user.role !== 'admin') {
        throw new Error('Unauthorized access. Admin privileges required.');
      }

      // Pass both user and token to the login function
      login(data.user, data.token);
      navigate('/admin');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-toggle">
          <Link to="/login" className="toggle-button">User Login</Link>
          <Link to="/admin/login" className="toggle-button active">Admin Login</Link>
        </div>
        <h1>Admin Login</h1>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Admin Username"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Admin Password"
              required
            />
            {passwordErrors.length > 0 && (
              <div className="password-requirements">
                {passwordErrors.map((error, index) => (
                  <p key={index} className="requirement-error">{error}</p>
                ))}
              </div>
            )}
          </div>
          <button type="submit" className="auth-button">Login as Admin</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;