import React from 'react';
import './Footer.css';
import logo from './logo.png';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { FaBehance, FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer-container">
      <hr className="footer-divider" />
      <div className="footer-top">
        <div className="footer-col footer-col-1 newsletter-section">
          <h3>Join a Newsletter</h3>
          <p className="newsletter-label">Your Email</p>
          <div className="newsletter-input-group">
            <input type="email" placeholder="Enter Your Email" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
          <div className="social-icons">
            <a href="#"><FaBehance /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        <div className="footer-col footer-col-2">
          <h3>Company</h3>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press & Media</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Sustainability</a></li>
          </ul>
        </div>

        <div className="footer-col footer-col-3">
          <h3>Support</h3>
          <ul className="footer-links">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Service Status</a></li>
          </ul>
        </div>

        <div className="footer-col footer-col-4">
          <h3>Aartificialize AI</h3>
          <p className="company-description">
            Transforming businesses with cutting-edge solutions that boost efficiency and drive innovation.
            With a proven track record in delivering impactful results, my expertise ensures you stay ahead of the curve.
          </p>
        </div>
      </div>
      
      

      <div className="footer-bottom">
        <div className="footer-logo-name-container">
          <img src={logo} alt="Aartificialize AI Logo" className="footer-logo" />
          
        </div>
        <div className="contact-info">
          <p className="contact-item"><HiOutlineMail /> sales@aartificialize.com</p>
          <p className="contact-item"><HiOutlinePhone /> +91 9413938079</p>
        </div>
      </div>

      <hr className="footer-divider" />

      <p className="copyright">Copyright 2024- by Aartificialize AI</p>
    </footer>
  );
};

export default Footer;