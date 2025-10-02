import React from 'react';
import Navbar from './navbar';
import Testi from './Testi';
import Footer from './Footer';
import './Services.css';

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="services-page">
        {/* Hero Section */}
        <section className="hero-section2">
          <div className="hero-content">
            <h1 className="hero-title">Your Trusted Partner in Global Trade</h1>
            <p className="hero-subtitle">Providing end-to-end freight forwarding solutions across air, sea, and land, ensuring your shipments reach every corner of the world safely, on time, and efficiently.</p>
            <a href="/quote" className="hero-cta-btn">Get a Quote</a>
          </div>
        </section>

        {/* Why Businesses Trust Us Section */}
        <section className="why-businesses-trust-section">
          <div className="why-businesses-container">
            <div className="trust-content-wrapper">
              <div className="trust-text-section">
                <h2 className="why-businesses-title">Why Businesses Trust Us</h2>
                <p className="why-businesses-subtitle">Reliable, innovative, and customer-focused logistics solutions designed to move your business forward.</p>
              </div>
              
              <div className="trust-cards-section">
                <div className="trust-cards-grid">
                  <div className="trust-card">
                    <div className="trust-icon">🌐</div>
                    <h3 className="trust-card-title">Global Network</h3>
                    <p className="trust-card-description">Seamless import and export services across 50+ countries with trusted partners.</p>
                  </div>
                  
                  <div className="trust-card">
                    <div className="trust-icon">⏰</div>
                    <h3 className="trust-card-title">On-Time Delivery</h3>
                    <p className="trust-card-description">Efficient logistics operations ensure your shipments reach their destination safely and on schedule.</p>
                  </div>
                  
                  <div className="trust-card">
                    <div className="trust-icon">⚙️</div>
                    <h3 className="trust-card-title">Advanced Technology</h3>
                    <p className="trust-card-description">Real-time tracking, digital dashboards, and tech-driven logistics for transparency and control.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Air Freight & Ocean Freight */}
        <section className="services-section">
          <div className="services-container">
            {/* Air Freight Service */}
            <div className="service-card-air">
              <div className="service-image-left">
                <img src="/imges.png" alt="Air Freight" />
              </div>
              <div className="service-content-center">
                <h3 className="service-title">Air Freight</h3>
                <p className="service-description">Rapid global air cargo for time-sensitive shipments, with flexible flight options and priority handling.</p>
              </div>
              <div className="service-image-right">
                <img src="/imges1.png" alt="Ocean Freight" />
              </div>
            </div>
            
            {/* Ocean Freight Service */}
            <div className="service-card-ocean">
              <div className="service-image-left">
                <img src="/img23.png" alt="Air Freight" />
              </div>
              <div className="service-content-center">
                <h3 className="service-title">Ocean Freight</h3>
                <p className="service-description">Cost-efficient sea freight, both Full Container Load (FCL) and Less Container Load (LCL) via trusted carriers.</p>
              </div>
              <div className="service-image-right">
                <img src="/img32.png" alt="Ocean Freight" />
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services Section - Land Transport & Customs Clearance */}
        <section className="services-section">
          <div className="services-container">
            {/* Land / Road Transport Service */}
            <div className="service-card-air">
              <div className="service-image-left">
                <img src="/img89.png" alt="Land Transport" />
              </div>
              <div className="service-content-center">
                <h3 className="service-title">Land / Road Transport</h3>
                <p className="service-description">Reliable trucking and road logistics connecting ports to inland locations seamlessly.</p>
              </div>
              <div className="service-image-right">
                <img src="/img98.png" alt="Road Transport" />
              </div>
            </div>
            
            {/* Customs Clearance Service */}
            <div className="service-card-ocean">
              <div className="service-image-left">
                <img src="/img00.png" alt="Customs Clearance" />
              </div>
              <div className="service-content-center">
                <h3 className="service-title">Customs Clearance</h3>
                <p className="service-description">Expert handling of import/export formalities, duties, and compliance to ensure fast clearance.</p>
              </div>
              <div className="service-image-right">
                <img src="/img01.png" alt="Customs Processing" />
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services Section - Warehousing & Multimodal Solutions */}
        <section className="services-section">
          <div className="services-container">
            {/* Warehousing Service */}
            <div className="service-card-air">
              <div className="service-image-left">
                <img src="/img87.png" alt="Warehousing" />
              </div>
              <div className="service-content-center">
                <h3 className="service-title">Warehousing</h3>
                <p className="service-description">Secure storage, inventory management, and last-mile distribution services.</p>
              </div>
              <div className="service-image-right">
                <img src="/img78.png" alt="Warehouse Operations" />
              </div>
            </div>
            
            {/* Multimodal Solutions Service */}
            <div className="service-card-ocean">
              <div className="service-image-left">
                <img src="/img71.png" alt="Multimodal Solutions" />
              </div>
              <div className="service-content-center">
                <h3 className="service-title">Multimodal Solutions</h3>
                <p className="service-description">Combined transport options (air + sea + road) to optimize cost, speed, and reliability.</p>
              </div>
              <div className="service-image-right">
                <img src="/img81.png" alt="Multimodal Transport" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testi />
      </div>
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Services;
