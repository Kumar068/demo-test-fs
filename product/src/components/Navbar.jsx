import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo">
          <img src={logo} alt="Company Logo" />
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
          <button className="icon-button">♡</button>
          <button className="icon-button">☐</button>
          <button className="icon-button">○</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
