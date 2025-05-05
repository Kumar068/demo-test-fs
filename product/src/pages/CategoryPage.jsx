import { useParams, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./CategoryPage.css";
import ProductCard from "../components/product/ProductCard";
import { getProducts } from "../services/api";

function CategoryPage() {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const style = searchParams.get('style');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const filterProductsByStyle = (products, style) => {
    if (!style) return products;

    const styleKeywords = {
      casual: ['casual', 'everyday', 'comfortable', 'relaxed', 'basic', 'simple', 't-shirt', 'jeans', 'cotton'],
      formal: ['formal', 'elegant', 'business', 'suit', 'professional', 'dress', 'oxford', 'blazer'],
      athletic: ['athletic', 'sport', 'active', 'workout', 'running', 'gym', 'training', 'performance', 'yoga', 'compression']
    };

    const keywords = styleKeywords[style.toLowerCase()] || [];
    console.log('Filtering by style:', style);
    console.log('Using keywords:', keywords);
    console.log('Total products before filtering:', products.length);
    
    const filteredProducts = products.filter(product => {
      const searchText = `${product.name} ${product.description} ${product.details?.description || ''}`.toLowerCase();
      const matches = keywords.some(keyword => searchText.includes(keyword));
      if (matches) {
        console.log('Matched product:', product.name);
      }
      return matches;
    });

    console.log('Filtered products count:', filteredProducts.length);
    return filteredProducts;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        console.log('Fetching products for category:', category);
        // Pass the category to the API service which will use the updated backend endpoint
        const data = await getProducts(category === 'all' ? null : category);
        console.log('Received products from API:', data);
        // Filter by style on the frontend
        const filteredData = filterProductsByStyle(data, style);
        console.log('Final filtered products:', filteredData);
        setProducts(filteredData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch products');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, style]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  const pageTitle = () => {
    let title = category === 'all' ? 'All Products' : category.charAt(0).toUpperCase() + category.slice(1);
    if (style) {
      title = `${style.charAt(0).toUpperCase() + style.slice(1)} ${title}`;
    }
    return title;
  };

  return (
    <div className="category-page">
      <header className="category-header">
        <h1>{pageTitle()}</h1>
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
