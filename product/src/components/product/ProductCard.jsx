import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">${product.price}</p>
        <div className="color-options">
          {product.colors.map((color) => (
            <span
              key={color}
              className="color-dot"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
