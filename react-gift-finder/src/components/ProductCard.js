import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  max-width: 250px;
  text-align: center;
  border: 3px solid transparent;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
    border-color: #667eea;
  }
  
  @media (max-width: 768px) {
    max-width: 200px;
    padding: 1rem;
  }
`;

const ProductLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  
  ${Card}:hover & {
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const ProductName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <ProductLink href={product.link} target="_blank" rel="noopener noreferrer">
        <Image src={product.src} alt={product.name} />
        <ProductName>{product.name}</ProductName>
        <Description>{product.description}</Description>
      </ProductLink>
    </Card>
  );
};

export default ProductCard;
