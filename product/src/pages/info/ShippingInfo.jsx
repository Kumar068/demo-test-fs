import React from 'react';
import './InfoPages.css';

function ShippingInfo() {
  const shippingMethods = [
    {
      method: "Standard Shipping",
      time: "3-5 business days",
      cost: "Free on orders over $100",
      details: "Available for all domestic orders"
    },
    {
      method: "Express Shipping",
      time: "1-2 business days",
      cost: "$15.00",
      details: "Order by 2 PM EST for same-day processing"
    },
    {
      method: "International Shipping",
      time: "7-14 business days",
      cost: "Calculated at checkout",
      details: "Available to most countries"
    }
  ];

  return (
    <div className="info-page">
      <h1>Shipping Information</h1>

      <section className="shipping-methods">
        <h2>Delivery Options</h2>
        <div className="methods-grid">
          {shippingMethods.map((method, index) => (
            <div key={index} className="shipping-method">
              <h3>{method.method}</h3>
              <div className="method-details">
                <p><strong>Delivery Time:</strong> {method.time}</p>
                <p><strong>Cost:</strong> {method.cost}</p>
                <p><strong>Note:</strong> {method.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="shipping-policy">
        <h2>Shipping Policy</h2>
        <div className="policy-content">
          <h3>Order Processing</h3>
          <p>Orders are processed within 1-2 business days after payment confirmation. You'll receive a shipping confirmation email with tracking information once your order ships.</p>

          <h3>Free Shipping Qualification</h3>
          <p>Free standard shipping is available on all domestic orders over $100. This offer applies to standard shipping only and excludes express or international shipping options.</p>

          <h3>International Orders</h3>
          <p>We ship to most countries worldwide. International shipping costs are calculated based on destination, weight, and shipping method. Please note that import duties and taxes may apply and are the responsibility of the customer.</p>

          <h3>Tracking Your Order</h3>
          <p>Once your order ships, you'll receive a confirmation email with tracking information. You can also track your order by logging into your account or using the tracking number provided in your shipping confirmation email.</p>
        </div>
      </section>

      <section className="shipping-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h3>Can I change my shipping address after placing an order?</h3>
            <p>Please contact customer service immediately. We can only change the shipping address if the order hasn't been processed yet.</p>
          </div>
          <div className="faq-item">
            <h3>Do you ship to PO boxes?</h3>
            <p>Yes, we ship to PO boxes using standard shipping only. Express shipping requires a physical address.</p>
          </div>
          <div className="faq-item">
            <h3>What happens if I'm not home to receive my package?</h3>
            <p>The carrier will attempt delivery up to three times and may leave a delivery notice with instructions for pickup or redelivery.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShippingInfo; 