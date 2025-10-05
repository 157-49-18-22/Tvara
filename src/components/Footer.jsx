import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="footer-container">
        {/* Top Row */}
        <div className="footer-top">
          <div className="footer-left">
            <div className="footer-brand">
              <h3 className="brand-name">
                <span className="brand-tvara">tvara</span>
                <span className="brand-india">india</span>
              </h3>
            </div>
            <div className="footer-nav">
              <a href="/about" className="nav-link">About</a>
              <a href="/services" className="nav-link">Service</a>
              <a href="/contact" className="nav-link">FAQs</a>
            </div>
          </div>
          
          <div className="footer-right">
            <div className="newsletter-section">
              <p className="newsletter-text">
                Stay connected with the latest in logistics, supply chain innovations, and special service offers.
              </p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email Address" 
                  className="email-input"
                />
                <button className="subscribe-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <div className="legal-links">
              <a href="/privacy" className="legal-link">Privacy Policy</a>
              <a href="/terms" className="legal-link">Terms & Conditions</a>
              <a href="/legal" className="legal-link">Legal & Liability</a>
            </div>
            <div className="copyright">
              <p>© 2025 All Rights Reserved</p>
            </div>
          </div>
          
          <div className="footer-bottom-right">
            <div className="copyright">
              <p>© 2025 All Rights Reserved</p>
            </div>
            <div className="social-icons">
              <a href="#" className="social-icon facebook">f</a>
              <a href="#" className="social-icon twitter">X</a>
              <a href="#" className="social-icon instagram">in</a>
              <a href="#" className="social-icon linkedin">in</a>
            </div>
          </div>
         </div>
       </div>
     </footer>
    </div>
  );
};

export default Footer;
