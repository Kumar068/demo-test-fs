import "./StarRating.css";

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="star-rating">
      {[...Array(fullStars)].map((_, index) => (
        <span key={`full-${index}`} className="star full">
          ★
        </span>
      ))}
      {hasHalfStar && <span className="star half">★</span>}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`} className="star empty">
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating;
