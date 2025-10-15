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
              <h1 className="hero-title">Your Trusted Import Freight Partner from Asia to India</h1>
            </AnimatedDiv>
            <AnimatedDiv delay={0.2} variant={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              <p className="hero-subtitle">Backed by 25 years of logistics expertise, we specialize in import freight forwarding from China, Vietnam, Thailand & Malaysia to India.</p>
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
              <AnimatedTitle className="about-title" delay={0.3}>25 Years of Import Excellence</AnimatedTitle>
              <AnimatedText className="about-description" delay={0.4}>
                Tvara Freight Solutions Pvt. Ltd. is a specialist import freight forwarder based in Northern India.
                With 2½ decades of logistics experience, we focus exclusively on import freight forwarding from
                China, Vietnam, Thailand and Malaysia into India. Our deep roots in customs clearance and multi-modal
                logistics deliver reliable, cost-efficient, end-to-end import solutions.
              </AnimatedText>
              <StaggeredContainer className="about-features">
                <StaggeredItem className="feature-item">
                  <div className="feature-icon">
                    <img src="/icon98.png" alt="Import Expertise" />
                  </div>
                  <span>25 Years Import Experience</span>
                </StaggeredItem>
                <StaggeredItem className="feature-item">
                  <div className="feature-icon">
                    <img src="/icon99.png" alt="Customs Clearance" />
                  </div>
                  <span>Expert Customs Clearance Since 2006</span>
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
              <span className="blue-text">Import Services</span> <span className="dark-text">Tailored for Your Business</span>
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
                  <h3 className="solution-card-title">Import Air Freight</h3>
                  <p className="solution-description">
                    Consolidated and express air freight imports from Asia to India for time-sensitive cargo.
                  </p>
                  <a href="/services" className="read-more-btn">Read More →</a>
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
                  <h3 className="solution-card-title">Import Ocean Freight</h3>
                  <p className="solution-description">
                    FCL/LCL door-to-door and port-to-port import solutions from China, Vietnam, Thailand & Malaysia.
                  </p>
                  <a href="/services" className="read-more-btn">Read More →</a>
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
                  <h3 className="solution-card-title">Customs Clearance</h3>
                  <p className="solution-description">
                    Expert customs brokerage, documentation, duty assessment and statutory compliance since 2006.
                  </p>
                  <a href="/services" className="read-more-btn">Read More →</a>
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
                  <h3 className="solution-card-title">Inland Haulage</h3>
                  <p className="solution-description">
                    Coordinated delivery to ICDs and final consignee locations across Northern India.
                  </p>
                  <a href="/services" className="read-more-btn">Read More →</a>
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
              <AnimatedTitle className="why-ship-title" delay={0.1}>Why Choose Tvara?</AnimatedTitle>

              <StaggeredContainer className="benefits-list">
                <StaggeredItem className="benefit-item">
                  <div className="benefit-icon"><img src="/icon12.png" alt="Experience" /></div>
                  <div className="benefit-text">
                    <h3 className="benefit-title">25 Years of Proven Track Record</h3>
                    <p className="benefit-description">
                      Cumulative industry experience across customs clearance and freight forwarding since 2006.
                    </p>
                  </div>
                </StaggeredItem>

                <StaggeredItem className="benefit-item">
                  <div className="benefit-icon"><img src="/icon13.png" alt="Regulatory Expertise" /></div>
                  <div className="benefit-text">
                    <h3 className="benefit-title">Deep Regulatory Expertise</h3>
                    <p className="benefit-description">
                      Expert knowledge of Indian customs procedures, documentation and compliance.
                    </p>
                  </div>
                </StaggeredItem>

                <StaggeredItem className="benefit-item">
                  <div className="benefit-icon"><img src="/icon14.png" alt="Import Focus" /></div>
                  <div className="benefit-text">
                    <h3 className="benefit-title">Dedicated Import Focus</h3>
                    <p className="benefit-description">
                      Structured solely for import freight forwarding with sharper processes and cost control.
                    </p>
                  </div>
                </StaggeredItem>

                <StaggeredItem className="benefit-item">
                  <div className="benefit-icon"><img src="/icon12.png" alt="Vendor Network" /></div>
                  <div className="benefit-text">
                    <h3 className="benefit-title">Established Vendor & Carrier Relationships</h3>
                    <p className="benefit-description">
                      Strong partnerships in Asia providing competitive freight rates and reliable space allocation.
                    </p>
                  </div>
                </StaggeredItem>

                <StaggeredItem className="benefit-item">
                  <div className="benefit-icon"><img src="/icon13.png" alt="Transparent Pricing" /></div>
                  <div className="benefit-text">
                    <h3 className="benefit-title">Transparent Pricing & Detailed Quotations</h3>
                    <p className="benefit-description">
                      Clear breakups for ocean/air, destination charges, inland haulage and customs.
                    </p>
                  </div>
                </StaggeredItem>

                <StaggeredItem className="benefit-item">
                  <div className="benefit-icon"><img src="/icon14.png" alt="Customer Service" /></div>
                  <div className="benefit-text">
                    <h3 className="benefit-title">Customer-Centric Service</h3>
                    <p className="benefit-description">
                      Proactive communication, shipment tracking and problem resolution at every step.
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
