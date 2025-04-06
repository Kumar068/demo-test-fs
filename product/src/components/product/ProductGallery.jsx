import { useState } from "react";
import "./ProductGallery.css";

function ProductGallery({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(0);
  
  // If no images provided, use an empty array
  const productImages = images.length > 0 ? images : [];

  return (
    <div className="product-gallery">
      <div className="main-image">
        {productImages.length > 0 ? (
          <img src={productImages[selectedImage]} alt="Product" />
        ) : (
          <div className="no-image">No image available</div>
        )}
      </div>
      {productImages.length > 1 && (
        <div className="thumbnail-list">
          {productImages.map((image, index) => (
            <button
              key={index}
              className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
              onClick={() => setSelectedImage(index)}
            >
              <img src={image} alt={`Product thumbnail ${index + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductGallery;
