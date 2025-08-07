import React from 'react';
import './LetsTalkSection.css';
import magicLogo from '../assets/magic-logo.png';
import calendarSvg from '../assets/calendar-svg.png';

const LetsTalkSection = () => {
  return (
    <section className="lets-talk-section">
      <h2 className="lets-talk-title">Let's Talk</h2>
      <div className="lets-talk-content">
        <div className="magic-logo-container">
          <img src={magicLogo} alt="The magic of AI" />
        </div>
        <h3 className="magic-text">The magic of AI<br />at your fingertips.</h3>
        <p className="magic-subtext">Achieve clear, impactful results<br />without the complexity.</p>
        <button className="try-for-free-btn">Try for free</button>
        <div className="calendar-svg-container">
          <img src={calendarSvg} alt="Calendar" className="calendar-svg" />
        </div>
      </div>
    </section>
  );
};

export default LetsTalkSection;