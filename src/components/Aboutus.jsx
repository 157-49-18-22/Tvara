import React from 'react';
import Navbar from './navbar';
import Testi from './Testi';
import Footer from './Footer';
import './Aboutus.css';
import {
  AnimatedSection,
  AnimatedDiv,
  AnimatedCard,
  AnimatedTitle,
  AnimatedText,
  StaggeredContainer,
  StaggeredItem
} from './Animations';

const Aboutus = () => {

  return (
    <>
      <Navbar />
      <div className="aboutus-page">
        {/* Hero Section */}
        <AnimatedSection className="hero-section1">
          <div className="hero-content">
            <AnimatedDiv variant={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              <h1 className="hero-title2">Connecting businesses globally, one shipment at a time</h1>
            </AnimatedDiv>
            <AnimatedDiv delay={0.2} variant={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              <p className="hero-subtitle">With decades of logistics expertise and a global network, we ensure your cargo reaches every corner of the world safely and efficiently.</p>
            </AnimatedDiv>
            <AnimatedDiv delay={0.4} variant={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              <a href="/quote" className="hero-cta-btn">Get a Quote</a>
            </AnimatedDiv>
          </div>
        </AnimatedSection>

        {/* About Us Section */}
        <AnimatedSection className="about-section">
          <div className="about-container">
            <AnimatedDiv className="about-image" delay={0.1}>
              <img src="/Img Content1.png" alt="Logistics Services" />
            </AnimatedDiv>
            <div className="about-content">
              <AnimatedTitle className="about-heading" delay={0.2}>About Us</AnimatedTitle>
              <AnimatedTitle className="about-title" delay={0.3}>Driven by Trust, Powered by Logistics</AnimatedTitle>
              <AnimatedText className="about-description" delay={0.4}>
                At Tvara India, we specialize in comprehensive logistics solutions including air, ocean,
                and surface freight services. Our commitment to excellence and customer satisfaction
                has made us a trusted partner for businesses worldwide.
              </AnimatedText>
              <StaggeredContainer className="about-features">
                <StaggeredItem className="feature-item">
                  <div className="feature-icon">🚢</div>
                  <span>Ocean Freight Excellence</span>
                </StaggeredItem>
                <StaggeredItem className="feature-item">
                  <div className="feature-icon">✈️</div>
                  <span>Air Cargo Solutions</span>
                </StaggeredItem>
                <StaggeredItem className="feature-item">
                  <div className="feature-icon">🚛</div>
                  <span>Surface Transport</span>
                </StaggeredItem>
              </StaggeredContainer>
              <AnimatedDiv delay={0.6}>
                <a href="/contact" className="learn-more-btn">Contact Us</a>
              </AnimatedDiv>
            </div>
          </div>
        </AnimatedSection>

        {/* Core Values Section */}
        <AnimatedSection className="core-values-section">
          <div className="core-values-container">
            <AnimatedTitle className="core-values-title" delay={0.1}>The Core Values Behind Every Shipment</AnimatedTitle>
            <AnimatedDiv className="bodar-element" delay={0.2}>
              <img src="/Bodar.png" alt="Bodar" />
            </AnimatedDiv>
            <StaggeredContainer className="core-values-content">
              <div className="values-left">
                <StaggeredItem className="value-item">
                  <div className="value-icon">✓</div>
                  <h3 className="value-title">Global Connectivity</h3>
                  <p className="value-description">A strong international network that empowers businesses to trade without borders.</p>
                </StaggeredItem>
                <StaggeredItem className="value-item">
                  <div className="value-icon">✓</div>
                  <h3 className="value-title">Reliability in Every Shipment</h3>
                  <p className="value-description">We ensure your cargo reaches its destination safely, on time, every time.</p>
                </StaggeredItem>
              </div>
              <AnimatedDiv className="core-values-image" delay={0.3}>
                <img src="/Image99.png" alt="Core Values" />
              </AnimatedDiv>
              <div className="values-right">
                <StaggeredItem className="value-item">
                  <div className="value-icon">✓</div>
                  <h3 className="value-title">Innovation at the Core</h3>
                  <p className="value-description">Leveraging modern technology and smart tools to streamline logistics operations.</p>
                </StaggeredItem>
                <StaggeredItem className="value-item">
                  <div className="value-icon">✓</div>
                  <h3 className="value-title">Customer-Centric Approach</h3>
                  <p className="value-description">Personalized solutions and dedicated support tailored to your business needs.</p>
                </StaggeredItem>
              </div>
            </StaggeredContainer>
          </div>
        </AnimatedSection>

        {/* New Section */}
        <AnimatedSection className="new-section">
          <div className="new-section-container">
            <div className="new-section-content">
              <AnimatedDiv className="new-section-text" delay={0.1}>
                <h2 className="new-section-title">Shaping the Future of Global Logistics</h2>
                <p className="new-section-description">
                  At Tvara India, we envision a world where logistics barriers are eliminated,
                  and businesses can seamlessly connect across continents. Our innovative approach
                  combines cutting-edge technology with decades of industry expertise to deliver
                  solutions that not only meet today's demands but anticipate tomorrow's challenges.
                </p>
              </AnimatedDiv>
              <AnimatedDiv className="new-section-image" delay={0.3}>
                <img src="/Img123.png" alt="Future of Logistics" />
              </AnimatedDiv>
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection delay={0.2}>
          <Testi />
        </AnimatedSection>
      </div>
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Aboutus;