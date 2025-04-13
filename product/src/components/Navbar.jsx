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
  const [showDropdown, setShowDropdown] = useState(false);
  const { getCartCount } = useCart();
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
  };

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
          <div className="profile-dropdown">
            <button 
              className="icon-button"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <FontAwesomeIcon icon={faUser} />
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                {isAuthenticated() ? (
                  <>
                    <span className="user-info">{user.username}</span>
                    <Link to="/dashboard" onClick={() => setShowDropdown(false)}>Dashboard</Link>
                    {user.role === 'admin' ? (
                      <>
                        <Link to="/admin" onClick={() => setShowDropdown(false)}>Admin Panel</Link>
                        <Link to="/user-management" onClick={() => setShowDropdown(false)}>User Management</Link>
                      </>
                    ) : (
                      <Link to="/user-details" onClick={() => setShowDropdown(false)}>My Details</Link>
                    )}
                    <button onClick={handleLogout}>Logout</button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setShowDropdown(false)}>User Login</Link>
                    <Link to="/admin/login" onClick={() => setShowDropdown(false)}>Admin Login</Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
