import React from 'react';
import './InfoPages.css';

const Sustainability = () => {
  const initiatives = [
    {
      title: "Sustainable Materials",
      description: "We prioritize the use of organic cotton, recycled polyester, and other eco-friendly materials in our products.",
      stats: "75% of our materials are sustainably sourced"
    },
    {
      title: "Ethical Production",
      description: "All our manufacturing partners are certified for fair labor practices and sustainable production methods.",
      stats: "100% fair trade certified factories"
    },
    {
      title: "Waste Reduction",
      description: "Our zero-waste program aims to eliminate production waste through recycling and innovative design practices.",
      stats: "50% reduction in production waste since 2020"
    },
    {
      title: "Carbon Neutral",
      description: "We offset our carbon emissions through investments in renewable energy and reforestation projects.",
      stats: "Net zero carbon emissions achieved in 2023"
    }
  ];

  const goals = [
    {
      year: "2025",
      goals: [
        "100% sustainable materials in all products",
        "Zero single-use plastics in packaging",
        "Renewable energy in all retail locations"
      ]
    },
    {
      year: "2027",
      goals: [
        "Full supply chain transparency",
        "Water neutral production processes",
        "Circular fashion program in all markets"
      ]
    },
    {
      year: "2030",
      goals: [
        "Carbon negative operations",
        "Zero waste to landfill",
        "100% biodegradable packaging"
      ]
    }
  ];

  const certifications = [
    "Global Organic Textile Standard (GOTS)",
    "Fair Trade Certified™",
    "OEKO-TEX® Standard 100",
    "Cradle to Cradle Certified™",
    "B Corp™ Certification"
  ];

  return (
    <div className="info-page">
      <h1>Our Commitment to Sustainability</h1>

      <section>
        <p className="mission-statement">
          We believe that luxury fashion and environmental responsibility go hand in hand. 
          Our commitment to sustainability drives every decision we make, from design to delivery.
        </p>
      </section>

      <section>
        <h2>Current Initiatives</h2>
        <div className="values-grid">
          {initiatives.map((initiative, index) => (
            <div key={index} className="value-item">
              <h3>{initiative.title}</h3>
              <p>{initiative.description}</p>
              <p className="stats-highlight">{initiative.stats}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Our Sustainability Goals</h2>
        <div className="timeline">
          {goals.map((period, index) => (
            <div key={index} className="milestone">
              <div className="year">{period.year}</div>
              <div className="goals-list">
                <ul className="faq-list">
                  {period.goals.map((goal, goalIndex) => (
                    <li key={goalIndex} className="faq-item">
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-item">
              <span className="certification-icon">✓</span>
              {cert}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Recycling Program</h2>
        <div className="methods-grid">
          <div className="shipping-method">
            <h3>How It Works</h3>
            <div className="method-details">
              <p>
                Bring your gently used luxury items to any of our stores for recycling. 
                Receive store credit for your contribution to sustainable fashion.
              </p>
            </div>
          </div>
          <div className="shipping-method">
            <h3>What We Accept</h3>
            <div className="method-details">
              <p>
                We accept clothing, shoes, and accessories from any brand in good condition. 
                All items are either recycled or donated to our charitable partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Join Our Sustainable Journey</h2>
        <p>
          Learn more about our sustainability initiatives and how you can be part of 
          our mission to make fashion more environmentally responsible.
        </p>
        <div className="cta-buttons">
          <button className="primary-btn">Download Sustainability Report</button>
          <button className="secondary-btn">Partner With Us</button>
        </div>
      </section>
    </div>
  );
};

export default Sustainability; 