import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./CategoryPage.css";
import ProductCard from "../components/product/ProductCard";
import { getProducts } from "../services/api";

function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // If category is 'all', don't pass a category parameter to get all products
        const data = await getProducts(category === 'all' ? null : category);
        console.log('Fetched products:', data);
        setProducts(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch products');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="category-page">
      <header className="category-header">
        <h1>{category === 'all' ? 'All Products' : category.charAt(0).toUpperCase() + category.slice(1)}</h1>
        <p>{products.length} Products</p>
      </header>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
