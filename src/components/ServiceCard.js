import React from 'react';
import './ServicesSection.css';

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="service-card">
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;