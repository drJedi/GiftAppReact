import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  max-width: 200px;
  text-align: center;
  border: 3px solid transparent;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
    border-color: #667eea;
  }
  
  &:active {
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    max-width: 150px;
    padding: 1rem;
  }
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  
  ${Card}:hover & {
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
  line-height: 1.4;
  word-wrap: break-word;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ChoiceCard = ({ image, description, onClick, selected }) => {
  return (
    <Card 
      onClick={onClick}
      style={{
        borderColor: selected ? '#667eea' : 'transparent',
        backgroundColor: selected ? '#f8f9ff' : 'white'
      }}
    >
      <Image src={image} alt={description} />
      <Description>{description}</Description>
    </Card>
  );
};

export default ChoiceCard;
