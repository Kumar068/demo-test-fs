import "./RelatedProducts.css";
import ProductCard from "./ProductCard";

function RelatedProducts() {
  // This would typically come from an API based on the current product
  const relatedProducts = [
    {
      id: "w2",
      name: "Cable Knit Cardigan",
      price: 275.0,
      image: "/products/cardigan-1.jpg",
      colors: ["cream", "black", "grey"],
    },
    {
      id: "w3",
      name: "V-Neck Classic Sweater",
      price: 195.0,
      image: "/products/sweater-2.jpg",
      colors: ["navy", "grey", "black"],
    },
    {
      id: "w4",
      name: "Cashmere Hoodie",
      price: 325.0,
      image: "/products/hoodie-1.jpg",
      colors: ["grey", "black", "cream"],
    },
  ];

  return (
    <section className="related-products">
      <h2>You May Also Like</h2>
      <div className="related-grid">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;
