import React, { useState } from 'react';
import './InfoPages.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    orderNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      title: "Customer Service",
      description: "For general inquiries and support",
      contact: "1-800-555-0123",
      hours: "Mon-Fri: 9am-6pm EST"
    },
    {
      title: "Order Support",
      description: "For questions about your order",
      contact: "orders@luxuryfashion.com",
      hours: "24/7 Email Support"
    },
    {
      title: "Store Inquiries",
      description: "For store-specific questions",
      contact: "stores@luxuryfashion.com",
      hours: "Mon-Sat: 10am-7pm Local Time"
    }
  ];

  const faqItems = [
    {
      question: "How can I track my order?",
      answer: "You can track your order by logging into your account or using the tracking number provided in your shipping confirmation email."
    },
    {
      question: "What is your return policy?",
      answer: "We offer free returns within 30 days of delivery. Items must be unworn and have original tags attached."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location."
    }
  ];

  return (
    <div className="info-page">
      <h1>Contact Us</h1>

      <section>
        <p className="mission-statement">
          We're here to help! Choose the best way to reach us below.
        </p>
      </section>

      <section>
        <h2>Contact Methods</h2>
        <div className="contact-methods">
          {contactMethods.map((method, index) => (
            <div key={index} className="contact-method">
              <h3>{method.title}</h3>
              <p>{method.description}</p>
              <p className="contact-info">{method.contact}</p>
              <p className="hours-info">{method.hours}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Select a subject</option>
              <option value="order">Order Inquiry</option>
              <option value="product">Product Information</option>
              <option value="shipping">Shipping & Delivery</option>
              <option value="returns">Returns & Exchanges</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="orderNumber">Order Number (if applicable)</label>
            <input
              type="text"
              id="orderNumber"
              name="orderNumber"
              value={formData.orderNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
            ></textarea>
          </div>

          <div className="form-actions">
            <button type="submit" className="primary-btn">Send Message</button>
          </div>
        </form>
      </section>

      <section>
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Visit Our Stores</h2>
        <div className="methods-grid">
          <div className="shipping-method">
            <h3>Find a Store</h3>
            <div className="method-details">
              <p>
                Visit our store locator to find the nearest location and get 
                in-person assistance from our expert staff.
              </p>
              <button className="secondary-btn">Store Locator</button>
            </div>
          </div>
          <div className="shipping-method">
            <h3>Book an Appointment</h3>
            <div className="method-details">
              <p>
                Schedule a personal shopping session or fitting appointment 
                at your preferred store location.
              </p>
              <button className="secondary-btn">Book Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Connect With Us</h2>
        <p>
          Follow us on social media for the latest updates, style inspiration, 
          and exclusive content.
        </p>
        <div className="social-links">
          <button className="social-btn">Facebook</button>
          <button className="social-btn">Instagram</button>
          <button className="social-btn">Twitter</button>
          <button className="social-btn">Pinterest</button>
        </div>
      </section>
    </div>
  );
};

export default ContactUs; 