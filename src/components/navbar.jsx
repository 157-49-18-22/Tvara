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
            <span className="logo-tvara">tvar</span>
            <span className="logo-india">aindia</span>
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
            
          </ul>
        </div>

        {/* CTA Button */}
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
            <a href="/contact" className="mobile-menu-link" onClick={toggleMenu}>Contact</a>
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
