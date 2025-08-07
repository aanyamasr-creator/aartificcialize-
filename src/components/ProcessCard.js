import React from 'react';
import './HowWeDoSection.css';

const ProcessCard = ({ step, title, content }) => {
  return (
    <div className="process-card">
      <div className="card-header">
        <span className="step">{step}</span> - <span className="title">{title}</span>
      </div>
      <div className="card-content">
        <p>{content[0]}</p>
        <p className="content-title">{content[1]}</p>
        <ul>
          {content.slice(2).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProcessCard;