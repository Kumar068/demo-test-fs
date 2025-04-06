import React from 'react';
import "./StarRating.css";

function StarRating({ rating = 0, maxStars = 5 }) {
  // Ensure rating is a valid number between 0 and maxStars
  const normalizedRating = Math.min(Math.max(Number(rating) || 0, 0), maxStars);
  
  // Create an array of the specified length
  const stars = Array.from({ length: maxStars });

  return (
    <div className="star-rating">
      {stars.map((_, index) => (
        <span 
          key={index}
          className={`star ${index < normalizedRating ? 'filled' : 'empty'}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating;
