import React from 'react';
import TwoColumnCard from './TwoColumnCard';
import './CardGridSection.css';

const cardData = [
  {
    title: 'AI Automation Services',
    leftContent: [
      'Business Process Automation using AI workflows to automate repetitive tasks such as approvals, document parsing, CRM data entry, and lead management.',
      'RPA with AI uses bots powered by ML and NLP to perform human-like digital tasks.'
    ],
    title1:'Generative AI Products',
    rightContent: [
      'Deploy AI agents and assistants, including custom chatbots and voice agents, to handle customer interactions, internal queries, outbound calls, and IVR systems.',
      'Leverage generative AI tools to create marketing content, visuals, videos, and assist developers with code generation.'
    ]
  },
  {
    title: 'Predictive Insights',
    leftContent: [
      'Use machine learning to forecast sales, optimize inventory, analyze customer behavior, predict churn, and enhance operational efficiency.',
      'Deploy recommendation systems and risk analytics to drive personalization, reduce inefficiencies, and support smarter business decisions.'
    ],
    title1:'Custom AI Model Development',
    rightContent: [
      'Build and deploy custom AI models across language, vision, and multimodal tasks using enterprise data for domains like finance, healthcare, and manufacturing.',
      'Ensure seamless model operations with MLOps pipelines for deployment, monitoring, retraining, and version control.'
    ]
  },
  {
    title: 'AI Consulting',
    leftContent: [
      'Assess AI readiness, define strategy, and integrate custom AI solutions with existing tools like CRMS, ERPs, and data warehouses.',
      'Train teams on AI tools and ensure responsible use through governance and compliance.'
    ],
    title1:'AI Managed Services',
    rightContent: [
      'Offer AI tools like chatbots and analytics as a subscription service with ongoing support and maintenance.',
      'Ensure reliable performance with SLA-backed operations for uptime, speed, and responsiveness.'
    ]
  }
];

const CardGridSection = () => {
  return (
    <section className="card-grid-section">
      <h2 className="card-grid-title">"One Partner. Two Specialties. Infinite Control."</h2>
      <div className="card-grid-container">
        {cardData.map((data, index) => (
          <div key={index} className="two-column-row">
            <TwoColumnCard
              title={data.title}
              content={data.leftContent}
              isLeft={true}
            />
            <TwoColumnCard
              title={data.title1}
              content={data.rightContent}
              isLeft={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardGridSection;