import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {
  if (!product) return null;
  
  const { _id, name, price, imageUrl, colors } = product;
  
  return (
    <div className="product-card">
      <Link to={`/product/${_id}`}>
        <div className="product-image">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="product-info">
          <h3>{name}</h3>
          <p className="price">${price.toFixed(2)}</p>
          <div className="colors">
            {colors && colors.map((color, index) => (
              <span 
                key={index} 
                className="color-dot" 
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
