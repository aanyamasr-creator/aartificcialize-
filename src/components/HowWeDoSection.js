import React from 'react';
import ProcessCard from './ProcessCard';
import './HowWeDoSection.css';
import instagramLogo from '../assets/instagram.png';
import twitterLogo from '../assets/x.png';
import crmLogo from '../assets/crm.png';
import linkedinLogo from '../assets/linkedin.png';
import whatsappLogo from '../assets/whatsapp.png';
import notionLogo from '../assets/notion.png';
import sheetsLogo from '../assets/sheets.png';
import storeLogo from '../assets/store.png';
import teamsLogo from '../assets/teams.png';

const discoveryContent = [
  'Together, we dive into your world. A brainstorming session where your challenges meet our creative thinking.',
  'We learn from you',
  ' Identify Your Painpoints',
  ' Uncover opportunities',
];

const analysisContent = [
  'We craft a tailored action plan that aligns with your budget and requirements - No guesswork, Just solutions.',
  'We build for you:',
  ' Identify Your Painpoints',
  ' Uncover opportunities',
];

const executionContent = [
  'It\'s go time. Our team gets to work, setting plans into motion, turning ideas into real-world impact.',
  'We keep you looped:',
  ' Regular status calls',
  ' Open line of communication',
];

const HowWeDoSection = () => {
  return (
    <section className="how-we-do-section">
      <h2 className="how-we-do-title">How we do</h2>
      <div className="process-cards-container">
        <div className="card-and-button-container">
          <ProcessCard
            step="STEP 01"
            title="DISCOVERY"
            content={discoveryContent}
          />
          <button className="learn-more-btn">LEARN MORE</button>
        </div>
        <div className="card-and-button-container">
          <ProcessCard
            step="STEP 02"
            title="ANALYSIS"
            content={analysisContent}
          />
          <button className="learn-more-btn">LEARN MORE</button>
        </div>
        <div className="card-and-button-container">
          <ProcessCard
            step="STEP 03"
            title="EXECUTION"
            content={executionContent}
          />
          <button className="learn-more-btn">LEARN MORE</button>
        </div>
      </div>

      <div className="seamless-integration-banner">
        <div className="integration-text">
          SEEMLESS INTEGRATION:
        </div>
        <div className="integration-logos-row">
          <div className="logo-with-name">
            <img src={instagramLogo} alt="Instagram" />
            <p>INSTAGRAM</p>
          </div>
          <div className="logo-with-name">
            <img src={twitterLogo} alt="X.com" />
            <p>X.COM</p>
          </div>
          <div className="logo-with-name">
            <img src={sheetsLogo} alt="Sheets" />
            <p>SHEETS</p>
          </div>
          <div className="logo-with-name">
            <img src={linkedinLogo} alt="Linkedin" />
            <p>LINKEDIN</p>
          </div>
          <div className="logo-with-name">
            <img src={crmLogo} alt="CRM" />
            <p>CRM</p>
          </div>
          <div className="logo-with-name">
            <img src={teamsLogo} alt="Teams" />
            <p>TEAMS</p>
          </div>
          <div className="logo-with-name">
            <img src={whatsappLogo} alt="Whatsapp" />
            <p>WHATSAPP</p>
          </div>
          <div className="logo-with-name">
            <img src={storeLogo} alt="Store" />
            <p>ONLINE STORE</p>
          </div>
          <div className="logo-with-name">
            <img src={notionLogo} alt="Notion" />
            <p>NOTION</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoSection;