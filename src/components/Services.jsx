import React from 'react';
import Navbar from './navbar';
import Testi from './Testi';
import Footer from './Footer';
import './Services.css';
import {
  AnimatedSection,
  AnimatedDiv,
  AnimatedCard,
  AnimatedTitle,
  AnimatedText,
  StaggeredContainer,
  StaggeredItem
} from './Animations';

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="services-page">
        {/* Hero Section */}
        <AnimatedSection className="hero-section2">
          <div className="hero-content">
            <AnimatedDiv variant={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              <h1 className="hero-title3">Your Trusted Partner in Global Trade</h1>
            </AnimatedDiv>
            <AnimatedDiv delay={0.2} variant={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              <p className="hero-subtitle">Providing end-to-end freight forwarding solutions across air, sea, and land, ensuring your shipments reach every corner of the world safely, on time, and efficiently.</p>
            </AnimatedDiv>
            <AnimatedDiv delay={0.4} variant={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              <a href="/quote" className="hero-cta-btn">Get a Quote</a>
            </AnimatedDiv>
          </div>
        </AnimatedSection>

        {/* Why Businesses Trust Us Section */}
        <AnimatedSection className="why-businesses-trust-section">
          <div className="why-businesses-container">
            <div className="trust-content-wrapper">
              <div className="trust-text-section">
                <AnimatedTitle className="why-businesses-title" delay={0.1}>Why Businesses Trust Us</AnimatedTitle>
                <AnimatedText className="why-businesses-subtitle" delay={0.2}>Reliable, innovative, and customer-focused logistics solutions designed to move your business forward.</AnimatedText>
              </div>

              <StaggeredContainer className="trust-cards-section">
                <div className="trust-cards-grid">
                  <AnimatedCard className="trust-card" delay={0.3}>
                    <div className="trust-icon"><img src="/basil_globe-outline.png" alt="Swift Air Cargo Background" /></div>
                    <h3 className="trust-card-title">Global Network</h3>
                    <p className="trust-card-description">Seamless import and export services across 50+ countries with trusted partners.</p>
                  </AnimatedCard>

                  <AnimatedCard className="trust-card" delay={0.4}>
                    <div className="trust-icon"><img src="/Group.png" alt="Swift Air Cargo Background" /></div>
                    <h3 className="trust-card-title">On-Time Delivery</h3>
                    <p className="trust-card-description">Efficient logistics operations ensure your shipments reach their destination safely and on schedule.</p>
                  </AnimatedCard>

                  <AnimatedCard className="trust-card" delay={0.5}>
                    <div className="trust-icon"><img src="/Group (1).png" alt="Swift Air Cargo Background" /></div>
                    <h3 className="trust-card-title">Advanced Technology</h3>
                    <p className="trust-card-description">Real-time tracking, digital dashboards, and tech-driven logistics for transparency and control.</p>
                  </AnimatedCard>
                </div>
              </StaggeredContainer>
            </div>
          </div>
        </AnimatedSection>

        {/* Services Section - Air Freight & Ocean Freight */}
        <AnimatedSection className="services-section">
          <div className="services-container">
            {/* Air Freight Service */}
            <StaggeredContainer className="service-card-air">
              <AnimatedDiv className="service-image-left" delay={0.1}>
                <img src="/imges.png" alt="Air Freight" />
              </AnimatedDiv>
              <div className="service-content-center">
                <AnimatedTitle className="service-title" delay={0.2}>Air Freight</AnimatedTitle>
                <AnimatedText className="service-description" delay={0.3}>Rapid global air cargo for time-sensitive shipments, with flexible flight options and priority handling.</AnimatedText>
              </div>
              <AnimatedDiv className="service-image-right" delay={0.4}>
                <img src="/imges1.png" alt="Ocean Freight" />
              </AnimatedDiv>
            </StaggeredContainer>

            {/* Ocean Freight Service */}
            <StaggeredContainer className="service-card-ocean">
              <AnimatedDiv className="service-image-left" delay={0.5}>
                <img src="/img23.png" alt="Air Freight" />
              </AnimatedDiv>
              <div className="service-content-center">
                <AnimatedTitle className="service-title" delay={0.6}>Ocean Freight</AnimatedTitle>
                <AnimatedText className="service-description" delay={0.7}>Cost-efficient sea freight, both Full Container Load (FCL) and Less Container Load (LCL) via trusted carriers.</AnimatedText>
              </div>
              <AnimatedDiv className="service-image-right" delay={0.8}>
                <img src="/img32.png" alt="Ocean Freight" />
              </AnimatedDiv>
            </StaggeredContainer>
          </div>
        </AnimatedSection>

        {/* Additional Services Section - Land Transport & Customs Clearance */}
        <AnimatedSection className="services-section">
          <div className="services-container">
            {/* Land / Road Transport Service */}
            <StaggeredContainer className="service-card-air">
              <AnimatedDiv className="service-image-left" delay={0.1}>
                <img src="/img89.png" alt="Land Transport" />
              </AnimatedDiv>
              <div className="service-content-center">
                <AnimatedTitle className="service-title" delay={0.2}>Land / Road Transport</AnimatedTitle>
                <AnimatedText className="service-description" delay={0.3}>Reliable trucking and road logistics connecting ports to inland locations seamlessly.</AnimatedText>
              </div>
              <AnimatedDiv className="service-image-right" delay={0.4}>
                <img src="/img98.png" alt="Road Transport" />
              </AnimatedDiv>
            </StaggeredContainer>

            {/* Customs Clearance Service */}
            <StaggeredContainer className="service-card-ocean">
              <AnimatedDiv className="service-image-left" delay={0.5}>
                <img src="/img00.png" alt="Customs Clearance" />
              </AnimatedDiv>
              <div className="service-content-center">
                <AnimatedTitle className="service-title" delay={0.6}>Customs Clearance</AnimatedTitle>
                <AnimatedText className="service-description" delay={0.7}>Expert handling of import/export formalities, duties, and compliance to ensure fast clearance.</AnimatedText>
              </div>
              <AnimatedDiv className="service-image-right" delay={0.8}>
                <img src="/img01.png" alt="Customs Processing" />
              </AnimatedDiv>
            </StaggeredContainer>
          </div>
        </AnimatedSection>

        {/* Additional Services Section - Warehousing & Multimodal Solutions */}
        <AnimatedSection className="services-section">
          <div className="services-container">
            {/* Warehousing Service */}
            <StaggeredContainer className="service-card-air">
              <AnimatedDiv className="service-image-left" delay={0.1}>
                <img src="/img87.png" alt="Warehousing" />
              </AnimatedDiv>
              <div className="service-content-center">
                <AnimatedTitle className="service-title" delay={0.2}>Warehousing</AnimatedTitle>
                <AnimatedText className="service-description" delay={0.3}>Secure storage, inventory management, and last-mile distribution services.</AnimatedText>
              </div>
              <AnimatedDiv className="service-image-right" delay={0.4}>
                <img src="/img78.png" alt="Warehouse Operations" />
              </AnimatedDiv>
            </StaggeredContainer>

            {/* Multimodal Solutions Service */}
            <StaggeredContainer className="service-card-ocean">
              <AnimatedDiv className="service-image-left" delay={0.5}>
                <img src="/img71.png" alt="Multimodal Solutions" />
              </AnimatedDiv>
              <div className="service-content-center">
                <AnimatedTitle className="service-title" delay={0.6}>Multimodal Solutions</AnimatedTitle>
                <AnimatedText className="service-description" delay={0.7}>Combined transport options (air + sea + road) to optimize cost, speed, and reliability.</AnimatedText>
              </div>
              <AnimatedDiv className="service-image-right" delay={0.8}>
                <img src="/img81.png" alt="Multimodal Transport" />
              </AnimatedDiv>
            </StaggeredContainer>
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

export default Services;
