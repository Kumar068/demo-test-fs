import React from 'react';
import './ProductDetails.css';

function ProductDetails({ details }) {
  // Add a check to handle undefined details
  if (!details) {
    return (
      <div className="product-details">
        <h2>Product Details</h2>
        <p>No additional details available for this product.</p>
      </div>
    );
  }

  return (
    <div className="product-details">
      <h2>Product Details</h2>
      <div className="details-content">
        {details.description && (
          <div className="detail-section">
            <h3>Description</h3>
            <p>{details.description}</p>
          </div>
        )}
        
        {details.material && (
          <div className="detail-section">
            <h3>Material</h3>
            <p>{details.material}</p>
          </div>
        )}
        
        {details.care && (
          <div className="detail-section">
            <h3>Care Instructions</h3>
            <p>{details.care}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
