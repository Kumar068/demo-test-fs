import "./NewArrivals.css";
import { Link } from "react-router-dom";

function NewArrivals() {
  const products = [
    {
      id: "67f2631f10cf123eadc67cf0",
      name: "Silk Wrap Dress",
      price: 385.0,
      imageUrl: "https://www.mytheresa.com/media/1094/1238/100/11/P00974484.jpg",
      category: "women"
    },
    {
      id: "67f2631f10cf123eadc67cee",
      name: "Premium Leather Bag",
      price: 459.0,
      imageUrl: "https://www.mytheresa.com/media/1094/1238/100/55/P00884151.jpg",
      category: "accessories"
    },
    {
      id: "67f2631f10cf123eadc67ceb",
      name: "Cashmere Blend Sweater",
      price: 295.0,
      imageUrl: "https://www.mytheresa.com/media/1094/1238/100/2c/P00979135.jpg",
      category: "women"
    },
    {
      id: "67f2631f10cf123eadc67cec",
      name: "Classic Oxford Shirt",
      price: 129.0,
      imageUrl: "https://www.mytheresa.com/media/1094/1238/100/31/P00996345.jpg",
      category: "men"
    }
  ];

  return (
    <section className="new-arrivals">
      <div className="section-header">
        <h2 className="section-title">New Arrivals</h2>
        <Link to="/category/all" className="view-all">
          View All →
        </Link>
      </div>
      <div className="grid-container">
        {products.map((product) => (
          <Link 
            key={product.id} 
            to={`/product/${product.id}`} 
            className="product-card"
          >
            <div className="product-image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">₹{product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default NewArrivals;
