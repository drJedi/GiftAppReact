import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import Button from './Button';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  animation: fadeIn 0.8s ease-out;
`;

const ResultsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ResultsSubtitle = styled.p`
  font-size: 1.2rem;
  color: white;
  text-align: center;
  margin-bottom: 3rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  justify-items: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }
`;

const NoProductsMessage = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  color: white;
  font-size: 1.2rem;
  margin: 2rem 0;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const ResultsStep = ({ products, onReset }) => {
  return (
    <Container>
      <ResultsTitle>Proponowane produkty</ResultsTitle>
      <ResultsSubtitle>
        Oto nasze rekomendacje na podstawie Twoich wyborów
      </ResultsSubtitle>
      
      {products.length === 0 ? (
        <NoProductsMessage>
          <h3>Brak dostępnych produktów</h3>
          <p>Nie znaleźliśmy produktów pasujących do Twoich kryteriów. Spróbuj zmienić swoje wybory.</p>
        </NoProductsMessage>
      ) : (
        <ProductsGrid>
          {products.slice(0, 3).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </ProductsGrid>
      )}
      
      <ButtonContainer>
        <Button onClick={onReset}>
          Zacznij od nowa
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default ResultsStep;
