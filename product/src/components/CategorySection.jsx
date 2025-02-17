import { Link } from "react-router-dom";
import "./CategorySection.css";

function CategorySection() {
  const categories = [
    { title: "Women", image: "/category/women.jpg", path: "women" },
    { title: "Men", image: "/category/men.jpg", path: "men" },
    { title: "Kids", image: "/category/kids.jpg", path: "kids" },
    {
      title: "Accessories",
      image: "/category/accessories.jpg",
      path: "accessories",
    },
  ];

  return (
    <section className="category-section">
      <h2 className="section-title">Shop by Category</h2>
      <div className="grid-container">
        {categories.map((category) => (
          <Link
            key={category.title}
            to={`/category/${category.path}`}
            className="category-card"
          >
            <div
              className="category-image"
              style={{ backgroundImage: `url(${category.image})` }}
            >
              <h3>{category.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
