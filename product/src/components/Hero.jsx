import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Summer Collection 2024</h1>
        <p>
          Discover the latest trends and elevate your style with our exclusive
          summer pieces.
        </p>
        <Link to="/category/all" className="shop-now">Shop Now</Link>
      </div>
    </section>
  );
}

export default Hero;
