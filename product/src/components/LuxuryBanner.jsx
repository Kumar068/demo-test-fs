import "./LuxuryBanner.css";
import { Link } from "react-router-dom";

function LuxuryBanner() {
  return (
    <section className="luxury-banner">
      <div className="banner-content">
        <h2>LUXURY FASHION</h2>
        <p>Up to 50% off on selected items</p>
        <Link to="/category/all" className="shop-now">Shop Now</Link>
      </div>
    </section>
  );
}

export default LuxuryBanner;
