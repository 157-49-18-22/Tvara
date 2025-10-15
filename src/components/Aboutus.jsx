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
              <h1 className="hero-title2">2½ Decades of Import Freight Excellence</h1>
            </AnimatedDiv>
            <AnimatedDiv delay={0.2} variant={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              <p className="hero-subtitle">From a customs clearance firm in 2006 to a leading import freight forwarder in 2025 — delivering reliable, cost-efficient solutions from Asia to India.</p>
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
              <AnimatedTitle className="about-heading" delay={0.2}>Our Story</AnimatedTitle>
              <AnimatedTitle className="about-title" delay={0.3}>Built on 25 Years of Logistics Legacy</AnimatedTitle>
              <AnimatedText className="about-description" delay={0.4}>
                Tvara Freight Solutions Pvt. Ltd. was founded in 2025 as a focused import freight forwarder,
                but our roots go back 25 years. We began as a customs clearance proprietorship in 2006,
                expanded with incorporation in 2015, launched ocean services in 2020, and now specialize
                exclusively in import freight forwarding from China, Vietnam, Thailand & Malaysia to India.
              </AnimatedText>
              <StaggeredContainer className="about-features">
                <StaggeredItem className="feature-item">
                  <div className="feature-icon">🚢</div>
                  <span>Import Ocean Freight (FCL/LCL)</span>
                </StaggeredItem>
                <StaggeredItem className="feature-item">
                  <div className="feature-icon">✈️</div>
                  <span>Import Air Freight</span>
                </StaggeredItem>
                <StaggeredItem className="feature-item">
                  <div className="feature-icon">📋</div>
                  <span>Customs Clearance Since 2006</span>
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
            <AnimatedTitle className="core-values-title" delay={0.1}>Why Businesses Choose Tvara</AnimatedTitle>
            <AnimatedDiv className="bodar-element" delay={0.2}>
              <img src="/Bodar.png" alt="Bodar" />
            </AnimatedDiv>
            <StaggeredContainer className="core-values-content">
              <div className="values-left">
                <StaggeredItem className="value-item">
                  <div className="value-icon">✓</div>
                  <h3 className="value-title">25 Years of Proven Track Record</h3>
                  <p className="value-description">Cumulative industry experience across customs clearance and freight forwarding.</p>
                </StaggeredItem>
                <StaggeredItem className="value-item">
                  <div className="value-icon">✓</div>
                  <h3 className="value-title">Deep Regulatory Expertise</h3>
                  <p className="value-description">Expert knowledge of Indian customs procedures, documentation and compliance since 2006.</p>
                </StaggeredItem>
              </div>
              <AnimatedDiv className="core-values-image" delay={0.3}>
                <img src="/Image99.png" alt="Core Values" />
              </AnimatedDiv>
              <div className="values-right">
                <StaggeredItem className="value-item">
                  <div className="value-icon">✓</div>
                  <h3 className="value-title">Dedicated Import Focus</h3>
                  <p className="value-description">Structured solely for import freight forwarding with sharper processes and cost control.</p>
                </StaggeredItem>
                <StaggeredItem className="value-item">
                  <div className="value-icon">✓</div>
                  <h3 className="value-title">Transparent Pricing</h3>
                  <p className="value-description">Clear breakups for ocean/air, destination charges, inland haulage and customs.</p>
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
                <h2 className="new-section-title">Our Geographic Focus & Trade Lanes</h2>
                <p className="new-section-description">
                  We specialize in import freight forwarding from primary sourcing hubs: China, Vietnam,
                  Thailand, and Malaysia. Our destination focus is India — with operational emphasis on
                  Northern India ICDs, ports and final-mile delivery networks. Established vendor & carrier
                  relationships in Asia provide competitive freight rates and reliable space allocation.
                </p>
              </AnimatedDiv>
              <AnimatedDiv className="new-section-image" delay={0.3}>
                <img src="/Img123.png" alt="Future of Logistics" />
              </AnimatedDiv>
            </div>
          </div>
        </AnimatedSection>

        {/* Typical Clients Section */}
        <AnimatedSection className="who-we-serve-section">
          <div className="who-we-serve-container">
            <AnimatedTitle className="who-we-serve-title" delay={0.1}>Who We Serve</AnimatedTitle>
            <AnimatedText className="who-we-serve-subtitle" delay={0.2}>
              We partner with diverse businesses across industries to deliver tailored import freight solutions
            </AnimatedText>
            <StaggeredContainer className="clients-grid">
              <AnimatedCard className="client-card" delay={0.3}>
                <div className="client-icon">
                  <img src="/factory.png" alt="Manufacturing" />
                </div>
                <h3 className="client-title">Industrial Manufacturers</h3>
                <p className="client-description">Importing raw materials and components for production facilities across India.</p>
              </AnimatedCard>

              <AnimatedCard className="client-card" delay={0.4}>
                <div className="client-icon">
                  <img src="/dealing-property-trading.png" alt="Trading" />
                </div>
                <h3 className="client-title">Trading Houses & Distributors</h3>
                <p className="client-description">Bulk imports and nationwide distribution networks.</p>
              </AnimatedCard>

              <AnimatedCard className="client-card" delay={0.5}>
                <div className="client-icon">
                  <img src="/transport.png" alt="FMCG" />
                </div>
                <h3 className="client-title">FMCG & Retail Importers</h3>
                <p className="client-description">Fast-moving consumer goods and retail inventory management.</p>
              </AnimatedCard>

              <AnimatedCard className="client-card" delay={0.6}>
                <div className="client-icon">
                  <img src="/seller.png" alt="E-commerce" />
                </div>
                <h3 className="client-title">E-commerce Sellers</h3>
                <p className="client-description">Sample imports and product sourcing for online businesses.</p>
              </AnimatedCard>
            </StaggeredContainer>
          </div>
        </AnimatedSection>

        {/* Compliance & Systems Section */}
        <AnimatedSection className="about-section">
          <div className="about-container">
            <div className="about-content">
              <AnimatedTitle className="about-heading" delay={0.2}>Compliance & Systems</AnimatedTitle>
              <AnimatedTitle className="about-title" delay={0.3}>Fully Compliant & Technology-Enabled</AnimatedTitle>
              <AnimatedText className="about-description" delay={0.4}>
                We maintain full compliance with Indian customs documentation and regulatory requirements.
                Our processes include HS classification support, invoice & packing verification, and statutory
                filings. Digital shipment updates and document exchange ensure smoother workflows through
                email and portal-based systems.
              </AnimatedText>
              <StaggeredContainer className="about-features">
                <StaggeredItem className="feature-item">
                  <div className="feature-icon">📋</div>
                  <span>Indian Customs Compliance</span>
                </StaggeredItem>
                <StaggeredItem className="feature-item">
                  <div className="feature-icon">📊</div>
                  <span>HS Classification Support</span>
                </StaggeredItem>
                <StaggeredItem className="feature-item">
                  <div className="feature-icon">📱</div>
                  <span>Digital Shipment Updates</span>
                </StaggeredItem>
              </StaggeredContainer>
            </div>
            <AnimatedDiv className="about-image" delay={0.1}>
              <img src="/Img Content1.png" alt="Compliance Systems" />
            </AnimatedDiv>
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