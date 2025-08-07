import React from 'react';
import './WhyUsSection.css';
import whyUsImage from '../assets/why-us.svg';

const WhyUsSection = () => {
  return (
    <section className="why-us-section">
      <div className="why-us-container">
        <div className="why-us-text">
          <h2 className="why-us-title">Why Leading Enterprises Work With Us</h2>
          <div className="why-us-point">
            <h3 className="point-title">ZERO TRUST BY DESIGN</h3>
            <p className="point-description">Every deployment starts secure, scales secure.</p>
          </div>
          <div className="why-us-point">
            <h3 className="point-title">ENTERPRISE-READY STACK</h3>
            <p className="point-description">We integrate fast, with what you already use.</p>
          </div>
          <div className="why-us-point">
            <h3 className="point-title">CUSTOM AI ENGINEERING</h3>
            <p className="point-description">Built to your data. Trained on your use case.</p>
          </div>
          <div className="why-us-point">
            <h3 className="point-title">TACTICAL SUPPORT TEAMS</h3>
            <p className="point-description">Always-on expertise. No tickets. Just action.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;