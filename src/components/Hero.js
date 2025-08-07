import React from 'react';
import '../App.css';
import { ReactComponent as AartificializeAISVG } from '../assets/AartificializeAI.svg';

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero-title-main">Unstoppable AI. Unbreakable Security.</h1>

      <div className="hero-background-svg">
        <AartificializeAISVG />
      </div>

      <div className="hero-description-container">
        <p className="hero-description">
          Transform Workflows, Amplify Efficiency:  <span className="hero-description-white">with Al, Chatbots, and Voicebots</span>
        </p>
      </div>
      

      <div className="hero-buttons">
        <button className="btn btn-primary">Let's Talk</button>
        <button className="btn btn-secondary">View Schedule</button>
      </div>
      <div className="explore-section">
        <p>Explore</p>
        <span className="explore-arrow"></span>
      </div>
    </div>
  );
};

export default Hero;