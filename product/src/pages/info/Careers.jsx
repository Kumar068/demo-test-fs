import React, { useState } from 'react';
import './InfoPages.css';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { value: 'all', label: 'All Departments' },
    { value: 'design', label: 'Design' },
    { value: 'tech', label: 'Technology' },
    { value: 'retail', label: 'Retail' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'operations', label: 'Operations' }
  ];

  const jobs = [
    {
      id: 1,
      title: "Senior Fashion Designer",
      department: "design",
      location: "New York, NY",
      type: "Full-time",
      description: "Join our creative team to design innovative and sustainable luxury fashion collections."
    },
    {
      id: 2,
      title: "Full Stack Developer",
      department: "tech",
      location: "Remote",
      type: "Full-time",
      description: "Help build and maintain our e-commerce platform and internal tools."
    },
    {
      id: 3,
      title: "Retail Store Manager",
      department: "retail",
      location: "Los Angeles, CA",
      type: "Full-time",
      description: "Lead our flagship store team and deliver exceptional customer experiences."
    },
    {
      id: 4,
      title: "Digital Marketing Manager",
      department: "marketing",
      location: "New York, NY",
      type: "Full-time",
      description: "Drive our digital marketing strategy and brand presence across channels."
    },
    {
      id: 5,
      title: "Supply Chain Coordinator",
      department: "operations",
      location: "Chicago, IL",
      type: "Full-time",
      description: "Manage relationships with suppliers and ensure sustainable operations."
    }
  ];

  const benefits = [
    {
      title: "Health & Wellness",
      items: [
        "Comprehensive health insurance",
        "Dental and vision coverage",
        "Mental health support",
        "Fitness membership reimbursement"
      ]
    },
    {
      title: "Work-Life Balance",
      items: [
        "Flexible working hours",
        "Remote work options",
        "Unlimited PTO",
        "Paid parental leave"
      ]
    },
    {
      title: "Growth & Development",
      items: [
        "Professional development budget",
        "Mentorship programs",
        "Industry conferences",
        "Internal mobility opportunities"
      ]
    },
    {
      title: "Perks & Discounts",
      items: [
        "Employee discount on products",
        "Annual clothing allowance",
        "Transportation benefits",
        "Team social events"
      ]
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We encourage creative thinking and bold ideas."
    },
    {
      title: "Sustainability",
      description: "We're committed to environmental and social responsibility."
    },
    {
      title: "Diversity",
      description: "We celebrate diverse perspectives and inclusive culture."
    },
    {
      title: "Growth",
      description: "We invest in our team's personal and professional development."
    }
  ];

  const filteredJobs = selectedDepartment === 'all'
    ? jobs
    : jobs.filter(job => job.department === selectedDepartment);

  return (
    <div className="info-page">
      <h1>Join Our Team</h1>

      <section>
        <p className="mission-statement">
          Be part of a team that's redefining luxury fashion through innovation, 
          sustainability, and exceptional craftsmanship.
        </p>
      </section>

      <section>
        <h2>Open Positions</h2>
        <div className="filter-container">
          <label htmlFor="department-select">Filter by Department:</label>
          <select
            id="department-select"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="region-select"
          >
            {departments.map(dept => (
              <option key={dept.value} value={dept.value}>
                {dept.label}
              </option>
            ))}
          </select>
        </div>

        <div className="jobs-grid">
          {filteredJobs.map(job => (
            <div key={job.id} className="job-card">
              <div className="job-header">
                <h3>{job.title}</h3>
                <span className="job-type">{job.type}</span>
              </div>
              <div className="job-details">
                <p className="job-location">{job.location}</p>
                <p className="job-description">{job.description}</p>
                <button className="primary-btn">Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Benefits & Perks</h2>
        <div className="benefits-grid">
          {benefits.map((category, index) => (
            <div key={index} className="benefit-category">
              <h3>{category.title}</h3>
              <ul>
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Our Culture</h2>
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
        <h2>Growth & Development</h2>
        <div className="methods-grid">
          <div className="shipping-method">
            <h3>Learning Opportunities</h3>
            <div className="method-details">
              <p>
                We believe in continuous learning and provide resources for both 
                personal and professional development. From mentorship programs to 
                industry conferences, we invest in your growth.
              </p>
            </div>
          </div>
          <div className="shipping-method">
            <h3>Career Progression</h3>
            <div className="method-details">
              <p>
                Your growth matters to us. We offer clear career paths and 
                opportunities for advancement across departments and locations 
                globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Don't See the Right Role?</h2>
        <p>
          We're always looking for talented individuals to join our team. 
          Send us your resume and we'll keep you in mind for future opportunities.
        </p>
        <div className="cta-buttons">
          <button className="primary-btn">Submit Resume</button>
          <button className="secondary-btn">Contact HR</button>
        </div>
      </section>
    </div>
  );
};

export default Careers; 