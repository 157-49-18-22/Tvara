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
              <h1 className="hero-title3">Specialist Import Freight Solutions from Asia to India</h1>
            </AnimatedDiv>
            <AnimatedDiv delay={0.2} variant={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              <p className="hero-subtitle">End-to-end import freight forwarding from China, Vietnam, Thailand & Malaysia to India. Ocean, air, customs clearance, and inland delivery — all handled seamlessly.</p>
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
                <AnimatedTitle className="why-businesses-title" delay={0.1}>Why Importers Choose Tvara</AnimatedTitle>
                <AnimatedText className="why-businesses-subtitle" delay={0.2}>25 years of import expertise, deep customs knowledge, and dedicated focus on Asia-India trade lanes.</AnimatedText>
              </div>

              <StaggeredContainer className="trust-cards-section">
                <div className="trust-cards-grid">
                  <AnimatedCard className="trust-card" delay={0.3}>
                    <div className="trust-icon"><img src="/basil_globe-outline.png" alt="Asia Network" /></div>
                    <h3 className="trust-card-title">Asia Network</h3>
                    <p className="trust-card-description">Established vendor & carrier relationships in China, Vietnam, Thailand & Malaysia.</p>
                  </AnimatedCard>

                  <AnimatedCard className="trust-card" delay={0.4}>
                    <div className="trust-icon"><img src="/Group.png" alt="Customs Expertise" /></div>
                    <h3 className="trust-card-title">Customs Expertise</h3>
                    <p className="trust-card-description">Deep knowledge of Indian customs procedures, documentation and compliance since 2006.</p>
                  </AnimatedCard>

                  <AnimatedCard className="trust-card" delay={0.5}>
                    <div className="trust-icon"><img src="/Group (1).png" alt="Import Focus" /></div>
                    <h3 className="trust-card-title">Import Focus</h3>
                    <p className="trust-card-description">Structured solely for import freight forwarding with sharper processes and cost control.</p>
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
                <AnimatedTitle className="service-title" delay={0.2}>Import Air Freight</AnimatedTitle>
                <AnimatedText className="service-description" delay={0.3}>Consolidated and express air freight imports from Asia to India for time-sensitive cargo with priority handling.</AnimatedText>
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
                <AnimatedTitle className="service-title" delay={0.6}>Import Ocean Freight (FCL/LCL)</AnimatedTitle>
                <AnimatedText className="service-description" delay={0.7}>Door-to-door and port-to-port import solutions from China, Vietnam, Thailand & Malaysia with competitive rates.</AnimatedText>
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
                <AnimatedTitle className="service-title" delay={0.2}>Inland Haulage & Multimodal Transport</AnimatedTitle>
                <AnimatedText className="service-description" delay={0.3}>Coordinated delivery to ICDs and final consignee locations across Northern India with multi-modal options.</AnimatedText>
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
                <AnimatedTitle className="service-title" delay={0.6}>Customs Clearance & Brokerage</AnimatedTitle>
                <AnimatedText className="service-description" delay={0.7}>Documentation, duty assessment and statutory compliance handled by experienced clearance teams since 2006.</AnimatedText>
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
                <AnimatedTitle className="service-title" delay={0.2}>Container & Cargo Consolidation</AnimatedTitle>
                <AnimatedText className="service-description" delay={0.3}>Groupage, FCL consolidation, and shipment planning to optimize cost and efficiency.</AnimatedText>
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
                <AnimatedTitle className="service-title" delay={0.6}>Cargo Insurance & Claims Support</AnimatedTitle>
                <AnimatedText className="service-description" delay={0.7}>Advisory and assistance with cargo insurance claims to protect your shipments.</AnimatedText>
              </div>
              <AnimatedDiv className="service-image-right" delay={0.8}>
                <img src="/img81.png" alt="Multimodal Transport" />
              </AnimatedDiv>
            </StaggeredContainer>
          </div>
        </AnimatedSection>

        {/* Additional Services Section - Vendor Coordination & Project Cargo */}
        <AnimatedSection className="services-section">
          <div className="services-container">
            {/* Vendor Coordination Service */}
            <StaggeredContainer className="service-card-air">
              <AnimatedDiv className="service-image-left" delay={0.1}>
                <img src="/img87.png" alt="Vendor Coordination" />
              </AnimatedDiv>
              <div className="service-content-center">
                <AnimatedTitle className="service-title" delay={0.2}>Vendor Coordination & Supply-chain Visibility</AnimatedTitle>
                <AnimatedText className="service-description" delay={0.3}>Shipment tracking, vendor follow-up and milestone reporting for complete supply chain transparency.</AnimatedText>
              </div>
              <AnimatedDiv className="service-image-right" delay={0.4}>
                <img src="/img78.png" alt="Supply Chain" />
              </AnimatedDiv>
            </StaggeredContainer>

            {/* Project Cargo Service */}
            <StaggeredContainer className="service-card-ocean">
              <AnimatedDiv className="service-image-left" delay={0.5}>
                <img src="/img71.png" alt="Project Cargo" />
              </AnimatedDiv>
              <div className="service-content-center">
                <AnimatedTitle className="service-title" delay={0.6}>Project & Oversized Cargo Handling</AnimatedTitle>
                <AnimatedText className="service-description" delay={0.7}>Specialized equipment and permit handling for oversized and project cargo shipments.</AnimatedText>
              </div>
              <AnimatedDiv className="service-image-right" delay={0.8}>
                <img src="/img81.png" alt="Heavy Cargo" />
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
