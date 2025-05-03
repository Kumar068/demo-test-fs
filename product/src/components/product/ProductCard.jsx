import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  
  return (
    <Link to={`/product/${product._id}`} className="product-card">
      <div className="product-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p className="price">₹{price?.toFixed(2)}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
