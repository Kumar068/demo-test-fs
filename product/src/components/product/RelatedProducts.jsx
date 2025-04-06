import "./RelatedProducts.css";
import ProductCard from "./ProductCard";

function RelatedProducts() {
  const relatedProducts = [
    {
      _id: "67f2631f10cf123eadc67ceb",
      name: "Cashmere Blend Sweater",
      price: 295.0,
      imageUrl: "https://www.mytheresa.com/media/1094/1238/100/2c/P00979135.jpg",
      colors: ["cream", "black", "grey"],
    },
    {
      _id: "67f2631f10cf123eadc67cec",
      name: "Classic Oxford Shirt",
      price: 129.0,
      imageUrl: "https://www.mytheresa.com/media/1094/1238/100/31/P00996345.jpg",
      colors: ["white", "blue", "pink"],
    },
    {
      _id: "67f2631f10cf123eadc67cf0",
      name: "Silk Wrap Dress",
      price: 385.0,
      imageUrl: "https://www.mytheresa.com/media/1094/1238/100/11/P00974484.jpg",
      colors: ["black", "navy", "red"],
    }
  ];

  return (
    <section className="related-products">
      <h2>You May Also Like</h2>
      <div className="related-grid">
        {relatedProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;
