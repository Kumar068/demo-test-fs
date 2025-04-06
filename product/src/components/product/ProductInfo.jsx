import "./ProductInfo.css";
import StarRating from "./StarRating";
import React from 'react';

function ProductInfo({
  product,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  quantity,
  setQuantity,
}) {
  if (!product) return null;

  const { 
    name, 
    price, 
    description, 
    colors = [], 
    sizes = [], 
    details = {},
    rating = 0 
  } = product;

  return (
    <div className="product-info">
      <h1>{name}</h1>
      <div className="price-rating">
        <p className="price">${price?.toFixed(2)}</p>
        <StarRating rating={rating || 0} />
      </div>
      <p className="description">{description}</p>
      
      {colors.length > 0 && (
        <div className="colors-section">
          <h3>Available Colors</h3>
          <div className="colors">
            {colors.map((color, index) => (
              <span
                key={`color-${color}-${index}`}
                className={`color-dot ${color === selectedColor ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                title={color}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>
      )}

      {sizes.length > 0 && (
        <div className="sizes-section">
          <h3>Available Sizes</h3>
          <div className="sizes">
            {sizes.map((size) => (
              <button
                key={`size-${size}`}
                className={`size-option ${size === selectedSize ? 'selected' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="quantity-section">
        <h3>Quantity</h3>
        <div className="quantity-controls">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            disabled={quantity <= 1}
          >
            -
          </button>
          <span>{quantity}</span>
          <button 
            onClick={() => setQuantity(Math.min(2, quantity + 1))}
            disabled={quantity >= 2}
          >
            +
          </button>
        </div>
      </div>

      <div className="action-buttons">
        <button className="add-to-cart">Add to Cart</button>
        <button className="buy-now">Buy Now</button>
      </div>

      

      <div className="shipping-info">
        <div className="info-item">
          <span className="icon">🚚</span>
          <span>Free shipping worldwide</span>
        </div>
        <div className="info-item">
          <span className="icon">↩️</span>
          <span>30 days return policy</span>
        </div>
        <div className="info-item">
          <span className="icon">💳</span>
          <span>Secure payment</span>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
