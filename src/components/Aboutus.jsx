import React, { useEffect, useRef } from 'react';
import Navbar from './navbar';
import Testi from './Testi';
import Footer from './Footer';
import './Aboutus.css';

const Aboutus = () => {
  const bodarRef = useRef(null);
  const coreValuesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            bodarRef.current?.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (coreValuesRef.current) {
      observer.observe(coreValuesRef.current);
    }

    return () => {
      if (coreValuesRef.current) {
        observer.unobserve(coreValuesRef.current);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="aboutus-page">
        {/* Hero Section */}
        <section className="hero-section1">
          <div className="hero-content">
            <h1 className="hero-title2">Connecting businesses globally, one shipment at a time</h1>
            <p className="hero-subtitle">With decades of logistics expertise and a global network, we ensure your cargo reaches every corner of the world safely and efficiently.</p>
            <a href="/quote" className="hero-cta-btn">Get a Quote</a>
          </div>
        </section>

        {/* About Us Section */}
        <section className="about-section">
          <div className="about-container">
            <div className="about-image">
              <img src="/Img Content1.png" alt="Logistics Services" />
            </div>
            <div className="about-content">
              <h2 className="about-heading">About Us</h2>
              <h3 className="about-title">Driven by Trust, Powered by Logistics</h3>
              <p className="about-description">
                At Tvara India, we specialize in comprehensive logistics solutions including air, ocean, 
                and surface freight services. Our commitment to excellence and customer satisfaction 
                has made us a trusted partner for businesses worldwide.
              </p>
              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon">🚢</div>
                  <span>Ocean Freight Excellence</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✈️</div>
                  <span>Air Cargo Solutions</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🚛</div>
                  <span>Surface Transport</span>
                </div>
              </div>
              <a href="/contact" className="learn-more-btn">Contact Us</a>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="core-values-section" ref={coreValuesRef}>
          <div className="core-values-container">
            <h2 className="core-values-title">The Core Values Behind Every Shipment</h2>
            <div className="bodar-element" ref={bodarRef}>
              <img src="/Bodar.png" alt="Bodar" />
            </div>
            <div className="core-values-content">
              <div className="values-left">
                <div className="value-item">
                  <div className="value-icon">✓</div>
                  <h3 className="value-title">Global Connectivity</h3>
                  <p className="value-description">A strong international network that empowers businesses to trade without borders.</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">✓</div>
                  <h3 className="value-title">Reliability in Every Shipment</h3>
                  <p className="value-description">We ensure your cargo reaches its destination safely, on time, every time.</p>
                </div>
              </div>
              <div className="core-values-image">
                <img src="/Image99.png" alt="Core Values" />
              </div>
              <div className="values-right">
                <div className="value-item">
                  <div className="value-icon">✓</div>
                  <h3 className="value-title">Innovation at the Core</h3>
                  <p className="value-description">Leveraging modern technology and smart tools to streamline logistics operations.</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">✓</div>
                  <h3 className="value-title">Customer-Centric Approach</h3>
                  <p className="value-description">Personalized solutions and dedicated support tailored to your business needs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Section */}
        <section className="new-section">
          <div className="new-section-container">
            <div className="new-section-content">
              <div className="new-section-text">
                <h2 className="new-section-title">Shaping the Future of Global Logistics</h2>
                <p className="new-section-description">
                  At Tvara India, we envision a world where logistics barriers are eliminated, 
                  and businesses can seamlessly connect across continents. Our innovative approach 
                  combines cutting-edge technology with decades of industry expertise to deliver 
                  solutions that not only meet today's demands but anticipate tomorrow's challenges.
                </p>
              </div>
              <div className="new-section-image">
                <img src="/Img123.png" alt="Future of Logistics" />
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

export default Aboutus;