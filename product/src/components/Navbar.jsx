import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

// Add icons to the library
library.add(faHeart, faShoppingCart, faUser);

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const { getCartCount } = useCart();
  const { user, isAuthenticated } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Company Logo" />
          </Link>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="nav-actions">
          <button className="icon-button">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <Link to="/cart" className="icon-button cart-button">
            <FontAwesomeIcon icon={faShoppingCart} />
            {getCartCount() > 0 && <span className="cart-count">{getCartCount()}</span>}
          </Link>
          {isAuthenticated() ? (
            <Link to="/dashboard" className="user-profile">
              <span className="user-name">{user.name}</span>
              <FontAwesomeIcon icon={faUser} />
            </Link>
          ) : (
            <Link to="/login" className="icon-button">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
