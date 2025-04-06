import React from 'react';
import './InfoPages.css';

function AboutUs() {
  const milestones = [
    {
      year: "2010",
      title: "Our Beginning",
      description: "Started as a small boutique in New York City with a vision to make luxury fashion accessible."
    },
    {
      year: "2015",
      title: "Digital Transformation",
      description: "Launched our e-commerce platform to reach fashion enthusiasts worldwide."
    },
    {
      year: "2018",
      title: "Sustainability Initiative",
      description: "Introduced our eco-friendly collection and committed to sustainable practices."
    },
    {
      year: "2020",
      title: "Global Expansion",
      description: "Expanded to international markets and opened flagship stores in major fashion capitals."
    }
  ];

  return (
    <div className="info-page">
      <h1>About Us</h1>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p className="mission-statement">
          "To inspire and empower individuals through thoughtfully curated fashion that combines style, 
          quality, and sustainability."
        </p>
        <p className="mission-description">
          We believe that fashion is more than just clothing – it's a form of self-expression that should 
          be accessible to everyone while respecting our planet and its people.
        </p>
      </section>

      <section className="story-section">
        <h2>Our Story</h2>
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div key={index} className="milestone">
              <div className="year">{milestone.year}</div>
              <div className="milestone-content">
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>Quality</h3>
            <p>We carefully select premium materials and partner with skilled artisans to create lasting pieces.</p>
          </div>
          <div className="value-item">
            <h3>Sustainability</h3>
            <p>Environmental responsibility is at the core of our business, from sourcing to packaging.</p>
          </div>
          <div className="value-item">
            <h3>Innovation</h3>
            <p>We embrace new technologies and trends while maintaining timeless style.</p>
          </div>
          <div className="value-item">
            <h3>Community</h3>
            <p>We foster a inclusive community that celebrates diversity in fashion and culture.</p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Leadership Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <h3>Sarah Johnson</h3>
            <p className="title">CEO & Founder</p>
            <p>Fashion industry veteran with 20+ years of experience</p>
          </div>
          <div className="team-member">
            <h3>Michael Chen</h3>
            <p className="title">Creative Director</p>
            <p>Award-winning designer and sustainability advocate</p>
          </div>
          <div className="team-member">
            <h3>Emma Rodriguez</h3>
            <p className="title">Head of Operations</p>
            <p>Expert in sustainable supply chain management</p>
          </div>
        </div>
      </section>

      <section className="join-section">
        <h2>Join Our Journey</h2>
        <p>
          We're always looking for passionate individuals to join our team. Check out our 
          careers page for current opportunities, or follow us on social media to stay updated 
          on our latest initiatives.
        </p>
        <div className="cta-buttons">
          <button className="primary-btn">View Careers</button>
          <button className="secondary-btn">Follow Us</button>
        </div>
      </section>
    </div>
  );
}

export default AboutUs; 