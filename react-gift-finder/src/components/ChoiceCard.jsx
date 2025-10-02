import React from 'react';

const ChoiceCard = ({ image, description, onClick, selected, moduleName = "choice-card", globalName = "cp-inspiration:gift-selector" }) => {
  // console.log('ChoiceCard image:', image);
  const dataModLog = `${moduleName}#-1#${description}#${globalName}`;
  return (
    <div 
      className={`choice-card ${selected ? 'is-selected' : ''}`}
      onClick={onClick}
      data-mod-log={dataModLog}
    >
      <img className="choice-card__image" src={image} alt={description} />
      <p className="choice-card__description">{description}</p>
    </div>
  );
};

export default ChoiceCard;