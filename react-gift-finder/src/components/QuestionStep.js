import React from 'react';
import styled from 'styled-components';
import ChoiceCard from './ChoiceCard';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  animation: slideIn 0.5s ease-out;
`;

const QuestionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ChoicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  justify-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  max-width: 400px;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  margin: 0 auto 2rem;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #ff6b6b, #667eea);
  border-radius: 4px;
  transition: width 0.3s ease;
  width: ${props => props.progress}%;
`;

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
    <Container>
      <ProgressBar>
        <ProgressFill progress={progress} />
      </ProgressBar>
      
      <QuestionTitle>{title}</QuestionTitle>
      
      <ChoicesGrid>
        {choices.map((choice, index) => (
          <ChoiceCard
            key={index}
            image={choice.src || choice.image}
            description={choice.description || choice.name}
            onClick={() => onChoiceSelect(choice.description || choice.name)}
            selected={selectedChoice === (choice.description || choice.name)}
          />
        ))}
      </ChoicesGrid>
    </Container>
  );
};

export default QuestionStep;
