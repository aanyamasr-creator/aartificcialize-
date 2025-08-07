import React from 'react';
import './ServicesSection.css';
import ServiceCard from './ServiceCard';

import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';
import card4 from '../assets/card4.jpg';
import card5 from '../assets/card5.jpg';
import card6 from '../assets/card6.jpg';

const services = [
  {
    title: 'AI Automation Services',
    description: 'Automate repetitive business tasks using AI workflows and ML/NLP-powered bots for human-like digital operations.',
    image: card1
  },
  {
    title: 'Generative AI Products',
    description: 'Deploy AI agents for support and use generative tools to create content, visuals, and assist with code.',
    image: card2
  },
  {
    title: 'Predictive Insights',
    description: 'Automate repetitive business tasks using AI workflows and ML/NLP-powered bots for human-like digital operations.',
    image: card3
  },
  {
    title: 'Custom AI Model Development',
    description: 'Develop and manage custom AI models with MLOps for language, vision, and multimodal tasks.',
    image: card4
  },
  {
    title: 'AI Consulting',
    description: 'Assess AI readiness, integrate solutions, train teams, and ensure responsible use with governance and compliance.',
    image: card5
  },
  {
    title: 'AI Managed Services',
    description: 'Provide AI tools as a subscription with ongoing support and SLA-backed performance for reliability and speed.',
    image: card6
  }
];

const ServicesSection = () => {
  return (
    
    <section className="services-section">
      <h2 className="services-main-title">"Next-Gen AI Services to Elevate Your Business"</h2>
      
      <div className="services-carousel">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;