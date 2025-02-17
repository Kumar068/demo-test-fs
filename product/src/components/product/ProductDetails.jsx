import "./ProductDetails.css";

function ProductDetails({ details }) {
  return (
    <section className="product-details">
      <div className="details-section">
        <h2>Product Details</h2>
        <p>{details.description}</p>
      </div>

      <div className="details-section">
        <h3>Materials</h3>
        <ul>
          {details.materials.map((material, index) => (
            <li key={index}>{material}</li>
          ))}
        </ul>
      </div>

      <div className="details-section">
        <h3>Care Instructions</h3>
        <ul>
          {details.care.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProductDetails;
