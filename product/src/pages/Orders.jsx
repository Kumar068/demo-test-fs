import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import './Orders.css';

const api = axios.create({
  baseURL: 'http://localhost:5000'
});

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    fetchOrders();
  }, [user, navigate]);

  const fetchOrders = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      
      if (!storedUser || !storedUser._id) {
        setError('User session not found');
        navigate('/login');
        return;
      }

      const response = await api.get('/api/orders/user', {
        headers: {
          'Content-Type': 'application/json',
          'X-User-Id': storedUser._id
        }
      });
      
      setOrders(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching orders:', error);
      setError('Failed to fetch orders');
      setLoading(false);
    }
  };

  if (loading) return <div className="orders-loading">Loading orders...</div>;
  if (error) return <div className="orders-error">{error}</div>;

  return (
    <div className="orders-page">
      <h1>My Orders</h1>
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders yet.</p>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order._id} className="order-card">
              <div className="order-header">
                <div className="order-info">
                  <span className="order-date">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </span>
                  <span className="order-status">{order.status}</span>
                </div>
                <span className="order-total">₹{order.totalAmount.toFixed(2)}</span>
              </div>
              <div className="order-items">
                {order.items.map((item, index) => (
                  <div key={index} className="order-item">
                    <div className="item-info">
                      <span className="item-name">{item.product.name}</span>
                      <span className="item-details">
                        Qty: {item.quantity} | ₹{item.price.toFixed(2)} each
                      </span>
                      {item.selectedSize && (
                        <span className="item-size">Size: {item.selectedSize}</span>
                      )}
                      {item.selectedColor && (
                        <span className="item-color">Color: {item.selectedColor}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="order-footer">
                <div className="shipping-address">
                  <h4>Shipping Address:</h4>
                  <p>{order.shippingAddress.street}</p>
                  <p>{order.shippingAddress.city}, {order.shippingAddress.state}</p>
                  <p>{order.shippingAddress.zipCode}, {order.shippingAddress.country}</p>
                </div>
                <div className="payment-info">
                  <p>Payment Method: {order.paymentMethod}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;