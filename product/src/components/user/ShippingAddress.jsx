import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

function ShippingAddress() {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [address, setAddress] = useState(user?.address || {
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  });

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update user address in backend
      const response = await fetch(`http://localhost:5000/api/users/${user?._id}/address`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Add token if you're using JWT
        },
        body: JSON.stringify({ address }),
      });

      if (!response.ok) {
        throw new Error('Failed to update address');
      }

      // Update local user state with new address
      updateUser({ ...user, address });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating address:', error);
    }
  };

  return (
    <div className="shipping-address">
      <h2>Shipping Address</h2>
      {!isEditing ? (
        <div className="address-display">
          {address.street ? (
            <>
              <p>{address.street}</p>
              <p>{address.city}, {address.state} {address.zipCode}</p>
              <p>{address.country}</p>
              <button onClick={() => setIsEditing(true)}>Edit Address</button>
            </>
          ) : (
            <button onClick={() => setIsEditing(true)}>Add Shipping Address</button>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="street"
              value={address.street}
              onChange={handleChange}
              placeholder="Street Address"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleChange}
              placeholder="City"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="state"
              value={address.state}
              onChange={handleChange}
              placeholder="State"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="zipCode"
              value={address.zipCode}
              onChange={handleChange}
              placeholder="ZIP Code"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="country"
              value={address.country}
              onChange={handleChange}
              placeholder="Country"
              required
            />
          </div>
          <div className="button-group">
            <button type="submit">Save Address</button>
            <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ShippingAddress;