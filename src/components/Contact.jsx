import React from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import './Contact.css';
import {
  AnimatedSection,
  AnimatedDiv,
  AnimatedCard,
  AnimatedTitle,
  AnimatedText,
  StaggeredContainer,
  StaggeredItem
} from './Animations';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-page">
        {/* Hero Section */}
        <AnimatedSection className="contact-hero-section">
          <div className="contact-hero-content">
            <AnimatedDiv variant={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              <h1 className="contact-hero-title">Get Your Quote Today</h1>
            </AnimatedDiv>
            <AnimatedDiv delay={0.2} variant={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              <p className="contact-hero-subtitle">Connect with our logistics experts for personalized freight forwarding solutions tailored to your business needs.</p>
            </AnimatedDiv>
            <AnimatedDiv delay={0.4} variant={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              <a href="#contact-form" className="contact-hero-cta-btn">Request Quote</a>
            </AnimatedDiv>
          </div>
        </AnimatedSection>

        {/* Contact Info Cards Section */}
        <AnimatedSection className="contact-info-cards-section">
          <div className="contact-info-cards-container">
            <AnimatedTitle className="contact-info-cards-title" delay={0.1}>Feel Free to connect we'll be happy to assist you</AnimatedTitle>
            <StaggeredContainer className="contact-cards-grid">
              <AnimatedCard className="contact-card" delay={0.2}>
                <div className="contact-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z" fill="white"/>
                  </svg>
                </div>
                <p className="contact-card-text">Tvara India Logistics Pvt. Ltd.<br />Plot No. 45, Sector 25,<br />Faridabad, Haryana 121004, India</p>
              </AnimatedCard>

              <AnimatedCard className="contact-card" delay={0.3}>
                <div className="contact-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="white"/>
                  </svg>
                </div>
                <p className="contact-card-text">info@tvaraindia.com</p>
              </AnimatedCard>

              <AnimatedCard className="contact-card" delay={0.4}>
                <div className="contact-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22S22 17.52 22 12S17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="white"/>
                  </svg>
                </div>
                <p className="contact-card-text">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat - Sun: 10:00 AM - 2:00 PM</p>
              </AnimatedCard>

              <AnimatedCard className="contact-card" delay={0.5}>
                <div className="contact-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="white"/>
                  </svg>
                </div>
                <p className="contact-card-text">+91-01234-567890</p>
              </AnimatedCard>
            </StaggeredContainer>
          </div>
        </AnimatedSection>

       

        {/* Contact Form Section */}
        <AnimatedSection className="contact-form-section">
          <div className="contact-form-container">
            <AnimatedDiv className="contact-form-left" delay={0.2}>
              <form className="contact-form">
                <AnimatedTitle className="contact-form-title" delay={0.1}>Your Details</AnimatedTitle>
                <div className="form-row">
                  <div className="form-group">
                    <div className="form-input-wrapper">
                      <svg className="form-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#6B7280"/>
                      </svg>
                      <input type="text" id="name" name="name" placeholder="Name" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-input-wrapper">
                      <svg className="form-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#6B7280"/>
                      </svg>
                      <input type="email" id="email" name="email" placeholder="Email" required />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <div className="form-input-wrapper">
                      <svg className="form-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="#6B7280"/>
                      </svg>
                      <input type="text" id="subject" name="subject" placeholder="Subject" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-input-wrapper">
                      <svg className="form-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#6B7280"/>
                      </svg>
                      <input type="tel" id="phone" name="phone" placeholder="Phone No" required />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-input-wrapper">
                    <svg className="form-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z" fill="#6B7280"/>
                    </svg>
                    <textarea id="message" name="message" rows="4" placeholder="Message" required></textarea>
                  </div>
                </div>

                <AnimatedDiv delay={0.3}>
                  <button type="submit" className="submit-btn">Contact Us</button>
                </AnimatedDiv>
              </form>
            </AnimatedDiv>
            <AnimatedDiv className="contact-form-right" delay={0.4}></AnimatedDiv>
          </div>
        </AnimatedSection>

        {/* Map Section */}
        <AnimatedSection className="map-section" delay={0.2}>
          <div className="map-container">
            <div className="map-content">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.1234567890!2d77.3167!3d28.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc1234567890%3A0x1234567890abcdef!2sSector%2025%2C%20Faridabad%2C%20Haryana%20121004!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin&markers=color:red%7C28.4089,77.3167"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tvara India Logistics Location"
              ></iframe>
            </div>
          </div>
        </AnimatedSection>

       
      </div>
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Contact;
