import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import './Dashboard.css';

function Dashboard() {
  const { user, logout } = useAuth();
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome, {user.name}</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>

      <div className="dashboard-content">
        <div className="cart-section">
          <h2>Your Cart</h2>
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={`${item.product._id}-${item.product.selectedSize}-${item.product.selectedColor}`} className="cart-item">
                    <div className="item-image">
                      <img src={item.product.imageUrl} alt={item.product.name} />
                    </div>
                    <div className="item-details">
                      <h3>{item.product.name}</h3>
                      <p className="item-price">₹{item.product.price.toFixed(2)}</p>
                      {item.product.selectedSize && <p>Size: {item.product.selectedSize}</p>}
                      {item.product.selectedColor && (
                        <div className="color-info">
                          <span>Color:</span>
                          <span
                            className="color-dot"
                            style={{ backgroundColor: item.product.selectedColor }}
                          />
                        </div>
                      )}
                      <div className="quantity-controls">
                        <button
                          onClick={() => updateQuantity(item.product._id, Math.max(1, item.quantity - 1))}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product._id, Math.min(10, item.quantity + 1))}
                          disabled={item.quantity >= 10}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product._id)}
                      className="remove-button"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <div className="cart-summary">
                <div className="total">
                  <span>Total:</span>
                  <span>₹{getCartTotal().toFixed(2)}</span>
                </div>
                <button className="checkout-button">Proceed to Checkout</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 