import "./NewArrivals.css";

function NewArrivals() {
  const products = [
    {
      id: 1,
      name: "Designer Summer Dress",
      price: 299.0,
      image: "/products/dress.jpg",
    },
    {
      id: 2,
      name: "Premium Leather Bag",
      price: 459.0,
      image: "/products/bag.jpg",
    },
    {
      id: 3,
      name: "Designer Sunglasses",
      price: 199.0,
      image: "/products/sunglasses.jpg",
    },
    {
      id: 4,
      name: "Premium Sneakers",
      price: 259.0,
      image: "/products/sneakers.jpg",
    },
  ];

  return (
    <section className="new-arrivals">
      <div className="section-header">
        <h2 className="section-title">New Arrivals</h2>
        <a href="/all" className="view-all">
          View All →
        </a>
      </div>
      <div className="grid-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewArrivals;
