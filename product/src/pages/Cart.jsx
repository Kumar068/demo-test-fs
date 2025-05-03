import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './Cart.css';

// Create an axios instance with the base URL
const api = axios.create({
  baseURL: 'http://localhost:5000'
});

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('UPI'); // Default payment method

  const handleCheckout = async () => {
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }

    try {
      setIsProcessing(true);
      setError(null);

      const storedUser = JSON.parse(localStorage.getItem('user'));
      
      if (!storedUser || !storedUser._id) {
        setError('Please log in again to complete your purchase.');
        navigate('/login');
        return;
      }

      const orderData = {
        items: cartItems.map(item => ({
          product: item.product._id,
          quantity: item.quantity,
          price: item.product.price,
          selectedSize: item.product.selectedSize,
          selectedColor: item.product.selectedColor
        })),
        totalAmount: getCartTotal(),
        paymentMethod: paymentMethod, // Add this line to include payment method
        shippingAddress: user.address || {
          street: "Default Street",
          city: "Default City",
          state: "Default State",
          zipCode: "12345",
          country: "Default Country"
        }
      };

      const response = await api.post('/api/orders', orderData, {
        headers: {
          'Content-Type': 'application/json',
          'X-User-Id': storedUser._id
        }
      });
      
      if (response.status === 201 || response.status === 200) {
        clearCart();
        navigate('/orders');
      }
    } catch (err) {
      if (err.response?.status === 401) {
        setError('Your session has expired. Please login again.');
        navigate('/login');
      } else {
        setError('Failed to create order. Please try again.');
        console.error('Checkout error:', err);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added any items to your cart yet.</p>
        <Link to="/" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map(({ product, quantity }) => (
            <div key={product._id} className="cart-item">
              <div className="item-image">
                <img src={product.imageUrl} alt={product.name} />
              </div>
              <div className="item-details">
                <Link to={`/product/${product._id}`} className="item-name">
                  {product.name}
                </Link>
                <p className="item-price">₹{product.price.toFixed(2)}</p>
                <div className="item-actions">
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(product._id, quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button 
                      onClick={() => updateQuantity(product._id, quantity + 1)}
                      disabled={quantity >= 10}
                    >
                      +
                    </button>
                  </div>
                  <button 
                    className="remove-button"
                    onClick={() => removeFromCart(product._id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
              <div className="item-total">
                ₹{(product.price * quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{getCartTotal().toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-row">
            <span>Payment Method</span>
            <select 
              value={paymentMethod} 
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="payment-select"
            >
              <option value="UPI">UPI Payment</option>
              <option value="COD">Cash on Delivery</option>
            </select>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>₹{getCartTotal().toFixed(2)}</span>
          </div>
          {error && <div className="error-message">{error}</div>}
          <button 
            className="checkout-button"
            onClick={handleCheckout}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : `Proceed to ${paymentMethod === 'UPI' ? 'UPI Payment' : 'Checkout (COD)'}`}
          </button>
          <br/><br/>
          <Link to="/" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;