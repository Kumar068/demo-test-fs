import React from 'react';
import './InfoPages.css';

function CustomerService() {
  const faqs = [
    {
      question: "What are your shipping times?",
      answer: "We typically process orders within 1-2 business days. Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unworn items in original condition with tags attached. Returns are free for store credit, or a small fee applies for refunds."
    },
    {
      question: "How do I know which size to order?",
      answer: "Please refer to our Size Guide for detailed measurements. If you're between sizes, we recommend ordering the larger size."
    }
  ];

  return (
    <div className="info-page">
      <h1>Customer Service</h1>
      
      <section className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-methods">
          <div className="contact-method">
            <h3>Email</h3>
            <p>support@fashionstore.com</p>
            <p>Response time: Within 24 hours</p>
          </div>
          <div className="contact-method">
            <h3>Phone</h3>
            <p>1-800-FASHION</p>
            <p>Mon-Fri: 9am-6pm EST</p>
          </div>
          <div className="contact-method">
            <h3>Live Chat</h3>
            <p>Available 24/7</p>
            <button className="chat-button">Start Chat</button>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="support-section">
        <h2>Additional Support</h2>
        <p>
          Need more help? Our customer service team is here to assist you.
          You can also check our detailed guides on:
        </p>
        <ul>
          <li>Shipping Information</li>
          <li>Returns & Exchanges</li>
          <li>Size Guide</li>
          <li>Order Tracking</li>
        </ul>
      </section>
    </div>
  );
}

export default CustomerService; 