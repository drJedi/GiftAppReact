import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  padding: 2rem 1rem;
  color: white;
  animation: fadeIn 0.8s ease-out;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Znajdź idealny prezent</Title>
      <Subtitle>
        Podaruj wyjątkowy, spersonalizowany prezent, niepodobny do żadnego innego
      </Subtitle>
    </HeaderContainer>
  );
};

export default Header;
