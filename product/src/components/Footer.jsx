import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/shipping">Shipping Information</a>
            </li>
            <li>
              <a href="/returns">Returns & Exchanges</a>
            </li>
            <li>
              <a href="/size-guide">Size Guide</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li>
              <a href="/story">Our Story</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/locations">Store Locator</a>
            </li>
            <li>
              <a href="/sustainability">Sustainability</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" className="social-link">
              Instagram
            </a>
            <a href="#" className="social-link">
              Facebook
            </a>
            <a href="#" className="social-link">
              Twitter
            </a>
            <a href="#" className="social-link">
              Pinterest
            </a>
          </div>
        </div>

        <div className="footer-section newsletter">
          <h4>Newsletter</h4>
          <p>
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">→</button>
          </div>
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
