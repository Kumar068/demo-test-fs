import React, { useEffect, useState } from "react";
import "./RelatedProducts.css";
import ProductCard from "./ProductCard";

function RelatedProducts() {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        // Adjust the endpoint as needed for your backend
        const response = await fetch("http://localhost:5000/api/products?limit=5");
        if (!response.ok) throw new Error("Failed to fetch related products");
        const data = await response.json();
        setRelatedProducts(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchRelatedProducts();
  }, []);

  return (
    <section className="related-products">
      <h2>You May Also Like</h2>
      {loading ? (
        <div className="related-grid">Loading...</div>
      ) : error ? (
        <div className="related-grid" style={{color: 'red'}}>{error}</div>
      ) : (
        <div className="related-grid">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <div>No related products found.</div>
          )}
        </div>
      )}
    </section>
  );
}

export default RelatedProducts;
