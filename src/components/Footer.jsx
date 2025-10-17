import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xrbyjyla', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="footer-container">
          {/* Top Row */}
          <div className="footer-top">
            <div className="footer-left">
              <div className="footer-brand">
                <img 
                  src="/logo.png" 
                  alt="Tvara India Logo" 
                  className="footer-logo"
                  style={{ maxWidth: '150px', height: 'auto' }}
                />
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
                  Stay connected with the latest in import freight forwarding, Asia-India trade updates, and special service offers.
                </p>
                <form onSubmit={handleSubmit} className="newsletter-form">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email Address"
                    className="email-input"
                    required
                  />
                  <button 
                    type="submit" 
                    className="subscribe-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
                {isSubmitted && (
                  <p className="success-message">Thank you for subscribing!</p>
                )}
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
        
            </div>
            <div className="social-icons">
              <a href="#" className="social-icon facebook">f</a>
              <a href="#" className="social-icon twitter">X</a>
              <a href="#" className="social-icon instagram">in</a>
              <a href="#" className="social-icon linkedin">in</a>
            </div>
          </div>
         </div>
         
         {/* Crafted By */}
         <div className="footer-crafted">
           <p>Crafted by Maydiv Infotech</p>
         </div>
       </div>
     </footer>
    </div>
  );
};

export default Footer;
