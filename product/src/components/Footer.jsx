import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li>
              <Link to="/customer-service">Customer Service</Link>
            </li>
            <li>
              <Link to="/shipping">Shipping Information</Link>
            </li>
            <li>
              <Link to="/returns">Returns & Exchanges</Link>
            </li>
            <li>
              <Link to="/size-guide">Size Guide</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/our-story">Our Story</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/stores">Store Locator</Link>
            </li>
            <li>
              <Link to="/sustainability">Sustainability</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              Twitter
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="social-link">
              Pinterest
            </a>
          </div>
        </div>

        <div className="footer-section newsletter">
          <h4>Newsletter</h4>
          <p>
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Fashion Store. All rights reserved.</p>
        <div className="payment-methods">
          <span>Visa</span>
          <span>Mastercard</span>
          <span>PayPal</span>
          <span>Amex</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
