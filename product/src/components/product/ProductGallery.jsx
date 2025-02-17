import { useState } from "react";
import "./ProductGallery.css";

function ProductGallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="product-gallery">
      <div className="main-image">
        <img src={mainImage} alt="Product" />
      </div>
      <div className="thumbnail-list">
        {images.map((image, index) => (
          <button
            key={index}
            className={`thumbnail ${image === mainImage ? "active" : ""}`}
            onClick={() => setMainImage(image)}
          >
            <img src={image} alt={`Product view ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
