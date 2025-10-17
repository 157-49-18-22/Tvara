import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/" className="logo-link">
            <img 
              src="/logo.png" 
              alt="Tvara India Logo" 
              className="navbar-logo-img"
              style={{ height: '60px', width: 'auto' }}
            />
          </a>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="navbar-menu">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="/" className="navbar-link">Home</a>
            </li>
            <li className="navbar-item">
              <a href="/about" className="navbar-link">About Us</a>
            </li>
            <li className="navbar-item">
              <a href="/services" className="navbar-link">Services</a>
            </li>
            <li className="navbar-item">
              <a href="/contact" className="navbar-link">Contact Us</a>
            </li>
            
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="navbar-cta">
        
          <a href="/quote" className="cta-button">
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <button className="mobile-menu-close" onClick={toggleMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <ul className="mobile-menu-list">
          <li className="mobile-menu-item">
            <a href="/" className="mobile-menu-link" onClick={toggleMenu}>Home</a>
          </li>
          <li className="mobile-menu-item">
            <a href="/about" className="mobile-menu-link" onClick={toggleMenu}>About Us</a>
          </li>
          <li className="mobile-menu-item">
            <a href="/services" className="mobile-menu-link" onClick={toggleMenu}>Services</a>
          </li>
          <li className="mobile-menu-item">
            <a href="/contact" className="mobile-menu-link" onClick={toggleMenu}>Contact Us</a>
          </li>
          <li className="mobile-menu-item">
            <a href="/quote" className="mobile-menu-link cta-mobile" onClick={toggleMenu}>Get a Quote</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
