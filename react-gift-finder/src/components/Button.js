import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
  text-transform: uppercase;
  letter-spacing: 1px;
  animation: pulse 2s infinite;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
    background: linear-gradient(135deg, #ff5252 0%, #d63031 100%);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;

const Button = ({ children, onClick, disabled, ...props }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
