import React from 'react';
import ChoiceCard from './ChoiceCard';

const QuestionStep = ({ 
  title, 
  choices, 
  onChoiceSelect, 
  selectedChoice, 
  step, 
  totalSteps 
}) => {
  const progress = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    
    <div className="question">
      <div className="question__progress">
        <div className="question__progressFill" style={{ width: `${progress}%` }} />
      </div>
      
      <h2 className="question__title">{title}</h2>
      
      <div className="question__grid">
        {choices.map((choice, index) => (
          <ChoiceCard
            key={index}
            image={choice.src || choice.image}
            description={choice.description || choice.name}
            onClick={() => onChoiceSelect(choice.description || choice.name)}
            selected={selectedChoice === (choice.description || choice.name)}
            
          />
          
        ))}
        
      </div>
      
    </div>
  );
};

export default QuestionStep;
