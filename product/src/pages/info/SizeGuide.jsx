import React from 'react';
import './InfoPages.css';

const SizeGuide = () => {
  const womensSizes = {
    headers: ['US Size', 'Bust (in)', 'Waist (in)', 'Hips (in)'],
    rows: [
      ['XS (0-2)', '32-33', '24-25', '34-35'],
      ['S (4-6)', '34-35', '26-27', '36-37'],
      ['M (8-10)', '36-37', '28-29', '38-39'],
      ['L (12-14)', '38-40', '30-32', '40-42'],
      ['XL (16-18)', '41-43', '33-35', '43-45']
    ]
  };

  const mensSizes = {
    headers: ['Size', 'Chest (in)', 'Waist (in)', 'Neck (in)', 'Sleeve (in)'],
    rows: [
      ['S', '35-37', '29-31', '14-14.5', '32-33'],
      ['M', '38-40', '32-34', '15-15.5', '33-34'],
      ['L', '41-43', '35-37', '16-16.5', '34-35'],
      ['XL', '44-46', '38-40', '17-17.5', '35-36'],
      ['XXL', '47-49', '41-43', '18-18.5', '36-37']
    ]
  };

  const kidsSizes = {
    headers: ['Size', 'Height (in)', 'Chest (in)', 'Waist (in)', 'Hip (in)'],
    rows: [
      ['2T', '33-36', '20-21', '19.5-20', '20-21'],
      ['3T', '36-39', '21-22', '20-20.5', '21-22'],
      ['4T', '39-42', '22-23', '20.5-21', '22-23'],
      ['5', '42-45', '23-24', '21-21.5', '23-24'],
      ['6', '45-48', '24-25', '21.5-22', '24-25']
    ]
  };

  const renderSizeTable = (sizeData, title) => (
    <div className="size-table-container">
      <h3>{title}</h3>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              {sizeData.headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sizeData.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const measurementTips = [
    {
      area: "Bust/Chest",
      instruction: "Measure around the fullest part of your bust/chest, keeping the tape parallel to the ground."
    },
    {
      area: "Waist",
      instruction: "Measure around your natural waistline, keeping the tape comfortably loose."
    },
    {
      area: "Hips",
      instruction: "Measure around the fullest part of your hips, about 8 inches below your waist."
    },
    {
      area: "Inseam",
      instruction: "Measure from the crotch seam to the bottom of the leg, along the inside of the leg."
    }
  ];

  return (
    <div className="info-page">
      <h1>Size Guide</h1>

      <section>
        <h2>How to Measure</h2>
        <div className="methods-grid">
          {measurementTips.map((tip, index) => (
            <div key={index} className="shipping-method">
              <h3>{tip.area}</h3>
              <div className="method-details">
                <p>{tip.instruction}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Women's Sizing</h2>
        {renderSizeTable(womensSizes, "Women's Standard Sizes")}
      </section>

      <section>
        <h2>Men's Sizing</h2>
        {renderSizeTable(mensSizes, "Men's Standard Sizes")}
      </section>

      <section>
        <h2>Kids' Sizing</h2>
        {renderSizeTable(kidsSizes, "Kids' Standard Sizes")}
      </section>

      <section>
        <h2>Size Guide Tips</h2>
        <div className="faq-list">
          <div className="faq-item">
            <p>• For the most accurate measurements, use a soft measuring tape.</p>
          </div>
          <div className="faq-item">
            <p>• Measure yourself in your underwear to ensure accurate measurements.</p>
          </div>
          <div className="faq-item">
            <p>• Keep the measuring tape level and comfortably loose.</p>
          </div>
          <div className="faq-item">
            <p>• When in doubt, size up - you can always have items tailored to fit.</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Need Help?</h2>
        <p>
          Still unsure about your size? Our fit specialists are here to help you 
          find the perfect fit.
        </p>
        <div className="cta-buttons">
          <button className="primary-btn">Chat with a Fit Specialist</button>
          <button className="secondary-btn">Email Us</button>
        </div>
      </section>
    </div>
  );
};

export default SizeGuide; 