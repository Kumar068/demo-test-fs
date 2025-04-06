import React, { useState } from 'react';
import './InfoPages.css';

const StoreLocator = () => {
  const [selectedRegion, setSelectedRegion] = useState('all');

  const stores = [
    {
      id: 1,
      name: "Luxury Fashion Flagship Store",
      address: "123 Fifth Avenue",
      city: "New York",
      state: "NY",
      zip: "10003",
      phone: "(212) 555-0123",
      hours: "Mon-Sat: 10am-8pm, Sun: 11am-6pm",
      region: "northeast",
      features: ["Personal Shopping", "Alterations", "Cafe", "VIP Lounge"]
    },
    {
      id: 2,
      name: "Beverly Hills Boutique",
      address: "456 Rodeo Drive",
      city: "Beverly Hills",
      state: "CA",
      zip: "90210",
      phone: "(310) 555-0123",
      hours: "Mon-Sat: 10am-7pm, Sun: 12pm-6pm",
      region: "west",
      features: ["Personal Shopping", "Alterations", "VIP Lounge"]
    },
    {
      id: 3,
      name: "Chicago Luxury Store",
      address: "789 Michigan Avenue",
      city: "Chicago",
      state: "IL",
      zip: "60611",
      phone: "(312) 555-0123",
      hours: "Mon-Sat: 10am-7pm, Sun: 11am-6pm",
      region: "midwest",
      features: ["Personal Shopping", "Alterations"]
    },
    {
      id: 4,
      name: "Miami Fashion Center",
      address: "321 Lincoln Road",
      city: "Miami Beach",
      state: "FL",
      zip: "33139",
      phone: "(305) 555-0123",
      hours: "Mon-Sun: 10am-9pm",
      region: "southeast",
      features: ["Personal Shopping", "Alterations", "Beach Accessories"]
    }
  ];

  const regions = [
    { value: 'all', label: 'All Regions' },
    { value: 'northeast', label: 'Northeast' },
    { value: 'southeast', label: 'Southeast' },
    { value: 'midwest', label: 'Midwest' },
    { value: 'west', label: 'West Coast' }
  ];

  const filteredStores = selectedRegion === 'all' 
    ? stores 
    : stores.filter(store => store.region === selectedRegion);

  return (
    <div className="info-page">
      <h1>Store Locator</h1>

      <section className="store-filter">
        <h2>Find a Store</h2>
        <div className="filter-container">
          <label htmlFor="region-select">Select Region:</label>
          <select 
            id="region-select"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="region-select"
          >
            {regions.map(region => (
              <option key={region.value} value={region.value}>
                {region.label}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="stores-grid">
        {filteredStores.map(store => (
          <div key={store.id} className="store-card">
            <h3>{store.name}</h3>
            <div className="store-details">
              <div className="address">
                <p>{store.address}</p>
                <p>{store.city}, {store.state} {store.zip}</p>
                <p className="phone">{store.phone}</p>
              </div>
              <div className="hours">
                <h4>Store Hours</h4>
                <p>{store.hours}</p>
              </div>
              <div className="features">
                <h4>Store Features</h4>
                <ul>
                  {store.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="store-actions">
                <button className="primary-btn">Get Directions</button>
                <button className="secondary-btn">Book Appointment</button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="contact-section">
        <h2>Need More Information?</h2>
        <p>
          Contact our store support team for special accommodations or 
          specific inquiries about our retail locations.
        </p>
        <div className="cta-buttons">
          <button className="primary-btn">Contact Store Support</button>
          <button className="secondary-btn">View Store Policies</button>
        </div>
      </section>
    </div>
  );
};

export default StoreLocator; 