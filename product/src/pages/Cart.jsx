import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

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
                <p className="item-price">${product.price.toFixed(2)}</p>
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
                ${(product.price * quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
          <button className="checkout-button">
            Proceed to Checkout
          </button><br/><br/>
          <Link to="/" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart; 