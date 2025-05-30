import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../services/api';
import "./ProductPage.css";
import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductDetails from "../components/product/ProductDetails";
import RelatedProducts from "../components/product/RelatedProducts";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getProduct(id);
      setProduct(data);
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to load product. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error || !product) {
    return <div className="error">{error || 'Product not found'}</div>;
  }

  return (
    <div className="product-page">
      <div className="product-main" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
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
