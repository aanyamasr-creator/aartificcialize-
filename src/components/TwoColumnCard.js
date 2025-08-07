import React from 'react';
import './CardGridSection.css';

const TwoColumnCard = ({ title, content, isLeft }) => {
  const cardClass = isLeft ? 'two-column-card left-card' : 'two-column-card right-card';
  const titleColor = isLeft ? 'purple-title' : 'red-title';

  return (<>
    <div className={cardClass}>
      <h3 className={`card-grid-item-title ${titleColor}`}>{title}</h3>
      <ul className="card-grid-item-list">
        {content.map((item, index) => (
          <><li key={index}>{item}</li><br /></>
          
        ))}
      </ul>
      <button className="explore-button">Explore &gt;&gt;</button>
    </div></>
  );
};

export default TwoColumnCard;