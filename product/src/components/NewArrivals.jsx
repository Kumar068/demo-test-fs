import "./NewArrivals.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function NewArrivals() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/api/products?limit=5")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
        setError(null);
      })
      .catch((err) => {
        setError("Failed to fetch products");
        setProducts([]);
        console.error("Failed to fetch products", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="new-arrivals">
      <div className="section-header">
        <h2 className="section-title">New Arrivals</h2>
        <Link to="/category/all" className="view-all">
          View All →
        </Link>
      </div>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : products.length === 0 ? (
        <div className="empty">No new arrivals found.</div>
      ) : (
        <div className="grid-container">
          {products.map((product) => (
            <Link
              key={product._id || product.id}
              to={`/product/${product._id || product.id}`}
              className="product-card"
            >
              <div className="product-image">
                <img
                  src={product.imageUrl || (product.images && product.images[0]) || "/placeholder.png"}
                  alt={product.name}
                />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">₹{product.price?.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

export default NewArrivals;
