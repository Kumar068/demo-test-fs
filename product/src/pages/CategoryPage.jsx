import { useParams } from "react-router-dom";
import "./CategoryPage.css";
import ProductCard from "../components/product/ProductCard";

function CategoryPage() {
  const { category } = useParams();

  // Product database organized by category
  const products = {
    women: [
      {
        id: "w1",
        name: "Cashmere Blend Sweater",
        price: 295.0,
        image: "/products/women/sweater-1.jpg",
        colors: ["cream", "grey", "navy"],
      },
      {
        id: "w2",
        name: "Silk Wrap Dress",
        price: 385.0,
        image: "/products/women/dress-1.jpg",
        colors: ["black", "red", "navy"],
      },
      {
        id: "w3",
        name: "Wool Blend Coat",
        price: 495.0,
        image: "/products/women/coat-1.jpg",
        colors: ["camel", "black", "grey"],
      },
      {
        id: "w4",
        name: "High-Rise Tailored Pants",
        price: 225.0,
        image: "/products/women/pants-1.jpg",
        colors: ["black", "navy", "grey"],
      },
      {
        id: "w5",
        name: "Merino Wool Cardigan",
        price: 265.0,
        image: "/products/women/cardigan-1.jpg",
        colors: ["cream", "black", "burgundy"],
      },
      {
        id: "w6",
        name: "Pleated Midi Skirt",
        price: 195.0,
        image: "/products/women/skirt-1.jpg",
        colors: ["black", "navy", "beige"],
      },
      {
        id: "w7",
        name: "Silk Blouse",
        price: 245.0,
        image: "/products/women/blouse-1.jpg",
        colors: ["white", "black", "powder blue"],
      },
      {
        id: "w8",
        name: "Tailored Blazer",
        price: 375.0,
        image: "/products/women/blazer-1.jpg",
        colors: ["black", "navy", "grey"],
      },
      {
        id: "w9",
        name: "Knit Turtleneck",
        price: 185.0,
        image: "/products/women/turtleneck-1.jpg",
        colors: ["cream", "black", "grey"],
      },
      {
        id: "w10",
        name: "Cashmere Scarf",
        price: 145.0,
        image: "/products/women/scarf-1.jpg",
        colors: ["camel", "grey", "black"],
      },
    ],
    men: [
      {
        id: "m1",
        name: "Merino Wool Sweater",
        price: 245.0,
        image: "/products/men/sweater-1.jpg",
        colors: ["navy", "grey", "black"],
      },
      {
        id: "m2",
        name: "Tailored Suit Jacket",
        price: 495.0,
        image: "/products/men/jacket-1.jpg",
        colors: ["black", "navy", "charcoal"],
      },
      {
        id: "m3",
        name: "Oxford Dress Shirt",
        price: 125.0,
        image: "/products/men/shirt-1.jpg",
        colors: ["white", "light blue", "pink"],
      },
      {
        id: "m4",
        name: "Wool Blend Coat",
        price: 445.0,
        image: "/products/men/coat-1.jpg",
        colors: ["camel", "black", "grey"],
      },
      {
        id: "m5",
        name: "Slim Fit Chinos",
        price: 165.0,
        image: "/products/men/chinos-1.jpg",
        colors: ["khaki", "navy", "olive"],
      },
      {
        id: "m6",
        name: "Cashmere Scarf",
        price: 135.0,
        image: "/products/men/scarf-1.jpg",
        colors: ["grey", "navy", "black"],
      },
      {
        id: "m7",
        name: "Leather Derby Shoes",
        price: 325.0,
        image: "/products/men/shoes-1.jpg",
        colors: ["black", "brown", "tan"],
      },
      {
        id: "m8",
        name: "Merino Polo Shirt",
        price: 145.0,
        image: "/products/men/polo-1.jpg",
        colors: ["navy", "white", "grey"],
      },
      {
        id: "m9",
        name: "Wool Dress Pants",
        price: 195.0,
        image: "/products/men/pants-1.jpg",
        colors: ["black", "grey", "navy"],
      },
      {
        id: "m10",
        name: "Cashmere Beanie",
        price: 85.0,
        image: "/products/men/beanie-1.jpg",
        colors: ["black", "grey", "navy"],
      },
    ],
    kids: [
      {
        id: "k1",
        name: "Cotton Sweater",
        price: 65.0,
        image: "/products/kids/sweater-1.jpg",
        colors: ["navy", "red", "grey"],
      },
      {
        id: "k2",
        name: "Denim Overalls",
        price: 75.0,
        image: "/products/kids/overalls-1.jpg",
        colors: ["blue", "light blue"],
      },
      {
        id: "k3",
        name: "Puffer Jacket",
        price: 95.0,
        image: "/products/kids/jacket-1.jpg",
        colors: ["red", "navy", "green"],
      },
      {
        id: "k4",
        name: "Cotton Dress",
        price: 55.0,
        image: "/products/kids/dress-1.jpg",
        colors: ["pink", "blue", "yellow"],
      },
      {
        id: "k5",
        name: "Cargo Pants",
        price: 45.0,
        image: "/products/kids/pants-1.jpg",
        colors: ["khaki", "navy", "olive"],
      },
      {
        id: "k6",
        name: "Graphic T-Shirt",
        price: 25.0,
        image: "/products/kids/tshirt-1.jpg",
        colors: ["white", "grey", "navy"],
      },
      {
        id: "k7",
        name: "Knit Beanie",
        price: 28.0,
        image: "/products/kids/beanie-1.jpg",
        colors: ["red", "navy", "grey"],
      },
      {
        id: "k8",
        name: "Canvas Sneakers",
        price: 45.0,
        image: "/products/kids/sneakers-1.jpg",
        colors: ["white", "navy", "red"],
      },
      {
        id: "k9",
        name: "Hooded Sweatshirt",
        price: 48.0,
        image: "/products/kids/hoodie-1.jpg",
        colors: ["grey", "navy", "pink"],
      },
      {
        id: "k10",
        name: "School Backpack",
        price: 38.0,
        image: "/products/kids/backpack-1.jpg",
        colors: ["blue", "black", "red"],
      },
    ],
    accessories: [
      {
        id: "a1",
        name: "Leather Tote Bag",
        price: 295.0,
        image: "/products/accessories/tote-1.jpg",
        colors: ["black", "brown", "tan"],
      },
      {
        id: "a2",
        name: "Designer Sunglasses",
        price: 185.0,
        image: "/products/accessories/sunglasses-1.jpg",
        colors: ["black", "tortoise", "gold"],
      },
      {
        id: "a3",
        name: "Leather Belt",
        price: 85.0,
        image: "/products/accessories/belt-1.jpg",
        colors: ["black", "brown", "tan"],
      },
      {
        id: "a4",
        name: "Silk Scarf",
        price: 125.0,
        image: "/products/accessories/scarf-1.jpg",
        colors: ["multicolor", "blue", "red"],
      },
      {
        id: "a5",
        name: "Leather Wallet",
        price: 145.0,
        image: "/products/accessories/wallet-1.jpg",
        colors: ["black", "brown", "navy"],
      },
      {
        id: "a6",
        name: "Watch",
        price: 450.0,
        image: "/products/accessories/watch-1.jpg",
        colors: ["silver", "gold", "rose gold"],
      },
      {
        id: "a7",
        name: "Leather Gloves",
        price: 95.0,
        image: "/products/accessories/gloves-1.jpg",
        colors: ["black", "brown", "tan"],
      },
      {
        id: "a8",
        name: "Crossbody Bag",
        price: 225.0,
        image: "/products/accessories/crossbody-1.jpg",
        colors: ["black", "brown", "navy"],
      },
      {
        id: "a9",
        name: "Hat",
        price: 75.0,
        image: "/products/accessories/hat-1.jpg",
        colors: ["black", "beige", "navy"],
      },
      {
        id: "a10",
        name: "Travel Weekender",
        price: 345.0,
        image: "/products/accessories/weekender-1.jpg",
        colors: ["black", "brown", "navy"],
      },
    ],
  };

  const categoryProducts = products[category] || [];

  return (
    <div className="category-page">
      <header className="category-header">
        <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
        <p>{categoryProducts.length} Products</p>
      </header>
      <div className="product-grid">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
