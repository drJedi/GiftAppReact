import React from 'react';

const ChoiceCard = ({ image, description, onClick, selected }) => {
  // console.log('ChoiceCard image:', image);
  return (
    <div 
      className={`choice-card ${selected ? 'is-selected' : ''}`}
      onClick={onClick}
    >
      <img className="choice-card__image" src={image} alt={description} />
      <p className="choice-card__description">{description}</p>
    </div>
  );
};

export default ChoiceCard;