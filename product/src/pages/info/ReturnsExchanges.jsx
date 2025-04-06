import React from 'react';
import './InfoPages.css';

const ReturnsExchanges = () => {
  const returnSteps = [
    {
      title: "Initiate Your Return",
      description: "Log into your account and visit the Orders section. Select the item you wish to return and follow the prompts to generate a return label."
    },
    {
      title: "Package Your Item",
      description: "Place the item in its original packaging or a secure box. Include all tags, accessories, and the original receipt or packing slip."
    },
    {
      title: "Ship Your Return",
      description: "Attach the provided return label to your package and drop it off at any authorized shipping location. Keep your tracking number for reference."
    },
    {
      title: "Refund Processing",
      description: "Once we receive and inspect your return, we'll process your refund within 3-5 business days. The refund will be issued to your original payment method."
    }
  ];

  const eligibilityItems = [
    "Items must be returned within 30 days of delivery",
    "Products must be unworn, unwashed, and have original tags attached",
    "Items marked as 'Final Sale' are not eligible for return",
    "Swimwear and intimate apparel must have hygiene strips intact",
    "Shoes must be returned in their original box"
  ];

  return (
    <div className="info-page">
      <h1>Returns & Exchanges</h1>
      
      <section>
        <h2>Our Return Policy</h2>
        <p>
          We want you to love your purchase! If you're not completely satisfied, 
          we accept returns within 30 days of delivery for a full refund or exchange. 
          All returns must meet our eligibility requirements to be accepted.
        </p>
      </section>

      <section>
        <h2>Return Eligibility</h2>
        <ul className="faq-list">
          {eligibilityItems.map((item, index) => (
            <li key={index} className="faq-item">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>How to Return</h2>
        <div className="methods-grid">
          {returnSteps.map((step, index) => (
            <div key={index} className="shipping-method">
              <h3>{step.title}</h3>
              <div className="method-details">
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Exchanges</h2>
        <p>
          Want to exchange for a different size or color? We make it easy! 
          Instead of returning and reordering, you can request an exchange 
          during the return process. Once we receive your original item, 
          we'll ship out your exchange at no additional cost.
        </p>
      </section>

      <section>
        <h2>International Returns</h2>
        <p>
          International customers are responsible for return shipping costs and 
          any applicable customs fees. Please contact our customer service team 
          for detailed instructions on international returns.
        </p>
      </section>

      <section className="contact-section">
        <h2>Need Help?</h2>
        <p>
          Our customer service team is here to assist you with any questions 
          about returns or exchanges.
        </p>
        <div className="cta-buttons">
          <button className="primary-btn">Contact Support</button>
          <button className="secondary-btn">View FAQ</button>
        </div>
      </section>
    </div>
  );
};

export default ReturnsExchanges; 