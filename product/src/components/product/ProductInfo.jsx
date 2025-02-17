import "./ProductInfo.css";
import StarRating from "./StarRating";

function ProductInfo({
  product,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  quantity,
  setQuantity,
}) {
  return (
    <div className="product-info">
      <h1>{product.name}</h1>
      <div className="price">${product.price}</div>

      <div className="rating-section">
        <StarRating rating={product.rating} />
        <span className="review-count">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      <div className="options-section">
        <div className="size-selector">
          <div className="option-label">
            <span>Size</span>
            <a href="#size-guide" className="size-guide">
              Size guide
            </a>
          </div>
          <div className="size-options">
            {product.sizes.map((size) => (
              <button
                key={size}
                className={`size-option ${
                  selectedSize === size ? "selected" : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="color-selector">
          <span className="option-label">Color</span>
          <div className="color-options">
            {product.colors.map((color) => (
              <button
                key={color.name}
                className={`color-option ${
                  selectedColor === color.name ? "selected" : ""
                }`}
                style={{ backgroundColor: color.code }}
                onClick={() => setSelectedColor(color.name)}
                title={color.name}
              />
            ))}
          </div>
        </div>

        <div className="quantity-selector">
          <span className="option-label">Quantity</span>
          <div className="quantity-controls">
            <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
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
