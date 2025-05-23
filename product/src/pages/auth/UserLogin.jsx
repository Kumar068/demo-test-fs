import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { validatePassword } from '../../utils/validation';
import './Auth.css';

function UserLogin() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    }
  });
  const [error, setError] = useState('');
  const [passwordErrors, setPasswordErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Handle nested address fields
    if (name.startsWith('address.')) {
      const addressField = name.split('.')[1];
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [addressField]: value
        }
      });
    } else {
      // Handle regular fields
      setFormData({
        ...formData,
        [name]: value
      });
    }

    if (name === 'password') {
      const { errors } = validatePassword(value);
      setPasswordErrors(errors);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (isSignup) {
      const { isValid, errors } = validatePassword(formData.password);
      if (!isValid) {
        setPasswordErrors(errors);
        return;
      }
    }

    try {
      const endpoint = isSignup ? 'register' : 'login';
      const response = await fetch(`http://localhost:5000/api/auth/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          role: 'user'
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Authentication failed');
      }

      // Pass both user and token to the login function
      login(data.user, data.token);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const resetForm = () => {
    setIsSignup(!isSignup);
    setError('');
    setPasswordErrors([]);
    setFormData({
      username: '',
      password: '',
      name: '',
      address: {
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: ''
      }
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-toggle">
          <Link to="/login" className="toggle-button active">User Login</Link>
          <Link to="/admin/login" className="toggle-button">Admin Login</Link>
        </div>
        <h1>{isSignup ? 'Sign Up' : 'Login'}</h1>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit} className="auth-form">
          {isSignup && (
            <>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required={isSignup}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="address.street"
                  value={formData.address?.street || ''}
                  onChange={handleChange}
                  placeholder="Street Address"
                  required={isSignup}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="address.city"
                  value={formData.address?.city || ''}
                  onChange={handleChange}
                  placeholder="City"
                  required={isSignup}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="address.state"
                  value={formData.address?.state || ''}
                  onChange={handleChange}
                  placeholder="State"
                  required={isSignup}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="address.zipCode"
                  value={formData.address?.zipCode || ''}
                  onChange={handleChange}
                  placeholder="ZIP Code"
                  required={isSignup}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="address.country"
                  value={formData.address?.country || ''}
                  onChange={handleChange}
                  placeholder="Country"
                  required={isSignup}
                />
              </div>
            </>
          )}
          <div className="form-group">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            {isSignup && passwordErrors.length > 0 && (
              <div className="password-requirements">
                {passwordErrors.map((error, index) => (
                  <p key={index} className="requirement-error">{error}</p>
                ))}
              </div>
            )}
          </div>
          <button type="submit" className="auth-button">
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <div className="auth-switch">
          <button
            className="switch-button"
            onClick={resetForm}
          >
            {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;