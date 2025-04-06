import React from 'react';
import './InfoPages.css';

const OurStory = () => {
  const milestones = [
    {
      year: "2010",
      title: "A Vision Takes Shape",
      description: "Founded with a vision to redefine luxury fashion, we opened our first boutique in New York City's SoHo district."
    },
    {
      year: "2012",
      title: "Digital Innovation",
      description: "Launched our e-commerce platform, bringing curated luxury fashion to customers worldwide."
    },
    {
      year: "2015",
      title: "Sustainable Fashion Pioneer",
      description: "Introduced our first sustainable collection and implemented eco-friendly practices across operations."
    },
    {
      year: "2018",
      title: "Global Expansion",
      description: "Expanded to major fashion capitals with flagship stores in Paris, London, and Tokyo."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Revolutionized online luxury shopping with virtual styling and AR try-on technology."
    },
    {
      year: "2023",
      title: "Future of Fashion",
      description: "Leading the industry in sustainable luxury fashion with innovative materials and practices."
    }
  ];

  const values = [
    {
      title: "Quality",
      description: "We believe in creating timeless pieces that last, using the finest materials and craftsmanship."
    },
    {
      title: "Sustainability",
      description: "Environmental responsibility is at the core of every decision we make."
    },
    {
      title: "Innovation",
      description: "We continuously push boundaries in design, technology, and sustainable practices."
    },
    {
      title: "Community",
      description: "We foster meaningful connections with our customers, partners, and communities."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      title: "Founder & Creative Director",
      bio: "A visionary designer with over 20 years of experience in luxury fashion."
    },
    {
      name: "Michael Chen",
      title: "Chief Sustainability Officer",
      bio: "Leading our initiatives in sustainable fashion and ethical production."
    },
    {
      name: "Emma Rodriguez",
      title: "Head of Design",
      bio: "Award-winning designer known for innovative and sustainable designs."
    }
  ];

  return (
    <div className="info-page">
      <h1>Our Story</h1>

      <section>
        <p className="mission-statement">
          We are more than a fashion brand - we are a movement towards sustainable luxury, 
          where style meets responsibility, and tradition embraces innovation.
        </p>
      </section>

      <section>
        <h2>Our Journey</h2>
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

      <section>
        <h2>Our Values</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-item">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Our Leadership</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-member">
              <h3>{member.name}</h3>
              <p className="title">{member.title}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Our Vision</h2>
        <div className="methods-grid">
          <div className="shipping-method">
            <h3>Future of Fashion</h3>
            <div className="method-details">
              <p>
                We envision a future where luxury fashion leads the way in sustainability, 
                innovation, and social responsibility. Our goal is to inspire positive 
                change in the industry while delivering exceptional quality and style.
              </p>
            </div>
          </div>
          <div className="shipping-method">
            <h3>Our Promise</h3>
            <div className="method-details">
              <p>
                We promise to continue pushing boundaries, challenging conventions, and 
                creating fashion that makes a difference. Every piece we create is a 
                step towards a more sustainable and stylish future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Join Our Journey</h2>
        <p>
          Be part of our story as we continue to redefine luxury fashion for a 
          sustainable future.
        </p>
        <div className="cta-buttons">
          <button className="primary-btn">View Careers</button>
          <button className="secondary-btn">Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default OurStory; 