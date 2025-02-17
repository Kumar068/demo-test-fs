import { useState } from "react";
import "./ProductPage.css";
import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductDetails from "../components/product/ProductDetails";
import RelatedProducts from "../components/product/RelatedProducts";

function ProductPage() {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("cream");
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "Cashmere Blend Sweater",
    price: 295.0,
    rating: 4.5,
    reviewCount: 128,
    colors: [
      { name: "cream", code: "#F5F5DC" },
      { name: "grey", code: "#808080" },
      { name: "navy", code: "#000080" },
    ],
    sizes: ["XS", "S", "M", "L"],
    images: [
      "/products/sweater-1.jpg",
      "/products/sweater-2.jpg",
      "/products/sweater-3.jpg",
    ],
    details: {
      description:
        "This luxurious cashmere blend sweater combines timeless design with exceptional comfort. Crafted from a premium blend of cashmere and fine wool, it offers warmth without bulk and a softness that improves with wear.",
      materials: [
        "75% Cashmere",
        "25% Fine wool",
        "Sustainably sourced materials",
      ],
      care: [
        "Hand wash cold",
        "Do not tumble dry",
        "Dry flat",
        "Iron on low heat if needed",
      ],
    },
  };

  return (
    <div className="product-page">
      <div className="product-main">
        <ProductGallery images={product.images} />
        <ProductInfo
          product={product}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </div>
      <ProductDetails details={product.details} />
      <RelatedProducts />
    </div>
  );
}

export default ProductPage;
