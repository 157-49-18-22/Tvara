import React from 'react';
import Navbar from './navbar';
import Testi from './Testi';
import Footer from './Footer';
import './Homepage.css';
import {
  AnimatedSection,
  AnimatedDiv,
  AnimatedCard,
  AnimatedTitle,
  AnimatedText,
  StaggeredContainer,
  StaggeredItem
} from './Animations';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="homepage">
        {/* Hero Section */}
        <AnimatedSection className="hero-section">
          <div className="hero-content">
            <AnimatedDiv variant={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              <h1 className="hero-title">Moving your world with speed and reliability</h1>
            </AnimatedDiv>
            <AnimatedDiv delay={0.2} variant={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              <p className="hero-subtitle">From sea to sky, we connect your business to the world with secure and seamless logistics.</p>
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
              <img src="/Img Content.png" alt="Warehouse and logistics" />
            </AnimatedDiv>
            <div className="about-content">
              <AnimatedTitle className="about-heading" delay={0.2}>About Us</AnimatedTitle>
              <AnimatedTitle className="about-title" delay={0.3}>Your Logistics Partner Beyond Borders</AnimatedTitle>
              <AnimatedText className="about-description" delay={0.4}>
                We are more than just freight forwarders—we are your partners in global trade.
                With a strong network, advanced technology, and years of expertise, we ensure
                every shipment reaches its destination on time, safely, and efficiently.
              </AnimatedText>
              <StaggeredContainer className="about-features">
                <StaggeredItem className="feature-item">
                  <div className="feature-icon">
                    <img src="/icon98.png" alt="Swift Air Cargo Background" />
                  </div>
                  <span>Global Network & Expertise</span>
                </StaggeredItem>
                <StaggeredItem className="feature-item">
                  <div className="feature-icon">
                    <img src="/icon99.png" alt="Swift Air Cargo Background" />
                  </div>
                  <span>Real-Time Tracking & Support</span>
                </StaggeredItem>
              </StaggeredContainer>
              <AnimatedDiv delay={0.6}>
                <a href="/about" className="learn-more-btn">Learn More</a>
              </AnimatedDiv>
            </div>
          </div>
        </AnimatedSection>

        {/* Solutions Section */}
        <AnimatedSection className="solutions-section">
          <div className="solutions-container">
            <AnimatedTitle className="solutions-title" delay={0.1}>
              <span className="blue-text">Solutions</span> <span className="dark-text">That Keep You Moving</span>
            </AnimatedTitle>
            <StaggeredContainer className="solutions-grid">
              <AnimatedCard className="solution-card" delay={0.2}>
                <div className="card-background">
                  <img src="/img.png" alt="Swift Air Cargo Background" className="card-bg-image" />
                  <div className="card-icon">
                    <img src="/icon.png" alt="Airplane Icon" />
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="solution-card-title">Swift Air Cargo</h3>
                  <p className="solution-description">
                    Fast, secure, and flexible air cargo solutions for time-sensitive shipments worldwide.
                  </p>
                  <a href="/air-cargo" className="read-more-btn">Read More →</a>
                </div>
              </AnimatedCard>

              <AnimatedCard className="solution-card" delay={0.3}>
                <div className="card-background">
                  <img src="/img (1).png" alt="Sea Freight Background" className="card-bg-image" />
                  <div className="card-icon">
                    <img src="/icon (1).png" alt="Ship Icon" />
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="solution-card-title">Sea Freight</h3>
                  <p className="solution-description">
                    Cost-efficient FCL and LCL services with reliable global carrier partnerships.
                  </p>
                  <a href="/sea-freight" className="read-more-btn">Read More →</a>
                </div>
              </AnimatedCard>

              <AnimatedCard className="solution-card" delay={0.4}>
                <div className="card-background">
                  <img src="/img (2).png" alt="Land Transport Background" className="card-bg-image" />
                  <div className="card-icon">
                    <img src="/icon (2).png" alt="Truck Icon" />
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="solution-card-title">Land Transport</h3>
                  <p className="solution-description">
                    Seamless trucking and rail networks connecting ports to final destinations.
                  </p>
                  <a href="/land-transport" className="read-more-btn">Read More →</a>
                </div>
              </AnimatedCard>

              <AnimatedCard className="solution-card" delay={0.5}>
                <div className="card-background">
                  <img src="/img (3).png" alt="Warehousing Background" className="card-bg-image" />
                  <div className="card-icon">
                    <img src="/icon (3).png" alt="Warehouse Icon" />
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="solution-card-title">Warehousing</h3>
                  <p className="solution-description">
                    Scalable storage with real-time inventory management and distribution support.
                  </p>
                  <a href="/warehousing" className="read-more-btn">Read More →</a>
                </div>
              </AnimatedCard>
            </StaggeredContainer>
          </div>
        </AnimatedSection>

        {/* Section 4 */}
        <AnimatedSection className="section-4">
          <div className="section-4-container">
            <AnimatedDiv delay={0.2}>
              <img src="/Section 4.png" alt="Section 4" className="section-4-image" />
            </AnimatedDiv>
          </div>
        </AnimatedSection>

        {/* Why Ship With Us Section */}
        <AnimatedSection className="why-ship-section">
          <div className="why-ship-container">
            <div className="why-ship-content">
              <AnimatedTitle className="why-ship-title" delay={0.1}>Why Ship With Us?</AnimatedTitle>

              <StaggeredContainer className="benefits-list">
                <StaggeredItem className="benefit-item">
                  <div className="benefit-icon"><img src="/icon12.png" alt="Swift Air Cargo Background" /></div>
                  <div className="benefit-text">
                    <h3 className="benefit-title">End-to-End Visibility</h3>
                    <p className="benefit-description">
                      From pickup to delivery, monitor every step of your shipment journey with ease.
                    </p>
                  </div>
                </StaggeredItem>

                <StaggeredItem className="benefit-item">
                  <div className="benefit-icon"><img src="/icon13.png" alt="Swift Air Cargo Background" /></div>
                  <div className="benefit-text">
                    <h3 className="benefit-title">Risk-Free Handling</h3>
                    <p className="benefit-description">
                      Insured cargo and secure packaging ensure your goods always arrive safely.
                    </p>
                  </div>
                </StaggeredItem>

                <StaggeredItem className="benefit-item">
                  <div className="benefit-icon"><img src="/icon14.png" alt="Swift Air Cargo Background" /></div>
                  <div className="benefit-text">
                    <h3 className="benefit-title">Scalable Solutions</h3>
                    <p className="benefit-description">
                      Logistics tailored to fit small businesses or enterprise-level global trade.
                    </p>
                  </div>
                </StaggeredItem>
              </StaggeredContainer>
            </div>

            <AnimatedDiv className="why-ship-image" delay={0.3}>
              <img src="/Rectangle 1.png" alt="Logistics Illustration" className="logistics-image" />
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

export default Homepage;
