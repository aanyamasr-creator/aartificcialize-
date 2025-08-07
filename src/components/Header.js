import React, { useState } from 'react';
import './Header.css';
import logo from './logo.png'; // Assuming logo.png is in the same folder

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Aartificialize AI Logo" className="logo" />
      </div>

      <button className="hamburger-menu" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </button>

      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <a href="#services">Our Services</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#process">Our Process</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;
